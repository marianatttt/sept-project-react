import {useEffect, useState} from "react";
import axios from "axios";
import {SpacX} from "../SpacX/SpacX";

const SpaceX = () => {

    let [spaceX,setSpaceX] = useState([])

    useEffect (()=>{
        axios.get('https://api.spacexdata.com/v3/launches/')
            .then(value => setSpaceX(value.data))
        },
    [])

 return (
  <div>
      {spaceX
          .filter(value => value.launch_year !== '2020')
          .map(value => <SpacX key={value.flight_number} item={value}/>)
      }
  </div>
 );
};

export {SpaceX};
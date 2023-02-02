import {ClassComponent} from "./components/ClassComponent";
import {useState} from "react";
import {FunctionComponent} from "./components/FunctionComponent";
import {UseReducer} from "./componentsReducer/useReducer";

const App = () => {
   // const [flag, setFlag] =  useState(true)
 return (
  <div>
      {/*{flag && <ClassComponent name={'kokos'}/>}*/}
      {/*{flag && <FunctionComponent name={'kokos'}/>}*/}
      {/*<button onClick={()=>setFlag(prev=>!prev)}>hide</button>*/}


      <UseReducer/>
  </div>
 );
};

export {App};
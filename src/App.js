import logo from './logo.svg';
import Component_TheRickAndMorty from "./components/hm1_part2/component_The Rick and Morty";
import "./components/hm1_part2/component_The Rick and Morty.css";


function App () {
    let characters = [
        {
            "id": 182,
            "name": "Jim",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/182.jpeg"
        },
        {
            "id": 136,
            "name": "Gazorpazorpfield",
            "status": "Alive",
            "species": "Alien",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/136.jpeg"
        },
        {
            "id": 336,
            "name": "Steven Phillips",
            "status": "Alive",
            "species": "Alien",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/336.jpeg"
        },
        {
            "id": 683,
            "name": "Evolved Narnian",
            "status": "Alive",
            "species": "Humanoid",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/683.jpeg",
        },
        {
            "id": 624,
            "name": "Snuffles",
            "status": "Alive",
            "species": "Animal",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/624.jpeg",
        },
        {
            "id": 269,
            "name": "Presidentress of The Mega Gargantuans",
            "status": "Alive",
            "species": "Humanoid",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/269.jpeg",
        }
    ]
  return (
      <div className="container">
          {
              characters.map((character)=> <Component_TheRickAndMorty
                      key={character.id}
                      item={character}/>
              )
          }
      </div>
  );
}
export default App;

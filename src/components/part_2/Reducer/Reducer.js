import {useReducer, useRef} from "react";
import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";

const reducer = (state, action) => {

    switch (action.type) {
        case 'New_Cat':
            const [lastCat] = state.cats.slice(-1)
            const idCat = lastCat?lastCat.id+1:1
            return {...state, cats:[...state.cats, {id:idCat, name:action.payload}]}
        case 'Delete_Cat':
            const indexCat = state.cats.findIndex(cat=>cat.id===action.payload)
            state.cats.splice(indexCat, 1)
            return {...state}
        case 'New_Dog':
            const [lastDog] = state.dogs.slice(-1)
            const idDog = lastDog?lastDog.id+1:1
            return {...state, dogs:[...state.dogs, {id:idDog, name:action.payload}]}
        case 'Delete_Dog':
            const indexDog = state.dogs.findIndex(dog=>dog.id===action.payload)
            state.dogs.splice(indexDog, 1)
            return {...state}
        default:
            return {...state}

    }
}


const Reducer = () => {

    const input1 = useRef()
    const input2 = useRef()

    const initValue = () => (
        {cats: [], dogs:[]}
    )

    const [state, dispatch] = useReducer(reducer,null, initValue)

    const newCat = () => {
        dispatch({type: 'New_Cat', payload: input1.current.value})
        input1.current.value = ''
    }


    const newDog = () => {
        dispatch({type: 'New_Dog', payload: input2.current.value})
        input2.current.value = ''

    }

    return (
        <div>

            <div>
                <input type={'text'} ref={input1}/>
                <button onClick={newCat}>newCat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                <input type={'text'} ref={input2}/>
                <button onClick={newDog}>newDog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {Reducer};
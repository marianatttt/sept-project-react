const Dog = ({dog, dispatch}) => {
    const {id, name} = dog
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>{dispatch({type:'Delete_Dog', payload:id})}}>delete</button>
        </div>
    );
};

export {
    Dog
}

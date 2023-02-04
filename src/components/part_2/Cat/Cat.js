const Cat = ({cat, dispatch}) => {
    const {id, name} = cat
 return (
  <div>
      <div>id: {id}</div>
      <div>name: {name}</div>
      <button onClick={()=>dispatch({type:'Delete_Cat', payload:id})}>delete</button>
  </div>
 );
};

export {Cat};
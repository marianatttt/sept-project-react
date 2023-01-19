const Post = ({post, setDetails}) => {
    const {userId, id, title, body} = post;

 return (
  <div>
      <div>id: {userId}</div>
      <div>title: {title}</div>
      <button onClick={()=>setDetails(post)}>details</button>
  </div>
 );
};
export {Post};
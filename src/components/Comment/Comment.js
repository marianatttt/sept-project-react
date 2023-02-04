import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    const navigate = useNavigate()



 return (

    <div>
      <div>id: {id}</div>
      <div>postId: {postId}</div>
      <div>name: {name}</div>
      <div>email: {email}</div>
      <div>body: {body}</div>
      <button onClick={()=>navigate(id.toString(),{state:comment})}>post</button>
    </div>

 );
};

export {Comment};
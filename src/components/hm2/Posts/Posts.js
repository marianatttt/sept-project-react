import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {postsService} from "../../../services/postsService";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [details, setDetails] =useState(null);

    useEffect(()=>{
            postsService
                .then(value => value.data)
                .then(value => setPosts([...value]))
        },
    [])

    return (
        <div>
            <h1>PostDetails</h1>
            {
                details && (<div>
                    <b>userId:</b>{details.userId};
                    <b> id:</b>{details.id};
                    <b>title:</b>{details.title};
                    <b> body:</b>{details.body};
                </div>)
            }

            <hr/>

            <h1>Posts:</h1>
            {posts.map(post => <Post key={post.id} post={post} setDetails={setDetails}/>)}
        </div>
    )
}

export {Posts};
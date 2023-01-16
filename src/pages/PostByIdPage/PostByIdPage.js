import {useParams} from "react-router-dom";
import {PostById} from "../../components";

const PostByIdPage = () => {
    const {postId} =  useParams()
    return (
        <div>
              <PostById postId={postId}/>
        </div>
    );
};

export {
    PostByIdPage
}
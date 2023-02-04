import {useParams} from "react-router-dom";
import {PostById} from "../../components";
import css from './PostById.module.css';
import {useLocation} from "react-router-dom"



const PostByIdPage = () => {
    const {postId} =  useParams();
    const {state} = useLocation();



    return (
        <div className={css.PostById}>
              <PostById postId={postId} state={state}/>
        </div>
    );
};

export {
    PostByIdPage
}
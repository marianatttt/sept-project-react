import {useEffect, useState} from "react";
import {postsService} from "../../services";

const PostById = ({postId, state}) => {

    const [post, setPost]= useState(null)


    useEffect(()=> {
        if (state) {
            setPost({...state})
        } else {
            postsService.getPostId(postId).then(({data})=>
                setPost(data))
        }

    }, [postId])

 return (
  <div>
      {post &&
          <>
          <div>id: {post.id}</div>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
          </>
      }
  </div>
 );
};

export {PostById}
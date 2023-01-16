import {useEffect, useState} from "react";
import {postsService} from "../../services";

const PostById = ({postId}) => {

    const [post, setPost]= useState(null)


    useEffect(()=> {
        postsService.getPostId(postId).then(({data})=>
            setPost(data)
        )
    }, [postId])

 return (
  <div>
      {post &&
          <>
          <div>id: {post.id}</div>
          <div>user: {post.postId}</div>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
          </>
      }
  </div>
 );
};

export {PostById};
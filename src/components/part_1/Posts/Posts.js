import {Component} from "react";
import {postsService} from "../../../services";
import {ClassComponentPost} from "../Post/Post";
import '../css/index.css'

class ClassComponentPosts extends Component{
        constructor(props) {
            super(props);
            this.state = {posts:[]}

        }
        componentDidMount() {
            postsService.getAll().then(value=>value.data).then(value=>this.setState({posts:[...value]}))
        }

render() {
      return (
          <div className={'box'}>
              <h4>Posts</h4>
              {this.state.posts.map(post => <ClassComponentPost key={post.id} post={post}/>)}
          </div>
      )
}
}

export {
    ClassComponentPosts
}



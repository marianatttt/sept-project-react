import {Component} from "react";
import {commentsService, postsService} from "../../services";
import {ClassComponentComment} from "../Comment/Comment";

class ClassComponentComments extends Component {
    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }

    // componentDidMount() {
    //     commentsService.getAll().then(({value}) => this.setState({comments:value}))
    // }
    componentDidMount() {
        commentsService.getAll().then(value=>value.data).then(value=>this.setState({comments:[...value]}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <ClassComponentComment key={comment.id} comment={comment}  />)}
            </div>
        )
    }
}

export {ClassComponentComments}



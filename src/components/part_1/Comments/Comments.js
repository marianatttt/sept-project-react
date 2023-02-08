import {Component} from "react";

import {commentsService} from "../../../services";
import {ClassComponentComment} from "../Comment/Comment";
import '../css/index.css'


class ClassComponentComments extends Component {
    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }

    componentDidMount() {
        commentsService.getAll().then(value=>value.data).then(value=>this.setState({comments:[...value]}))
    }

    render() {
        return (
            <div className={'box'}>
                <h4>Comments</h4>
                {this.state.comments.map(comment => <ClassComponentComment key={comment.id} comment={comment}  />)}
            </div>
        )
    }
}

export {ClassComponentComments}



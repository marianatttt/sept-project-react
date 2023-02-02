import {Component} from "react";

class ClassComponentComment extends Component {

    render() {
        return(
            <div>
                <div>id: {this.props.comment.id}</div>
                <div>postId: {this.props.comment.postId}</div>
                <div>name: {this.props.comment.name}</div>
                <div>email: {this.props.comment.email}</div>
                <div>body: {this.props.comment.body}</div>
            </div>
        )

    }
}

export {ClassComponentComment}
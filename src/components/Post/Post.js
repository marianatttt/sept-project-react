import {Component} from "react";

class ClassComponentPost extends Component{

render() {
    return (
        <div>
            <div>userId: {this.props.post.userId}</div>
            <div>id: {this.props.post.id}</div>
            <div>title: {this.props.post.title}</div>
            <div>body: {this.props.post.body}</div>
        <hr/>
        </div>
    );
}
};

export {ClassComponentPost};
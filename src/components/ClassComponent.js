import {Component} from "react";


class ClassComponent extends Component{
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {a:0, b:25}
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.a >= 7) {
            return 'a>7'
        }
        return null
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        console.log('prevProps');
        console.log('prevState');
        console.log('snapshot')
    }

    inc(){
        // this.setState({a:55})
        this.setState(prev=>({a:prev.a+1, b:prev.b-1}))

    }


    render() {
        console.log('render')
        return (
        <div>
            <div>A:{this.state.a}</div>
            <div>B:{this.state.b}</div>
            <div>Name:{this.props.name}</div>
            <button onClick={()=>this.inc()}>incr</button>


        </div>
        )
    }
}

export {
    ClassComponent
}


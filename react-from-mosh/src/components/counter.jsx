import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    handleIncrement = ()=>{
        this.setState({
            value: this.state.value + 1
        })
    }
    render() {
        return (
            <div>
                 {this.props.counter.id}
                <span className={this.getBadgeClasses()}> {this.formatvalue()} </span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
        )
    }
    getBadgeClasses()
    {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0 ? 'warning' : 'primary');
        return classes;
    }

    formatvalue(){
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;
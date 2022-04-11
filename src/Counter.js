import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleOnIncrease = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleOnDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleOnIncrease}>+1</button>
                <button onClick={this.handleOnDecrease}>-1</button>
            </div>
        )
    }
}

export default Counter
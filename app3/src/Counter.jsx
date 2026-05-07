import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    Increment() {
        this.setState({  // setState is used to update the state of the component
            count: this.state.count + 1
        });
    }
    Decrement() {
        this.setState({ // setState is used to update the state of the component
            count: this.state.count - 1
        });
    }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.Increment()}>  Increment(+) </button>
        <button onClick={() => this.Decrement()}>  Decrement(-) </button>
      </div>
    )
  }
}
export default Counter;
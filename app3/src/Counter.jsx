import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    Increment=() => {
        this.setState({  // setState is used to update the state of the component
            count: this.state.count + 1
        });
    }
    Decrement=() => {
        this.setState({ // setState is used to update the state of the component
            count: this.state.count - 1
        });
    }
    Reset=() => {
        this.setState({ // setState is used to update the state of the component
            count: 0
        });
    }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        {/* onClick is an event handler that is called when the button is clicked */}
        <button onClick={this.Increment}>  Increment(+) </button>
        <button onClick={this.Decrement} disabled={this.state.count === 0}>  Decrement(-) </button> {/* disable the decrement button when count is 0 */}
        <button onClick={this.Reset}>  Reset(#) </button>

      </div>
    )
  }
}
export default Counter;
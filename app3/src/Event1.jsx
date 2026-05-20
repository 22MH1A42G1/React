import React, { Component } from 'react'

class Event1 extends Component {
  handle = (e) => {
    console.log('Button clicked!',e);
  }

  render() {
    return (
      <div>
        <h1>--------------------------------------------------</h1>
        <h1>Event Handling in React</h1>
        <button onClick={this.handle}>Click</button>
      </div>
    )
  }
}
export default Event1;
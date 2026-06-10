import React, { Component } from 'react'

export class CallbackChild extends Component {
    constructor() {
        super();
        this.state = {
            ChildValue: 200
        }
    }
  render() {
    return (
      <div>
        <h3>Callback Child: {this.props.value}</h3>
        <button onClick={()=>this.props.changeParentValue(this.state.ChildValue)}>Change Parent Value</button>
      </div>
    )
  }
}

export default CallbackChild
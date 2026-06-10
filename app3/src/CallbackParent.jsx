import React, { Component } from 'react'
import CallbackChild from './CallbackChild';
export class CallbackParent extends Component {
  constructor() {
    super();
    this.state = {
      parentValue: '100'
    };
  }
  changeParentValue=(ChildValue)=>{
      this.setState(
        {parentValue:ChildValue}
      )
    }
  render() {
    return (
      <div>
        <h3>CallbackParent : {this.state.parentValue}</h3>
        <CallbackChild value={this.state.parentValue} changeParentValue={this.changeParentValue}/>
        
      </div>
    )
  }
}

export default CallbackParent
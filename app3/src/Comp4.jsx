import React, { Component } from 'react'

export default class Comp4 extends Component {
  constructor(){
    super() // call parent class constructor
    this.state = {
      cid:1001,
      cname:"react",
      fee:4500
    }
  }
  render() {
    return (
      <div>
        <h3>-------Component4--------</h3>
        <h3>cid: {this.state.cid}</h3>
        <h3>cname: {this.state.cname}</h3>
        <h3>fee: {this.state.fee}</h3>
      </div>
    )
  }
}

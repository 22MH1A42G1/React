import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h3>Child : {this.props.name}, job is : {this.props.job}</h3>
      </div>
    )
  }
}

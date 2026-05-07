import React, { Component } from 'react'
import Child from './Child';
export default class Parent extends Component {
  render() {
    return (
        <div>
            <p>----------------------------------------------------------------------------</p>
            <h3>Parent</h3>
            <Child name="Aditya" job="Developer"/>
        </div>
    )
  }
}

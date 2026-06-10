import React, { Component } from 'react'
import Comp103 from './Comp103';

export class Comp102 extends Component {
  render() {
    return (
      <div>
        <h1>Comp102 </h1>
        <Comp103 />
      </div>
    )
  }
}


export default Comp102
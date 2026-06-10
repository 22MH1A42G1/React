import React, { Component } from 'react'
import { MyContext } from './Comp101';
export class Comp105 extends Component {
  render() {
    return (
      <div>
        <h1>Comp105 : </h1>
        <MyContext.Consumer>
          {
            ({data, feeIncrement}) => {
              return (
                <div>
                  <p>RollNo : {data.rollNo}</p>
                  <p>Name : {data.name}</p>
                  <p>Fee : {data.fee}</p>
                  <button onClick={feeIncrement}>Increment Fee</button>
                </div>
              )
            }
          }
        </MyContext.Consumer>
      </div>
    )
  }
}

export default Comp105
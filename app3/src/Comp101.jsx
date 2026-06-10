import React, { Component } from 'react'
import Comp102 from './Comp102';
export const MyContext = React.createContext();

export class Comp101 extends Component {
    constructor() {
        super() 
        this.state = {
            rollNo : '22MH1A42G1',
            name: 'Aditya',
            fee: 18000
        }
    }
    feeIncrement = () => {
        this.setState({
            fee: this.state.fee + 1000
        })
    }


  render() {
    const ContextData = {
        data : this.state,
        feeIncrement : this.feeIncrement
    }
    return (
      <div>
        <h1>Comp101 </h1>
        {/* <Comp102 name={this.state.name} /> */}
        <MyContext.Provider value={ContextData}>
            <Comp102 />
        </MyContext.Provider>
      </div>
    )
  }
}

export default Comp101
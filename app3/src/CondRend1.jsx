import React, { Component } from 'react'

class CondRend1 extends Component {
  constructor(){
    super();
    this.state={
        isLoggedIn:true,
        user:"Aditya"
    }
  }
  render() {
    if(this.state.isLoggedIn){
        return <h3>Welcome {this.state.user}</h3>
    }
    return <h3>Please Login</h3>
  }
}
export default CondRend1;
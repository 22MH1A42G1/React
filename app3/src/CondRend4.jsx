import React, { Component } from 'react'

class CondRend4 extends Component {
  constructor(){
    super();
    this.state={
        isLoggedIn:true,
        user:"Aditya"
    }
  } 
  render() {
    let msg;
    if(this.state.isLoggedIn){
        msg = <h3>Welcome {this.state.user}</h3>
    }
    else{
        msg = <h3>Please Login</h3>
    }
    return (
      <div>{msg}</div>
    )
  }
}
export default CondRend4;
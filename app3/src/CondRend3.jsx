import React, { Component } from 'react'

class CondRend3 extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
            user: "Aditya"
        }
    }
    render() {
    return (
      <div>
        {
            this.state.isLoggedIn && <h3>Welcome {this.state.user}</h3> 
        }
      </div>
    )
  }
}
export default CondRend3;
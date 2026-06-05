import React, { Component } from 'react'

class CondRend5 extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: "Aditya"
    }
  }
  changeStatus = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }
    render() {
    return (
    <div>
      {this.state.isLoggedIn && <h3>Login Successful : {this.state.user}</h3>}
      {!this.state.isLoggedIn && <h3>Login Here</h3>}
      <button type="button" onClick={this.changeStatus}>
        {this.state.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
    )
  }
}
export default CondRend5;
import React, { Component } from 'react'

export class Login extends Component {

constructor()
{
    super();
    this.state={
        username:'',
        password:''
    }

}  
readUserName=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
}

readPassword=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
}

readLoginData=(e)=>{
    e.preventDefault();
    console.log(this.state);
}
render() {
    return (
      <div>
        <form onSubmit={this.readLoginData}>
          <input type='text' name = 'username' placeholder='Enter your Username' value={this.state.username} onChange={this.readUserName} />
          <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.readPassword} />
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
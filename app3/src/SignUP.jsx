import React, { Component } from 'react'

export class SignUP extends Component {
constructor()
{
    super();
    this.state={
        name:'',
        email:'',
        password:''
    }
}
readInput=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
}
SignUPData=(e)=>{
    e.preventDefault();
    const {name,email,password} = this.state;
    const user = {name,email,password};
    const ExistingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // new user adding to existing user array
    ExistingUsers.push(user);

    //store back to local storage
    localStorage.setItem('users',JSON.stringify(ExistingUsers));
    alert("SignUp Done Successfully !!")

    // clear form after submit
    this.setState({
        name:'',
        email:'',
        password:''
    })
}
  render() {
    return (
      <div>
        <form onSubmit={this.SignUPData}>
            <input type='text' name = 'name' placeholder='Enter your Name' value={this.state.name} onChange={this.readInput} />
            <input type='email' name='email' placeholder='Enter your Email' value={this.state.email} onChange={this.readInput} />
            <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.readInput} />
            <button type='submit'>SignUP</button>
        </form>
      </div>
    )
  }
}

export default SignUP
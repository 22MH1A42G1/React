## Day 10

### Reading Form Data (Login Example)

In React, we often need to read user input from forms (like login forms).  
This is done using **state** and **event handlers**.

---

#### login

```jsx
import React, { Component } from 'react'

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  // Updates state when username input changes
  readUserName = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Updates state when password input changes
  readPassword = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Handles form submission
  readLoginData = (e) => {
    e.preventDefault(); // prevents page reload
    console.log(this.state); // prints username & password
  }

  render() {
    return (
      <div>
        <form onSubmit={this.readLoginData}>
          <input 
            type='text' 
            name='username' 
            placeholder='Enter your Username' 
            value={this.state.username} 
            onChange={this.readUserName} 
          />
          <input 
            type='password' 
            name='password' 
            placeholder='Password' 
            value={this.state.password} 
            onChange={this.readPassword} 
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
```
#### output
<img width="685" height="365" alt="image" src="https://github.com/user-attachments/assets/fa5478a1-8769-47f8-b2c0-34b5ee3df353" />

### Store signup data in local storage.

```jsx
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
```

#### output

> before submit 

<img width="815" height="504" alt="image" src="https://github.com/user-attachments/assets/7277e53c-e45c-4e15-a73c-f0b9609dea94" />


> after submit 
 
<img width="671" height="359" alt="image" src="https://github.com/user-attachments/assets/c49f5dd3-d2bc-44c4-b849-067c8c7f0dc9" />


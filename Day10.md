## Day 10

### Reading Form Data (Login Example)

In React, we often need to read user input from forms (like login forms).  
This is done using **state** and **event handlers**.

---

### Code Walkthrough

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
### output
<img width="685" height="365" alt="image" src="https://github.com/user-attachments/assets/fa5478a1-8769-47f8-b2c0-34b5ee3df353" />



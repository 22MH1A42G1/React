# Day 08

## Conditional Rendering
In the React 
1. Use if/else for complex logic.
2. Use ternary for simple two-way conditions.
3. Use && for one-way conditions (render only if true).
4. Store the condition in a `msg` variable and return it.
5. Use && for login/logout button conditions (render only if true else false).

---

eg1: **CondRend1.jsx**
```
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
```
<img width="402" height="293" alt="image" src="https://github.com/user-attachments/assets/594e8e60-fef5-4af0-8f85-851d22aa00cb" />

eg2: **CondRend2.jsx**
```
import React, { Component } from 'react'

class CondRend2 extends Component {
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
            this.state.isLoggedIn ? <h3>Welcome {this.state.user}</h3> : <h3>Please Login</h3>
        }
      </div>
    )
  }
}
export default CondRend2;
```
<img width="402" height="293" alt="image" src="https://github.com/user-attachments/assets/f37dff8d-192c-4a6e-ac16-8ac5ddba3b90" />

eg3: **CondRend3.jsx**
```
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
```
<img width="402" height="293" alt="image" src="https://github.com/user-attachments/assets/a16bcac1-aaed-4faa-b7e0-5d57bfaaa05b" />

eg4: **CondRend4.jsx**
```
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
```
<img width="402" height="293" alt="image" src="https://github.com/user-attachments/assets/a16bcac1-aaed-4faa-b7e0-5d57bfaaa05b" />

eg5: **CondRend5.jsx**
```
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
```

<img width="412" height="273" alt="image" src="https://github.com/user-attachments/assets/d60688c4-18db-438f-a764-4476e2c9021a" />
<img width="381" height="261" alt="image" src="https://github.com/user-attachments/assets/7caee393-8647-4008-a2ac-d86da482bfa3" />

## Styling Component 

1. Use {} in React JSX to embed JavaScript.
2. Use {{}} when you’re embedding an object literal (like inline styles).

eg: inline css
```
import React, { Component } from 'react'

class StyleComp1 extends Component {
  render() {
    return (
      <div>
        <h3 style={{color:'red', backgroundColor:'aquamarine', fontSize:'30px'}}>Welcome</h3>
      </div>
    )
  }
}
export default StyleComp1;
```
<img width="393" height="310" alt="image" src="https://github.com/user-attachments/assets/b3dbcfa2-a7af-454d-9813-89e32c20daa3" />

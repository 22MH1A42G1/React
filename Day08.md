# Day 08

## Conditional Rendering
In the React 
1. Use if/else for complex logic.
2. Use ternary for simple two-way conditions.
3. Use && for one-way conditions (render only if true).
   
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

eg3: **CondRend.jsx**
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

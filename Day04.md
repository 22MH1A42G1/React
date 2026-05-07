# Day 04

checking version
````
node -v
````
createing application
```
npx create-react-app@latest app3
```
after change direactory
```
cd app3
```
open that direactory in cmd, now open code in vscode
```
code .
```
after run command start application on localhost
```
npm start
```

and now we create new component for we just **Comp1.jsx** in /src folder:

**Comp1.jsx**
```
import React, {Component} from "react";
class Comp1 extends Component{
    render(){
        return (
            <h3>-------Component1-------</h3>
        );
    }
}
export default Comp1;
```
**Comp2.jsx**
```
import React, {Component} from "react";
class Comp2 extends Component{
     render(){
            return (
                 <h3>-------Component2-------</h3>
            )
     }
}
export default Comp2;
```
**Comp3.jsx**
```
import React, {Component} from "react";
class Comp3 extends Component{
     cid = "1001";
     student = {cname:"React", fee:5500};
     render(){
            return (
                 <div>
                    <h1>------Component3------</h1>
                     <h3>Course id : {this.cid} | Name : {this.student.cname} | {this.student.fee}</h3>
                  </div>
            )
     }
}
export default Comp3;
```
**Comp4.jsx**
```
import React, { Component } from 'react'

export default class Comp4 extends Component {
  constructor(){
    super() // call parent class constructor
    this.state = {
      cid:1001,
      cname:"react",
      fee:4500
    }
  }
  render() {
    return (
      <div>
        <h3>-------Component4--------</h3>
        <h3>cid: {this.state.cid}</h3>
        <h3>cname: {this.state.cname}</h3>
        <h3>fee: {this.state.fee}</h3>
      </div>
    )
  }
}
```
**App.js**
```
import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
function App() {
    return (
        <div className="App">
            <header className="App-header">
              <h3>React Appliction</h3>
            </header>
            <Comp1 />
            <Comp2 />
            <Comp3 /> 
            <Comp4 />
        </div>
    );
}
export default App;
```
and also change style in **App.css**
```
....
.App-header {
  background-color: #282c34;
  min-height: 0; // change 100vh to 0 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
....
```

<img width="681" height="588" alt="image" src="https://github.com/user-attachments/assets/0a0cf485-c232-43ad-ab4d-bc3c99050a8a" />


---

# Props
Props are used to transfer data from one component's state to another.

In React, props (short for "properties") are used to pass information from one component to another. The main purpose of props is to allow a parent component to send data to its child components.

- Props cannot be modified by the receiving component.
- They are strictly for reading data and should not be altered.
- Props can be updated when the parent component’s state changes.

**Child.jsx**
```
import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h3>Child : {this.props.name}, job is : {this.props.job}</h3>
      </div>
    )
  }
}

```

**Parent.jsx**
```
import React, { Component } from 'react'
import Child from './Child';
export default class Parent extends Component {
  render() {
    return (
        <div>
            <p>----------------------------------------------------------------------------</p>
            <h3>Parent</h3>
            <Child name="Aditya" job="Developer"/>
        </div>
    )
  }
}
```
**App.js**
```
// import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
function App() {
    return (
        <div className="App">
            <header className="App-header">
              <h3>React Appliction</h3>
            </header>
            <Parent />
        </div>
    );
}
export default App;
```

output is 
<img width="683" height="535" alt="image" src="https://github.com/user-attachments/assets/c4927256-1b95-4c23-a6dc-519d87230d5f" />


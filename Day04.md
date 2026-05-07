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
import React, {Component} fromm "react";
class Comp1 extends Component{
     render(){
            return (
                 <h3>Component1</h3>
                 <h3>Component1</h3>
            )
     }
}
export default Comp1;
```
**Comp2.jsx**
```
import React, {Component} fromm "react";
class Comp2 extends Component{
     render(){
            return (
                 <h3>Component2</h3>
                 <h3>Component2</h3>
            )
     }
}
export default Comp2;
```
**Comp3.jsx**
```
import React, {Component} fromm "react";
class Comp3 extends Component{
     cid = "1001";
     student = {cname:"React", fee:5500};
     render(){
            return (
                 <div>
                     <h3>Course id : {this.cid} | Name : {this.student.cname} | {this.student.fee}</h3>
                  </div>
            )
     }
}
export default Comp3;
```
**App.js**
```
import logo from './logo.svg';
import './App.css';
import Comp1 from './Comp1';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                   <h3>React Appliction</h3>
            </header>
            <Comp1 />
            <Comp2 />
            <Comp3 />
        </div>
    );
}
export default App;
```

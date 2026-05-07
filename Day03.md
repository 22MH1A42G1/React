# cmd
>> first you can check version
```
node -v
```
>> after create your app
```
npx create-react-app@latest app2
```
Their are 2 types of Components in ReactJS
1. Class-based
   
i) import, class, and export statements.
```
import React, {Component} from "react";
class Comp1 extends Component {
    render() {
        return (
            <h1>This is Component1</h1>
        )
    }
}
export default Comp1;
```

ii) after import app.js
```
import './App.css';
import Comp1 from './comp1';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App Development</h1>
      </header>
      <Comp1 />
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
iii) atlast run this application
```
npm start
```
after output is
<img width="1359" height="635" alt="image" src="https://github.com/user-attachments/assets/f79f4352-2075-4abb-b272-82c566613049" />

2. Functional based


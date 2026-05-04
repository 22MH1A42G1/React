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
iii) atlast run this application
```
npm start
```

3. Functional based


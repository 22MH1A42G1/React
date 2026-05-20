# Day 01
---
# React
React is a JavaScript library for building user interfaces (UIs) on the web. React is a declarative, component based library that allows developers to build reusable UI components and It follows the Virtual DOM (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries.
<img width="1000" height="500" alt="image" src="https://github.com/user-attachments/assets/5c3df556-db0d-4854-bd56-7d830d020692" />

# DOM 
The HTML DOM (Document Object Model) is a structured representation of a web page that allows developers to access, modify, and control its content and structure using JavaScript. It powers most dynamic website interactions, enabling features like real-time updates, form validation, and interactive user interface
<img width="800" height="400" alt="image" src="https://github.com/user-attachments/assets/62c57d7c-6852-416b-9a9e-2e1b275d307d" />
---
## Day 02
---
## What is React?
- it is a js library to develop UI

**React Application Creation Steps**

1. run this commnad for checking node working or not
```
node -v
```

2. create this path if you don't have D drive
```
desktop
    fs
        react
```

3. after run this command in terminal for creating React Application
```
npx create-react-app@latest app1
```

4. afer run this command in terminal for change directory command
```
cd app1
```

5. after run this command in terminal for to see the output
```
npm start
```
---
## Day 03
---
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

---
# Day 04
---
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

>> output is 

<img width="683" height="535" alt="image" src="https://github.com/user-attachments/assets/c4927256-1b95-4c23-a6dc-519d87230d5f" />

---
## Day 05
---
### templates

This HTML file is a template.
- If you open it directly in the browser, you will see an empty page.
- You can add webfonts, meta tags, or analytics to this file.
- The build step will place the bundled scripts into the <body> tag.
- To begin the development, run `npm start` or `yarn start`.
- To create a production bundle, use `npm run build` or `yarn build`.

### Architecture Diagram
```
                     connects to
  index.html           <------    index.js                                                     <------ App.js
--------------------------    --------------------------------------------------------------------   ----------------          
| <div id="root"> </div> |    | const root=ReactDOM.createRoot(document.getElementById('root');  |   |              |
--------------------------    | root.render(                                                     |   |              |
                              |      <React.StrictMode>                                          |   ----------------
                              |            <App />                                               |
                              |      </React.StrictMode>                                         |
                              | );                                                               |
                              --------------------------------------------------------------------
```
`index.js` connects components to the `<App />` tag in `index.html` to load templates.

###  events handling
  - events are user actions on application inside the browser.
      1. click -- Onclick increment & decrement using `setState`
         eg: [Counter.jsx](app3/src/Counter.jsx)
         - methods are actions on particular event
        
<img width="768" height="384" alt="image" src="https://github.com/user-attachments/assets/eaedb359-8e7e-4b15-9810-fd4cf8c637d4" />



completed topics
----------------

1. what is react
2. single page application (index.html in public folder)
   - understanding single page applications(index.js, app.js)
3. Virtual DOM concepts?
4. installation process
   - create-react-app@latest
5. project creation
   - `/node modules` --> required modules to develop applications.
   - `/public`  --> here files are public.
   - `/src`  --> here develop write entire application code.
   - `package.json` --> 
   - `package-lock.json` -->
   - `README.md` --> instructions for how to work or run this project.
6. what is JSX? (className)
   - Jsx Rules.
     1. any function / class method returns only one element.
   - Rendering elements.
   - understanding parent and child relation.
7. components
8. class, functional
9. class component creation
    - constructor
    - state
    - props
10. events handling
    - events are user actions on application inside the browser.
      1. click -- Onclick increment & decrement using `setState`
         eg: [Counter.jsx](app3/src/Counter.jsx),
             [Event.jsx](app3/src/Event1.jsx)
---
## Day 06
---
### events

<img width="768" height="384" alt="image" src="https://github.com/user-attachments/assets/7ebb0172-d260-4256-9e7e-30917ef5c9f6" />
<br>
- events are user actions on application inside the browser.

**setState**
- click -- Onclick increment & decrement using `setState` eg: Counter.jsx
- `setState` is used to update the state of the component, it is in-built function to update component state.
- `setState` is one of the official way to update a component state as and when you update state with setState it triggers the render() method again re-render
- component is mounted the `render()` method executed, when it called UI.
- methods are actions on particular event
- `setState` is a method provided by `React.Component`
syntax:
```
this.setState(updater, callback);
```

eg: [GetCourse.jsx]()

```
--------------👉 button  ------👉 target
| click me|                         ☝
-----------| (event) passing 👇      |
           |--👉onClick(Function)    |
     -----------------------------👉 input
Name |    a             |
     -------------------- (event) passing
                     |--> onChange(function)
```
1. before page

<img width="684" height="339" alt="image" src="https://github.com/user-attachments/assets/37cd191c-5af5-40b7-863e-fcc1417a33be" />
<br>

2. after click on add React

<img width="677" height="329" alt="image" src="https://github.com/user-attachments/assets/1da99fb7-d7bf-4437-8bdb-dfb70f62542e" />
<br>

3. after click on add java script

<img width="658" height="283" alt="image" src="https://github.com/user-attachments/assets/591376c7-1051-4e1a-a3ce-9887d761a994" />
<br>

4. after clicking reset course

<img width="679" height="371" alt="image" src="https://github.com/user-attachments/assets/eefca372-65f5-4382-aeed-224797abe20d" />

---

Q) How to pass an argument as an event.

**GetCourse2.jsx**
```
import React, { Component } from 'react'

export default class GetCourse2 extends Component {
  constructor() { // constructor is a special method that is called when an instance of the class is created
    super(); // call parent class constructor
    this.state = { // state is an object that holds the data of the component
      course: ''
    };
  }
  addCourse=(e) => { // e is the event object that is passed to the event handler
    console.log(e.target.innerText); // e.target is the element that triggered the event and innerText is the text content of the element
    this.setState({ // setState is used to update the state of the component
      course: e.target.innerText
    })
  };
  
  render() {
    return (
      <div>
        <h1>-----------GetCourse2--------------------</h1>
        <h3>Course: {this.state.course}</h3>
        {/* onClick is an event handler that is called when the button is clicked */}
        <button onClick={this.addCourse}>React</button>
        <button onClick={this.addCourse}>JavaScript</button>
        <button onClick={this.addCourse}>Python</button>
        <button onClick={this.addCourse}>Java</button>
        <button onClick={this.addCourse}>C++</button>
      </div>
    );
  }
}


```
1. after click on button react

<img width="1283" height="495" alt="image" src="https://github.com/user-attachments/assets/d3971460-9ede-40de-9a0e-5f043c7e00b9" />

2. all buttons clicked after

<img width="1363" height="428" alt="image" src="https://github.com/user-attachments/assets/f7d10f4e-f4d5-493f-a55d-ac1517b072f1" />

---

**ReadText.jsx**
```
import React, { Component } from 'react'

class ReadText extends Component {
    constructor(){
        super();
        this.state={
            courseName:""
        }
    }

    readCourse=(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        // this.setState({ // setState is used to update the state of the component
        //     courseName:e.target.value
        // })
    }
  render() {
    return (
      <div>
        <h1>Course: {this.state.courseName} </h1>
        <input type="text" id="" onChange={this.readCourse}/>
        <button>Read</button>
      </div>
    )
  }
}
export default ReadText;
```

- event, event.target, event.target.value (without setState)
<br>
<img width="684" height="681" alt="image" src="https://github.com/user-attachments/assets/91d4f3cb-9af4-4a70-87da-4622f7729905" />

- event, event.target, event.target.value (with setState)
<img width="682" height="719" alt="image" src="https://github.com/user-attachments/assets/1eb65ad3-e9ab-4b1d-aa98-747c33615568" />

---
# Day 07
---
## Component implementation:

1.  Initialize the component's state with `course` and `courses` in the constructor:

```javascript
constructor(){
  super()
  this.state= {
    course:'',
    courses:[]
  }
}
```

2. Implement `readCourse`, `addCourse`, `deleteCourseByIndex`, and `deleteCourseByCourseName` methods:

```javascript
import React, { Component } from 'react'

class Todo extends Component {
    constructor(){
        super();
        this.state={
            course:'',
            courses:[]
        }
    }
    readCourse=(e)=>{
        this.setState({ course: e.target.value })
    }
    addCourse=()=>{
        const trimmedCourse = this.state.course.trim();
        if (!trimmedCourse) return;
        this.setState({
            courses:[...this.state.courses, trimmedCourse],
            course:''
        })
    }
    deleteCourseByIndex=(index)=>{
        const updatedCourses = this.state.courses.filter((_,i)=>i!==index);
        this.setState({ courses: updatedCourses });
    }
    deleteCourseByCourseName=(courseName)=>{
        const updatedCourses = this.state.courses.filter((course)=>course!==courseName);
        this.setState({ courses: updatedCourses });
    }
  render() {
    return (
      <div>
        <label htmlFor="course">Course : </label>
        <input type="text" id="course" onChange={this.readCourse} />
        <button onClick={this.addCourse}>Add</button>
        <ul>
            {
                this.state.courses.map((course,index)=>(
                    <li key={index}>{course}
                        <button onClick={this.deleteCourseByIndex.bind(this,index)}>DeleteByIndex</button>
                        <button onClick={this.deleteCourseByCourseName.bind(this,course)}>DeleteByCourseName</button>
                    </li>
                ))
            }
        </ul>
      </div>
    )
  }
}
export default Todo;
```

3.  Within the `render` method, include a label and input field for the course, binding the `onChange` event to `readCourse`. Also, include `onClick` event for `addCourse`, `deleteCourseByIndex` and `deleteCourseByCourseName` methods.

4.  output
   <img width="1098" height="498" alt="image" src="https://github.com/user-attachments/assets/63808db9-3fe6-4b93-9a63-1d52bcd15d22" />


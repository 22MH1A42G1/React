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

#### React Application Creation Steps

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
#### First, check the version.
```
node -v
```

#### after create your app
```
npx create-react-app@latest app2
```

Their are 2 types of Components in ReactJS

#### 1. Class-based
   
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
#### 2. Functional based

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
---
# Day 08
---
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

---
# Day 09
---

This note explains React styling step by step using:
- Inline CSS
- Internal CSS
- External CSS
- Bootstrap CSS [Bootstrap 5.3 Introduction](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

---

## 1) Inline CSS

### Example 1: Direct inline style

```jsx
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

### Output
- Text color is **red**
- Background is **aquamarine**
- Font size is **30px**

<img width="393" height="310" alt="Inline CSS output" src="https://github.com/user-attachments/assets/b3dbcfa2-a7af-454d-9813-89e32c20daa3" />

---

### Example 2: Styling with variable objects (inline)

```jsx
import React, { Component } from 'react'

class StyleComp2 extends Component {
  render() {
    const style1 = {
        color:'red'
    }
    const style2 = {
        backgroundColor:'aquamarine',
    }
    const style3 = {
      fontSize:'30px'
    }
    return (
      <div>
        <h3 style={style1}>Welcome</h3> {/* using style1 object */}
        <h3 style={{...style1,...style2, ...style3}}>React app</h3>{/* using spread operator to combine style1 and style2 objects */}
      </div>
    )
  }
}
export default StyleComp2;
```

### Output
- First heading uses only `style1`
- Second heading combines `style1` + `style2` + `style3`

<img width="317" height="234" alt="image" src="https://github.com/user-attachments/assets/013517be-8a70-477d-9663-67b8e5fb5aaa" />


---

## 2) Internal CSS

Internal CSS means writing style rules inside the same component file.

```jsx
import React from 'react';

function StyleCompInternal() {
  return (
    <>
      <style>
        {`
          .internalHeading {
            color: blue;
            background-color: lightyellow;
            font-size: 28px;
            padding: 8px;
          }
        `}
      </style>

      <h3 className="internalHeading">Internal CSS Example</h3>
    </>
  );
}

export default StyleCompInternal;
```

### Output
- Heading is styled using class-based CSS in the same file.
<img width="363" height="222" alt="image" src="https://github.com/user-attachments/assets/7e57b662-a28e-44b0-bbc6-fa16a04c1df9" />

---

## 3) External CSS

External CSS means creating styles in a separate file and importing it.

### `StyleCompExternal.css`

```css
.externalHeading {
  color: green;
  background-color: #fff3cd;
  font-size: 26px;
  padding: 8px;
  border: 1px solid #f0ad4e;
}
```

### `StyleCompExternal.jsx`

```jsx
import React from 'react';
import './StyleCompExternal.css';

function StyleCompExternal() {
  return <h3 className="externalHeading">Welcome</h3>;
}

export default StyleCompExternal;
```

### Output
- Styling is managed in a separate CSS file.
- Best for reusability and large projects.
<img width="313" height="203" alt="image" src="https://github.com/user-attachments/assets/2063e131-6fee-409e-b0d6-75ec92d4584d" />

---

## 4) Bootstrap CSS in React

Bootstrap gives ready-made classes for layout and styling.

### Step 1: Install Bootstrap

```bash
npm install bootstrap
```

### Step 2: Import Bootstrap in `src/index.js`

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Step 3: Use Bootstrap classes
1. Buttons 
```jsx
import React from 'react';

function StyleCompBootstrap() {
  return (
    <div className="container mt-4">
      <h3 className="text-primary">Bootstrap Styling</h3>
      <button className="btn btn-success">Save</button>
      <button className="btn btn-danger ms-2">Delete</button>
    </div>
  );
}

export default StyleCompBootstrap;
```

### Output
- `text-primary` makes heading blue.
- `btn btn-success` and `btn btn-danger` give styled buttons.
- `ms-2` adds spacing between buttons.

<img width="288" height="185" alt="image" src="https://github.com/user-attachments/assets/5d5e0023-2d26-4888-9a1f-3aa8ef26e2b0" />

2. Images
```jsx
import React, { Component } from 'react'
import wallpaper1 from './img/wallpaper1.jpg';
class ImgComp1 extends Component {
  render() {
    return (
      <div>
        <h3>Image Component</h3>
        <img src={wallpaper1} alt='Trulli' width={500} height={300} />
      </div>
    )
  }
}
export default ImgComp1;
```

### Output
- It renders a heading Image Component.
- It shows the image wallpaper1.jpg at 500px × 300px.

<img width="647" height="473" alt="image" src="https://github.com/user-attachments/assets/4e4a62d0-6e77-4da8-b90b-70eebbd23b80" />

---

## Step-by-step commands to practice now

```bash
# 1) Create app
npx create-react-app app9-styling

# 2) Move into app
cd app9-styling

# 3) Start React app
npm start

# 4) Create components and CSS files in src/
#    StyleComp1.jsx, StyleComp2.jsx, StyleCompInternal.jsx,
#    StyleCompExternal.jsx, StyleCompExternal.css

# 5) For Bootstrap example
npm install bootstrap

# 6) Import bootstrap in src/index.js
#    import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## Quick Summary

- **Inline CSS**: Fast for single elements.
- **Internal CSS**: Useful when you want CSS inside one component file.
- **External CSS**: Best for clean and scalable styling.
- **Bootstrap CSS**: Fast UI development using prebuilt classes.

---
## Day 10
---
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


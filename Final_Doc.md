# Day 01

---

## React

React is an open-source JavaScript library developed by Meta for building fast, interactive, and reusable user interfaces using components and a Virtual DOM. React is a declarative, component based library that allows developers to build reusable UI components and It follows the Virtual DOM (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries.

<img width="1000" height="500" alt="image" src="https://github.com/user-attachments/assets/5c3df556-db0d-4854-bd56-7d830d020692" />

## DOM 

The HTML DOM (Document Object Model) is a structured representation of a web page that allows developers to access, modify, and control its content and structure using JavaScript. It powers most dynamic website interactions, enabling features like real-time updates, form validation, and interactive user interface

<img width="800" height="400" alt="image" src="https://github.com/user-attachments/assets/62c57d7c-6852-416b-9a9e-2e1b275d307d" />

---

# Day 02

---

## What is React?
- React is a component-based JavaScript library developed by Meta for building interactive user interfaces using reusable components and a virtual DOM.

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
# Day 03
---
#### First, check the version.
```
node -v
```

#### after create your app
```
npx create-react-app@latest app2
```

There are two main ways to create components in React:
1. Class Components (older approach)
2. Functional Components (modern and recommended approach)

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
  min-height: 0; /* change 100vh to 0 */
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

## Props
Props are used to pass data from a parent component to a child component.

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
# Day 05
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
     1. A React component must return a single root element.
eg; 
```
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```
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

# Day 06
---

### events

<img width="768" height="384" alt="image" src="https://github.com/user-attachments/assets/7ebb0172-d260-4256-9e7e-30917ef5c9f6" />
<br>
- events are user actions on application inside the browser.

**setState**
- click -- Onclick increment & decrement using `setState` eg: Counter.jsx
- `setState` is used to update the state of the component, it is in-built function to update component state.
- `setState()` is the built-in method used to update state in class components.
- When state changes, React re-renders the component. 
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

4. Keys help React identify which items have changed, been added, or removed.
Avoid using index as a key when items can be reordered.

5.  output

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

# Day 10
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
---

# Day 11
---

## Data transfer by using Props & State 

#### How should that process be done

<img width="545" height="329" alt="image" src="https://github.com/user-attachments/assets/26e83580-7f8a-4f3c-acc4-b43daa18117e" />

#### Example Code with Output

> Comp101.jsx  
Parent component holds **state** and passes it down as **props**.

```jsx
import React, { Component } from 'react'
import Comp102 from './Comp102';
export class Comp101 extends Component {
    constructor() {
        super() 
        this.state = {
            name: 'Aditya'
        }
    }
  render() {
    return (
      <div>
        <h1>Comp101 : {this.state.name}</h1>
        <Comp102 name={this.state.name} />
      </div>
    )
  }
}

export default Comp101

```

> Comp102.jsx  
Receives **props** and passes them further down.

```jsx
import React, { Component } from 'react'
import Comp103 from './Comp103';
export class Comp102 extends Component {
  render() {
    return (
      <div>
        <h1>Comp102 : {this.props.name}</h1>
        <Comp103 name={this.props.name}/>
      </div>
    )
  }
}

export default Comp102
```

> Comp103.jsx

```jsx
import React, { Component } from 'react'
import Comp104 from './Comp104';
export class Comp103 extends Component {
  render() {
    return (
      <div>
        <h1>Comp103 : {this.props.name}</h1>
        <Comp104 name={this.props.name}/>
      </div>
    )
  }
}

export default Comp103
```

> Comp104.jsx

```jsx
import React, { Component } from 'react'
import Comp105 from './Comp105';
export class Comp104 extends Component {
  render() {
    return (
      <div>
        <h1>Comp104 : {this.props.name}</h1>
        <Comp105 name={this.props.name}/>
      </div>
    )
  }
}

export default Comp104
```

> Comp105.jsx  
Final child component displays the prop.

```jsx
import React, { Component } from 'react'

export class Comp105 extends Component {
  render() {
    return (
      <div>
        <h1>Comp105 : {this.props.name}</h1>
      </div>
    )
  }
}

export default Comp105
```

#### 📌 Output Flow:

- `Comp101` holds the state (`name: "Aditya"`)

- Passes it down as props → `Comp102 → Comp103 → Comp104 → Comp105`

- Each component displays the same value.
<img width="393" height="488" alt="image" src="https://github.com/user-attachments/assets/d01328c4-5f4e-42df-ab12-4018c97b8eb8" />

## Context API

<img width="432" height="418" alt="image" src="https://github.com/user-attachments/assets/d2bfb3a5-6b93-4431-baa7-78fc4a1f0ef8" />

- **Problem**: Passing props through multiple levels (prop drilling) becomes repetitive and hard to manage.

- **Solution**: Context API allows sharing data globally without manually passing props at each level.

## 📝 Description
This example demonstrates how **React Context API** helps in sharing data across deeply nested components without **prop drilling**.  
Instead of passing props manually from `Comp101 → Comp102 → Comp103 → Comp104 → Comp105`, we use a **Context Provider** to make data available directly to the consumer component.

---

## 💻 Code

> Comp101.jsx
```jsx
import React, { Component } from 'react'
import Comp102 from './Comp102';
export const MyContext = React.createContext();

export class Comp101 extends Component {
    constructor() {
        super() 
        this.state = {
            rollNo : '22MH1A42G1',
            name: 'Aditya',
            fee: 18000
        }
    }
    feeIncrement = () => {
        this.setState({
            fee: this.state.fee + 1000
        })
    }

    render() {
        const ContextData = {
            data : this.state,
            feeIncrement : this.feeIncrement
        }
        return (
          <div>
            <h1>Comp101 </h1>
            <MyContext.Provider value={ContextData}>
                <Comp102 />
            </MyContext.Provider>
          </div>
        )
    }
}
export default Comp101
```

> Comp102.jsx → Comp103.jsx → Comp104.jsx
```jsx
// Each just renders heading and passes control down
```
> Comp105.jsx

```jsx
import React, { Component } from 'react'
import { MyContext } from './Comp101';

export class Comp105 extends Component {
  render() {
    return (
      <div>
        <h1>Comp105 : </h1>
        <MyContext.Consumer>
          {
            ({data, feeIncrement}) => (
              <div>
                <p>RollNo : {data.rollNo}</p>
                <p>Name : {data.name}</p>
                <p>Fee : {data.fee}</p>
                <button onClick={feeIncrement}>Increment Fee</button>
              </div>
            )
          }
        </MyContext.Consumer>
      </div>
    )
  }
}
export default Comp105
```

### 🖥️ Output

> before clicking Increment  

<img width="404" height="558" alt="image" src="https://github.com/user-attachments/assets/70202ab5-92b1-40a5-8f8d-3ff359895af0" />

> after clicking Increment (one time)

<img width="369" height="540" alt="image" src="https://github.com/user-attachments/assets/7875c9b0-6717-48e3-8b93-08126b8ade19" />

### 📖 Explanation

- **Provider** (`MyContext.Provider`): Supplies data (`rollNo`, `name`, `fee`) and functions (`feeIncrement`) to child components.

- **Consumer** (MyContext.Consumer): Reads the data directly without needing props.

- **State Management**: Fee is updated in `Comp101` but reflected in `Comp105` instantly.

### ❓ Why Use Context API?
- Avoids prop drilling (passing props through multiple levels).

- Makes global state accessible anywhere in the component tree.

- Useful for:
    - Authentication (user login info)
    - Theme switching (dark/light mode)
    - Language preferences
    - Shared app-wide settings



# Day 12: 

## Error Handling in React

### Image Component

This `Image` component displays an image based on the `img` prop. If `img` is 'NoImage', it throws an error.

```jsx
import React, { Component } from 'react'

export class Image extends Component {
  render() {
        if (this.props.img === 'NoImage') {
            throw new Error('Image Not Found');
        }else{
            return <img src={this.props.img} alt="Wallpaper 1" width={200} height={200}/>
        }
    }
}

export default Image
```

### Error Boundary Implementation

To handle errors gracefully, an `Error` component acts as an error boundary. It uses `getDerivedStateFromError` to catch errors from its children and update its state, displaying a fallback UI (`<h3>Image not found</h3>`) if an error occurs.


<img width="643" height="391" alt="image" src="https://github.com/user-attachments/assets/711f693e-3a30-4b1b-b209-99b625c9a5a0" />

```jsx
import React, { Component } from 'react'

export class Error extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }
  render() {
    if (this.state.hasError) {
        return <h3>Image not found</h3>
    }
    return this.props.children
  }
}

export default Error
```

### Example Usage with Error Boundary

The `ErrComp1` component demonstrates how to use the `Error` boundary with the `Image` component. It attempts to render three `Image` components; one intentionally triggers an error by passing 'NoImage' as the prop, while the others display valid images.

```jsx
import React, { Component } from 'react'
import img1 from './img/wallpaper1.jpg';
import img2 from './img/OIP (3).jpeg';
import Image from './Image';
import Error from './Error';
export class ErrComp1 extends Component {
  render() {
    return (
      <div>
        {/* <img src={img1} alt="Wallpaper 1" width={750} height={600}/> */}
        <Error>
          <Image img={'NoImage'}/>
        </Error>
        <Error>
          <Image img={img1}/>
        </Error>
        <Error>
          <Image img={img2}/>
        </Error>
      </div>
    )
  }
}

export default ErrComp1
```


### Output

<img width="566" height="350" alt="image" src="https://github.com/user-attachments/assets/4e4b402e-c8cd-4f44-9455-190ccd9d5815" />

---
## React Class Components Callback Functions

### 📌 Introduction
In React, **callback functions** are used to allow **child components** to communicate with their **parent components**.  
Normally, data flows **from parent → child** via props. But sometimes, we need the **child → parent** communication.  
This is achieved by passing a **function (callback)** from the parent to the child as a prop. The child can then call this function to update the parent’s state.

---

### 🔄 Flow of Data
1. **Parent defines a function** that updates its state.
2. **Parent passes this function** to the child via props.
3. **Child calls the function** with new data.
4. **Parent’s state updates**, and the UI re‑renders.

<img width="446" height="291" alt="image" src="https://github.com/user-attachments/assets/6476ff11-8438-4a78-8333-7034caf6a665" />



---

### 📝 Example Code

#### CallbackParent.jsx
```jsx
import React, { Component } from 'react'
import CallbackChild from './CallbackChild';

export class CallbackParent extends Component {
  constructor() {
    super();
    this.state = {
      parentValue: '100'
    };
  }

  // Callback function to update parent state
  changeParentValue = (childValue) => {
    this.setState({ parentValue: childValue });
  }

  render() {
    return (
      <div>
        <h3>CallbackParent : {this.state.parentValue}</h3>
        {/* Passing value and callback function to child */}
        <CallbackChild 
          value={this.state.parentValue} 
          changeParentValue={this.changeParentValue} 
        />
      </div>
    )
  }
}

export default CallbackParent;
```
#### CallbackChild.jsx
```jsx
import React, { Component } from 'react'

export class CallbackChild extends Component {
  render() {
    return (
      <div>
        <h3>CallbackChild : {this.props.value}</h3>
        {/* Button triggers callback to update parent */}
        <button onClick={() => this.props.changeParentValue("200")}>
          Change Parent Value
        </button>
      </div>
    )
  }
}

export default CallbackChild;
```
#### 🎯 Output
When the app runs:

1. Initially:
<img width="285" height="209" alt="image" src="https://github.com/user-attachments/assets/2e16ca99-ab4c-41d9-a857-d5cefbbcc2ca" />


2. After clicking the **button in CallbackChild**:
<img width="292" height="205" alt="image" src="https://github.com/user-attachments/assets/d097d91b-3926-48b4-9208-5c92c97ff115" />

### 📖 Key Points
- Parent → Child: Data transfer via **props**.

- Child → Parent: Data transfer via **callback functions**.

- Callback functions help achieve **two‑way communication** between components.

- **Use callback functions whenever:**

  1. The **child needs to influence the parent’s state**.
  2. You want to maintain **single source of truth** in the parent.
  3. You need **two-way communication** between components.

<img width="625" height="435" alt="image" src="https://github.com/user-attachments/assets/f7b44e1a-95e0-480a-b602-91f0cc0eefa4" />

---
# Day 13
---

## Functional Components

1. Check versions
```
node -v
npm -v
```
2. Create React project
```
npx create-react-app@latest app4
```
3. goto vscode
```
dir
cd app4
code .
```
4. run this project
```
npm start
```
5. make change in `app.js`
```
import './App.css';
import { Fcomp1 } from './components/Fcomp1';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Application</h1>
        <Fcomp1 sid="22MH1A42G1" name="Aditya"/>
      </header>
    </div>
  );
}

export default App;
```
6. create components folder in that have create functional component (`Fcomp1`)
   - **rafce** - react arrow function export component
   - **rcc** - react class component
   - **rce** - react class export component
   - **rccp** - react class component prop types
   - **rfc** - react functional component
   - **rfce** - react functional export component
```
import React from 'react'

export const Fcomp1 = (props) => { // define props in fun function
    console.log(props);
    return (
    <div>
        <h3>Functional Component 1 : {props.sid} - {props.name}</h3> {/* access props in fun function */}
    </div>
  )
}
```
7. output we see in console object Key & value
<img width="670" height="324" alt="image" src="https://github.com/user-attachments/assets/9ac1ed63-1a9e-4633-bbb0-60a9712061ed" />


8. create other components named `Fcomp2.jsx` & `Fcomp3.jsx`
   i. make changes in `app.js`
```
import './App.css';
import Fcomp1 from './components/Fcomp1';
import Fcomp2 from './components/Fcomp2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Application</h1>
      </header>
      <Fcomp1 sid="22QW1QE231" name="John Doe" />
      <Fcomp2 sid="22MH1A42G1" name="Aditya"/>
    </div>
  );
}

export default App;
```
  ii. write code for **rfce** (react functional export component) in `Fcomp2.jsx`
```
import React from 'react'

function Fcomp2(props) {
  return (
    <div>
        <h3>Functional Component 2 : {props.sid} - {props.name}</h3>
    </div>
  )
}

export default Fcomp2
```
  iii. output

<img width="678" height="309" alt="image" src="https://github.com/user-attachments/assets/537988e6-c4b2-4d53-a8bf-031808a13e8f" />

## React useState Hook
The useState hook allows functional components in React to store and manage data that can change over time. It is simple to use and ideal for handling basic state updates within a component.

- It lets you add state variables to functional components.
- It is best suited for simple and straightforward state updates.
- The hook must be imported from React before using it.

<img width="629" height="260" alt="image" src="https://github.com/user-attachments/assets/f56104bb-8658-4aa1-bd4d-b2d9ddcf89f4" />

i. create `Fcomp3.jsx`
```
import React, { useState } from 'react'
//hooks - useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback

const Fcomp3 = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
        <h3>Functional Component 3</h3>
        <h4>Count : {cnt}</h4>
        <button onClick={() => setCnt(cnt + 1)}>Increment</button>
        <button onClick={() => setCnt(cnt - 1)}>Decrement</button>
    </div>
  )
}
export default Fcomp3
```
ii. output:
- increment
<img width="221" height="251" alt="image" src="https://github.com/user-attachments/assets/89d81fd9-38a3-4e20-9b3d-a973937e0e06" />

- decrement
<img width="230" height="250" alt="image" src="https://github.com/user-attachments/assets/bd6ca1d7-9beb-47d9-8e53-3f698577299e" />

## Vite 
Vite is a blazing fast frontend build tool powering the next generation of web applications.
<img width="2361" height="258" alt="vite-frameworks D3X8o4O8" src="https://github.com/user-attachments/assets/36ae672c-61f7-41d4-ad06-c20b5903db7b" />
**Instant Server Start** : On demand source file serving over native ESM, with blazing fast dependency pre-bundling.
**Lightning Fast HMR** : Instantly reflect changes as you save, no matter how big your app is.

### steps for start react project
1. checking versions
```
node -v
npm -v
```
2. creating react application
```
npm create vite@latest
```
3. remove bolerplatecode from `App.jsx`, `App.css`, `index.css` and after creteing own components that will connect with `App.jsx`.
**App.jsx**
```
import './App.css'
import Fcomp1 from './components/Fcomp1'
import Fcomp2 from './components/Fcomp2'
import Fcomp3 from './components/Fcomp3'
import Fcomp4 from './components/Fcomp4'
function App() {

  return (
    <>
      <center>
      <section id="center">
        <h1>React + Vite Application</h1>
      </section>
      <Fcomp1 name="Aditya" />
      <Fcomp2 name="Aditya" />
      <Fcomp3 />
      <Fcomp4 />
      </center>
    </>
  )
}

export default App

```
**App.css**
```


#center {
  display: flex;
  flex-direction: column;
  background-color: darkblue;
  color: white;
  font-size: 25px;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

```
**Fcomp1.jsx**
```
import React from 'react'

const Fcomp1 = (props) => {
  return (
    <div>     
        <h1 style={{color:"red"}, {fontSize:"50px"}, {textAlign:"center"}}>Fcomp1 : {props.name}</h1>
    </div>
  )
}
export default Fcomp1
```
**Fcomp2.jsx**
```
import React from 'react'

const Fcomp1 = (props) => {
  return (
    <div>     
        <h1 style={{color:"red"}, {fontSize:"50px"}, {textAlign:"center"}}>Fcomp1 : {props.name}</h1>
    </div>
  )
}
export default Fcomp1
```
**Fcomp3.jsx**
```
import React, { useState} from 'react'

const Fcomp3 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Fcomp3: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Fcomp3
```
**Fcomp4.jsx**
```
import React, { useState } from 'react'

const Fcomp4 = () => {
  const [name, setName] = useState("Aditya");

  return (
    <div>
        <center>
          <h1>Fcomp4: Developer name is {name}</h1>
        </center>
    </div>
  )
}

export default Fcomp4
```
4. after run this for local hosting
```
npm run dev
```
6. output
<img width="540" height="433" alt="image" src="https://github.com/user-attachments/assets/12b7521d-f04b-444a-8bb2-84f7c9735240" />

## Reference
- [npmjs](https://www.npmjs.com/package/create-react-app)
- [vite](https://vite.dev/guide/)

---
# Day 14
---

## Todo.jsx

```
import React, { useState } from 'react'

const Todo = () => {
    // this state for course input field
    const [course, setCourse] = useState("");
    // this state for all courses 
    const [courses, setCourses] = useState([]);
    // add course
    const addCourse = () => {
        if(course.trim() === "") return;
        const newCourse = {
            id: Date.now(),
            name: course        
        };
        setCourses([...courses, newCourse]);
        setCourse("");
    }
    // delete course
    const deleteCourse = (id) => {
        const newCourses = courses.filter(course => course.id !== id);
        setCourses(newCourses);
    }
  return (
    <div style={{padding: "20px"}}>
        <center>
            <h1>Todo</h1>
            <input 
                type="text" 
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter a course name"
            />
            <button onClick={addCourse}>Add Course</button>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.name}
                        <button onClick={() => deleteCourse(course.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </center>
    </div>
  )
}

export default Todo
```
### output

<img width="553" height="315" alt="image" src="https://github.com/user-attachments/assets/6654f353-1b10-4681-891b-fdcf6020c1c5" />
---

## tasks

### 1. task01 (auto suggest)

<img width="471" height="457" alt="image" src="https://github.com/user-attachments/assets/1a72104d-7b11-4afd-b32b-391ec7c0f1f1" />

- If you want auto-suggest course names while typing in your React Todo/Course app, you can use the HTML `<datalist>` element.

### task.jsx

```
import React, { useState } from 'react'

const Task01 = () => {
    // this state for course input field
    const [course, setCourse] = useState("");
    // this state for all courses 
    const [courses, setCourses] = useState([]);
    // course suggestions for course input field
    const courseSuggestions = [
        "React JS",
        "Python",
        "Java",
        "Django",
        "JavaScript",
        "AWS",
        "DSA",
        "Machine Learning",
        "MySQL",
        "Node JS"
    ];
    // add course
    const addCourse = () => {
        if(course.trim() === "") return;
        const newCourse = {
            id: Date.now(),
            name: course        
        };
        setCourses([...courses, newCourse]);
        setCourse("");
    }
    // delete course
    const deleteCourse = (id) => {
        const newCourses = courses.filter(course => course.id !== id);
        setCourses(newCourses);
    }
  return (
    <div style={{padding: "20px"}}>
        <center>
            <h1>Task 01</h1>
            <input 
                type="text" 
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter a course name"
                list="course-suggestions"
            />
            <datalist id="course-suggestions">
                {courseSuggestions.map((suggestion, index) => (
                    <option key={index} value={suggestion} />
                ))}
            </datalist>
            <button onClick={addCourse}>Add Course</button>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.name}
                        <button onClick={() => deleteCourse(course.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </center>
    </div>
  )
}

export default Task01
```

### output:
<img width="661" height="502" alt="image" src="https://github.com/user-attachments/assets/f2d017f6-8e4a-4f56-abe2-1bcf37ebf1c3" />


## task 02 (Add checkbox)

<img width="539" height="401" alt="image" src="https://github.com/user-attachments/assets/4eb709f8-1bb6-4081-beb6-926bf718f9fa" />

### code

```
import React, { useState } from 'react'

const Task02 = () => {
    // this state for course input field
    const [course, setCourse] = useState("");
    // this state for all courses 
    const [courses, setCourses] = useState([]);
    // this state for online and offline mode 
    const [isOnline, setIsOnline] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    // course suggestions for course input field
    const courseSuggestions = [
        "React JS",
        "Python",
        "Java",
        "Django",
        "JavaScript",
        "AWS",
        "DSA",
        "Machine Learning",
        "MySQL",
        "Node JS"
    ];
    // add course
    const addCourse = () => {
        if(course.trim() === "") return;
        const newCourse = {
            id: Date.now(),
            name: course,
            online: isOnline,
            offline: isOffline        
        };
        setCourses([...courses, newCourse]);
        setCourse("");
        setIsOnline(false);
        setIsOffline(false);
    }
    // delete course
    const deleteCourse = (id) => {
        const newCourses = courses.filter(course => course.id !== id);
        setCourses(newCourses);
    }
  return (
    <div style={{padding: "20px"}}>
        <center>
            <h1>Task 02</h1>
            <input 
                type="text" 
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter a course name"
                list="course-suggestions"
            />
            <input
                type="checkbox"
                checked={isOnline}
                onChange={(e) => setIsOnline(e.target.checked)}
            /> Online
            <input
                type="checkbox"
                checked={isOffline}
                onChange={(e) => setIsOffline(e.target.checked)}
            /> Offline
            <datalist id="course-suggestions">
                {courseSuggestions.map((suggestion, index) => (
                    <option key={index} value={suggestion} />
                ))}
            </datalist>
            <button onClick={addCourse}>Add Course</button>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.name}
                        {course.online && <span> (Online)</span>}
                        {course.offline && <span> (Offline)</span>}
                        <button onClick={() => deleteCourse(course.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </center>
    </div>
  )
}

export default Task02
```

### output

<img width="666" height="420" alt="image" src="https://github.com/user-attachments/assets/fb214cbe-3467-4f6c-8866-46eda51b6654" />


---

# Day 15

---

## Login & SignUp page in React + Vite (Local Storage)

In this example, we build a simple **Signup** and **Login** system using React with Vite.  
We use **localStorage** to persist user data (username & password) in the browser.

---

### App.jsx
```jsx
import Signup from './Signup';
import Login from './Login';
import './App.css'

function App() {
  return (
    <div>
      <h1>User SignUp/Login Here</h1>
      <Signup />
      <hr />
      <Login />
    </div>
  )
}

export default App;
```

---

### Signup.jsx
```jsx
import React, { useState } from 'react'

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const readInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const addUser = (e) => {
    e.preventDefault();
    // get old users from local storage
    const oldUsers = JSON.parse(localStorage.getItem('users')) || [];
    // add new user
    const newUsers = [...oldUsers, user];
    // save updated users to local storage
    localStorage.setItem('users', JSON.stringify(newUsers));
    alert('User added successfully!');
    setUser({ username: '', password: '' });
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={readInput}
        /> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={readInput}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup;
```

---

### Login.jsx
```jsx
import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const readInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // get users from local storage
    const oldUsers = JSON.parse(localStorage.getItem('users')) || [];
    // find user
    const foundUser = oldUsers.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (foundUser) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
    setUser({ username: '', password: '' });
  };

  return (
    <div>
      <h1>Login here</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={readInput}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={readInput}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
```

---

### Output Screenshots
- **Before page**
<img width="418" height="283" alt="image" src="https://github.com/user-attachments/assets/41eaa793-bf11-4c3a-a047-723c9bdb4310" />

- **User added in local storage through signup button**
<img width="620" height="266" alt="image" src="https://github.com/user-attachments/assets/96fe9b1f-2294-43c3-a6f8-4a4092c9002c" />

- **After login validation**
<img width="629" height="269" alt="image" src="https://github.com/user-attachments/assets/3afff3ed-3237-4ecd-b886-51e82f7cd5b3" />

---

### Key Points
- **localStorage** is used to persist user data in the browser.
- `JSON.stringify()` and `JSON.parse()` are required to store/retrieve objects.
- Signup adds a new user to localStorage.
- Login checks credentials against stored users.
- This is a **basic demo**; in real apps, never store plain passwords in localStorage.

---

## Day 07

**Todo.jsx**

```
App.js
--------------------------------------------------
|          Course   [ python ]  [add] <-(click)   |
|     - Python                                    |
--------------------------------------------------
```

Create a `Todo.jsx` component.

1.  Initialize the component's state in the constructor:

```javascript
constructor(){
  super()
  this.state= {
    course:'',
    courses:[]
  }
}
```

2. Implement `readCourse`, `addCourse`, and `deleteCourseByIndex`, and `deleteCourseByCourseName` methods:

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
        this.setState({
            course:e.target.value
        })
    }
    addCourse=()=>{
        if (this.state.course.trim() === "") return;
        this.setState({
            courses:[...this.state.courses,this.state.course],
            course:''
        })
    }
    deleteCourseByIndex=(index)=>{
        const Newourses=this.state.courses.filter((_,i)=>i!==index);
        this.setState({courses:Newourses});
    }
    deleteCourseByCourseName=(courseName)=>{
        const Newourses=this.state.courses.filter((course)=>course!==courseName);
        this.setState({courses:Newourses});
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

3.  In the `render` method, include a label and input field for the course, setting the `onChange` event to `readCourse`.

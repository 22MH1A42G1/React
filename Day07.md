# Day 07

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

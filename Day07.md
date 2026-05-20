## Day 07

**Todo.jsx**

```
App.js
--------------------------------------------------
|          Course   [ python ]  [add] <-(click)   |
|     - Python                                    |
--------------------------------------------------
```

First, create a `Todo.jsx` component.

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

2. Implement the following methods within the class: `readCourse`, `addCourse`, and `deleteCourse`.

```javascript
readCourse=(e)=>{
    this.setState({
        course:e.target.value // Updates the state with the input value
    })
}
addCourse=()=>{
    this.setState({
        courses:[...this.state.courses,this.state.course], // Adds the new course to the courses array
        course:'' // Resets the input field
    })
}
deleteCourse=(index)=>{
    const Newourses=this.state.courses.filter((course,i)=>i!==index);
    this.setState({courses:Newourses});
}
```

3. Within the component's `render` method, include a label and input field for the course, with `onChange` set to `readCourse`.

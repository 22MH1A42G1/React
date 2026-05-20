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
        this.setState({ // setState is used to update the state of the component
            course:e.target.value
        })        
    }
    addCourse=()=>{
        if (this.state.course.trim() === "") return; // prevent adding empty courses
        this.setState({
            courses:[...this.state.courses,this.state.course], // spread operator is used to add the new course to the existing courses array
            course:'' // reset the course input field
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
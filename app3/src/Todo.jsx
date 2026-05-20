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
        this.setState({
            courses:[...this.state.courses,this.state.course], // spread operator is used to add the new course to the existing courses array
            course:'' // reset the course input field
        })
    }
    deleteCourse=(index)=>{
        const Newourses=this.state.courses.filter((course,i)=>i!==index);
        this.setState({courses:Newourses});
    }
    
  render() {
    return (
      <div>
        <label htmlFor="course">Course : </label>
        <input type="text" id="course" onChange={(e)=>this.setState({course:e.target.value})} />
        <button onClick={this.addCourse}>Add</button>
        <ul>
            {
                this.state.courses.map((course,index)=>(
                    <li key={index}>{course}
                        <button onClick={()=>this.deleteCourse(index)}>DeleteByIndex</button>
                        <button onClick={()=>this.deleteCourse(course)}>DeleteByCourseName</button>
                    </li>
                ))
            }
        </ul>
      </div>
    )
  }
}
export default Todo;
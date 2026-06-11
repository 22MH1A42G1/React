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
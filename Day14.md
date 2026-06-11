# Day 14

**Todo.jsx**

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
output

<img width="553" height="315" alt="image" src="https://github.com/user-attachments/assets/6654f353-1b10-4681-891b-fdcf6020c1c5" />

taasks
1. task01
<img width="471" height="457" alt="image" src="https://github.com/user-attachments/assets/1a72104d-7b11-4afd-b32b-391ec7c0f1f1" />
2. task 2
3. 


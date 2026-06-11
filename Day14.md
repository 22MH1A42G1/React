# Day 14

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
output

<img width="553" height="315" alt="image" src="https://github.com/user-attachments/assets/6654f353-1b10-4681-891b-fdcf6020c1c5" />

## tasks
### 1. task01 (auto suggest)
<img width="471" height="457" alt="image" src="https://github.com/user-attachments/assets/1a72104d-7b11-4afd-b32b-391ec7c0f1f1" />
If you want auto-suggest course names while typing in your React Todo/Course app, you can use the HTML `<datalist>` element.
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


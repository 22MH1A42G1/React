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
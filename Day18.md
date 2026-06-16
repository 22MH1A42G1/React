
# Day 18 – React Router (Dynamic Routing & Navigation)

## 📌 What is the Topic?
- **React Router**: A library for handling navigation in React applications.
- It allows building **Single Page Applications (SPA)** with multiple views without reloading the page.
- Supports **static routes** (`/about`, `/contact`) and **dynamic routes** (`/courses/:courseName`).

---

## 🎯 What Should I Learn?
- **BrowserRouter**: Wraps the app to enable routing.
- **Routes & Route**: Define paths and components to render.
- **NavLink**: Navigation links with active styling.
- **useParams hook**: Access dynamic URL parameters.
- **Error handling route**: Catch invalid paths with `*`.
- **Nested navigation bars**: Example: `CourseBar` for course-specific links.

---

## ⚙️ How Does It Work?
1. **App.jsx**
```
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Course from './pages/Course'
import Dashboard from './pages/Dashboard'
function App() {
  // const isLoggedIn = false;
  return (
    <div>
      <BrowserRouter>
        <Navbar /> <br /> <br />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:courseName' element={<Course />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
```
   - Wraps everything inside `<BrowserRouter>`.
   - Defines all routes using `<Routes>` and `<Route>`.
   - Example:  
     - `/about` → loads `About.jsx`  
     - `/courses/:courseName` → loads `Course.jsx` with dynamic parameter.

2. **Error.jsx**
```
import React from 'react'

const Error = () => {
  return (
    <div>
        <h3>Page Not Found - 404 Error</h3>
    </div>
  )
}

export default Error
```
   - Handles invalid routes (`*`).
   - Displays a **404 Page Not Found** message.

3. **Course.jsx**
```
import React from 'react'
import { useParams } from 'react-router-dom';
// useParams hook is used to access the dynamic parameters in the URL. In this case, it will allow us to access the courseName parameter from the URL.
const Course = () => {
  const { courseName } = useParams();
  return (
    <div>
        <h3>{courseName} Page</h3>
    </div>
  )
}

export default Course
```
   - Uses `useParams()` to read the `courseName` from the URL.
   - Example: `/courses/python` → shows **Python Page**.

4. **Navbar.jsx**
```
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/navbar.css';
const Navbar = () => {
  return (
    <>
      <ul style={{listStyleType: 'none', borderBottom: '0.5px solid black'}}>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/'>Home</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/about'>About</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/contact'>Contact</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/courses'>Courses</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/login'>Login</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/signup'>Signup</NavLink></li>
      </ul>
    </>
  )
}

export default Navbar
```
   - Provides navigation links for **Home, About, Contact, Courses, Login, Signup**.
   - Uses `<NavLink>` for clickable routing without page reload.

5. **CourseBar.jsx**
```
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/navbar.css';
const CourseBar = () => {
  return (
    <>
      <ul style={{listStyleType: 'none', borderBottom: '0.5px solid black'}}>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/courses/python'>Python</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/courses/javascript'>JavaScript</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/courses/react'>React</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/courses/django'>Django</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/courses/datascience'>Data Science</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/courses/machinelearning'>Machine Learning</NavLink></li>
      </ul>
    </>
  )
}

export default CourseBar
```

   - A sub-navigation bar for specific courses.
   - Links like `/courses/python`, `/courses/react`, `/courses/django`.

---

## 📂 What Are These Files?
- **App.jsx** → Main routing configuration.
- **Error.jsx** → Fallback page for unknown routes.
- **Course.jsx** → Dynamic course page using `useParams`.
- **Navbar.jsx** → Top-level navigation bar.
- **CourseBar.jsx** → Course-specific navigation bar.

---

## 🧠 Key Takeaways
- React Router makes navigation smooth in SPAs.
- Dynamic routes (`:courseName`) allow reusable components for multiple pages.
- `NavLink` is better than `<a>` because it prevents full page reloads.
- Always add an `Error` route (`*`) to handle invalid paths gracefully.

## OutPuts
**/Home**

<img width="678" height="319" alt="image" src="https://github.com/user-attachments/assets/2792549e-8d67-47bb-b6b8-7484556e09ed" />

**/About**

<img width="673" height="274" alt="image" src="https://github.com/user-attachments/assets/aa430884-1330-4e84-ae29-1abb1291d3ac" />

**/Contact**

<img width="682" height="329" alt="image" src="https://github.com/user-attachments/assets/edbfd204-f617-4154-9b1c-0171d6012135" />

**/Courses**

<img width="680" height="328" alt="image" src="https://github.com/user-attachments/assets/ff146700-45ec-46e8-960d-3faa2362ab7d" />

**/Courses/python**

<img width="664" height="288" alt="image" src="https://github.com/user-attachments/assets/e71867f3-1e76-458c-821b-87ad5dffe49a" />

**/Courses/JavaScript**

<img width="743" height="292" alt="image" src="https://github.com/user-attachments/assets/d4814d01-8dfc-455f-9d75-fd8e0eee2d5a" />

**/Courses/React**

<img width="660" height="261" alt="image" src="https://github.com/user-attachments/assets/68a92b38-a6d5-4f0a-a760-82d16f83c7d1" />

**/Courses/Django**

<img width="669" height="293" alt="image" src="https://github.com/user-attachments/assets/f615a7cd-d908-485b-a704-20edc6f02efc" />

**/Courses/DataScience**

<img width="743" height="245" alt="image" src="https://github.com/user-attachments/assets/d19fbe1c-8229-491c-b965-365f379a65e9" />

**/Course/MachineLearning**

<img width="649" height="243" alt="image" src="https://github.com/user-attachments/assets/9688046e-d38c-4af3-8876-b736bdd2c610" />

**/Login**

<img width="795" height="314" alt="image" src="https://github.com/user-attachments/assets/05827751-5a5e-49b2-a7e3-20742af4201b" />

**/Signup**

<img width="693" height="254" alt="image" src="https://github.com/user-attachments/assets/556557d3-621b-49b2-a140-c04670b3672f" />

**/Invalid-path**

<img width="719" height="280" alt="image" src="https://github.com/user-attachments/assets/ddfce5a3-079f-47ce-9b9e-773bcd305198" />

---

# 🔗 Navigation Flow Diagram 

```
App.jsx
│
├── BrowserRouter
│   │
│   ├── Navbar.jsx   → [Home | About | Contact | Courses | Login | Signup]
│   │
│   └── Routes
│       ├── "/"              → Home.jsx
│       ├── "/about"         → About.jsx
│       ├── "/contact"       → Contact.jsx
│       ├── "/courses"       → Courses.jsx
│       │     └── CourseBar.jsx → [Python | JavaScript | React | Django | DataScience | MachineLearning]
│       │
│       ├── "/courses/:courseName" → Course.jsx (dynamic page using useParams)
│       ├── "/dashboard"    → Dashboard.jsx
│       ├── "/login"        → Login.jsx
│       ├── "/signup"       → Signup.jsx
│       └── "*"             → Error.jsx (404 Page)
```

---

## 🖼️ Visual Explanation
- **Navbar**: Always visible at the top → lets you move between main sections.
- **CourseBar**: Appears inside the Courses section → lets you pick a specific course.
- **Dynamic Route**: `/courses/:courseName` → loads `Course.jsx` and shows the course name from the URL.
- **Error Route**: Handles invalid paths gracefully with a 404 message.

---

## 🚀 Why This Matters
- This diagram helps you **see the hierarchy**:  
  - `App.jsx` is the root.  
  - `Navbar` is global navigation.  
  - `CourseBar` is nested navigation.  
  - `Course.jsx` demonstrates **dynamic routing**.  
- It clarifies how React Router organizes pages without reloading the app.



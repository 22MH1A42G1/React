# Day 17
# React Routing and Navigation Notes

## Step 1: Install the router package
I added `react-router-dom` to the project so the app can support page-to-page navigation without reloading the browser.
```
npm create vite@latest rapp2
cd rapp2
code .
npm i
npm i react-router-dom@6
```

- React Router is the standard library for client-side routing in React apps.
- Installing the package is the first requirement before using routes, links, or navigation hooks.

## Step 2: Wrap the app with `BrowserRouter`
In `src/App.jsx`, the whole application is wrapped with `BrowserRouter` so routing works across the app.
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

- `BrowserRouter` provides routing context to every component inside it.
- Without it, `Routes`, `Route`, and `NavLink` will not work correctly.

## Step 3: Define routes with `Routes` and `Route`
I created routes for `Home`, `About`, `Contact`, `Courses`, `Login`, and `Signup`.
**Home.jsx**
```
import React from 'react'

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
    </div>
  )
}

export default Home
```
**About.jsx**
```
import React from 'react'

const About = () => {
  return (
    <div>
      <h3>About</h3>
    </div>
  )
}

export default About
```
**Contact.jsx**
```
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
    </div>
  )
}

export default Contact
```
**Courses.jsx**
```
import React from 'react'
const Courses = () => {
  return (
    <div>
      <h3>Courses</h3>
    </div>
  )
}

export default Courses
```
**Login.jsx**
```
import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const readInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // get users from local storage
    const oldUsers = JSON.parse(localStorage.getItem('users')) || [];
    // find user
    const foundUser = oldUsers.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (foundUser) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
    setUser({ username: '', password: '' });
  };

  return (
    <div>
      <h3>Login here</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={readInput}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={readInput}
        /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
```
**Signup.jsx**
```
import React, { useState } from 'react'

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const readInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const addUser = (e) => {
    e.preventDefault();
    // get old users from local storage
    const oldUsers = JSON.parse(localStorage.getItem('users')) || [];
    // add new user
    const newUsers = [...oldUsers, user];
    // save updated users to local storage
    localStorage.setItem('users', JSON.stringify(newUsers));
    alert('User added successfully!');
    setUser({ username: '', password: '' });
  }

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={addUser}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={readInput}
        /> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={readInput}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup;
```

- `Routes` acts like a container for all route definitions.
- Each `Route` matches a URL path with a component to display.
- The `element` prop decides which page component appears for that path.

## Step 4: Build navigation with `NavLink`
In `src/components/Navbar.jsx`, I used `NavLink` for each menu item.
```
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/navbar.css';
const Navbar = () => {
  return (
    <>
      <ul style={{listStyleType: 'none'}}>
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
- `NavLink` lets users move between pages without refreshing the browser.
- It is better for navigation menus than plain anchor tags in a React Router app.
- `NavLink` can also help show active link styles later if needed.

## Step 5: Keep page components separate
Each page was placed in its own file inside `src/pages`.

- Separating pages makes the code easier to read and maintain.
- One component per page keeps routing clean and organized.
- This structure is easier to expand when the app grows.

## Step 6: Render the app from `main.jsx`
The root app is mounted with `createRoot` and rendered inside `StrictMode`.
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
- `main.jsx` is the entry point for the React app.
- The router setup in `App.jsx` only works after the app is mounted from `main.jsx`.
- `StrictMode` helps highlight potential issues during development.

## Step 7: Test navigation in the browser
I checked that clicking the navbar links changes the route and displays the correct page.


<img width="673" height="330" alt="image" src="https://github.com/user-attachments/assets/db5d260d-6975-46b6-adf0-369c4f87bccb" />

<img width="672" height="344" alt="image" src="https://github.com/user-attachments/assets/420708cd-5b78-46c0-94a7-680d0e790c1e" />

<img width="673" height="267" alt="image" src="https://github.com/user-attachments/assets/cbbefcef-49d5-42b2-b7df-c47ba38b7a95" />

<img width="676" height="330" alt="image" src="https://github.com/user-attachments/assets/59dd89d4-9798-4b53-8cf5-baba2b5dd6e7" />

<img width="679" height="255" alt="image" src="https://github.com/user-attachments/assets/722937c1-23b4-4705-a2c1-3296f4a4b909" />

<img width="678" height="262" alt="image" src="https://github.com/user-attachments/assets/d6f8041f-b188-4ae6-9a58-ecc02d174051" />

- Route changes should update the URL and component view together.
- If a page does not show, the route path and component import are the first things to verify.
- Navigation should feel smooth because the browser is not doing a full reload.

## Summary
This project taught me how to set up React Router, connect URL paths to components, and create a navigation bar that moves between pages cleanly.

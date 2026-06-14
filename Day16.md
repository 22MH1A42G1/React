# Day 16

## React Router

React Router is a powerful library for managing routing in React applications, enabling seamless navigation between different views and components.

<img width="664" height="408" alt="image" src="https://github.com/user-attachments/assets/19326b40-9edb-4f4a-9dbe-642964e77d92" />
<img width="848" height="525" alt="image" src="https://github.com/user-attachments/assets/4691626e-5b5d-4014-a4b2-6cf9bea1d02d" />

👉 Create a React Router application. (React, JavaScript)

```
npm create vite@latest rapp1
cd rapp1
code .
```

👉 Update to latest v6

```
npm i react-router-dom@6
```

👉 run server on local

```
npm run dev
```

👉 Replace the existing code in `App.jsx` with our new code.

```jsx
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
```

- Routing Home page (type-01) output

<img width="294" height="128" alt="image" src="https://github.com/user-attachments/assets/70a57f5b-6d3b-4d14-b8e7-a76991be2eea" />

👉 Rendering `pages/Home.jsx`, `pages/About.jsx`, and `pages/Contact.jsx` within `App.jsx`.

**Home.jsx**

```jsx
import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home
```

**About.jsx**

```jsx
import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About
```

**Contact.jsx**

```jsx
import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
    </div>
  )
}

export default Contact
```

**App.jsx**

```jsx
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
```

- Output for Routing Home page

<img width="243" height="144" alt="image" src="https://github.com/user-attachments/assets/104d4f66-3508-45bb-91e1-3dc9a1cc0fcb" />

- Output for Routing About page

<img width="650" height="279" alt="image" src="https://github.com/user-attachments/assets/ca27e126-2e65-4151-9fe5-53fd28423609" />

- Output for Routing Contact page

<img width="632" height="237" alt="image" src="https://github.com/user-attachments/assets/fb916a28-a15b-4f53-bacf-7a36af232b56" />

## reference docs: 
- [ReactRouter](https://reactrouter.com/home)
- [NPM](https://www.npmjs.com/package/@types/react-router)

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

- output for Routing Home page (type-01)

<img width="294" height="128" alt="image" src="https://github.com/user-attachments/assets/70a57f5b-6d3b-4d14-b8e7-a76991be2eea" />

👉 for rendering `pages/Home.jsx` page

```jsx
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
```

- output for Routing Home page (type-02)

<img width="243" height="144" alt="image" src="https://github.com/user-attachments/assets/104d4f66-3508-45bb-91e1-3dc9a1cc0fcb" />


## reference docs: 
- [ReactRouter](https://reactrouter.com/home)
- [NPM](https://www.npmjs.com/package/@types/react-router)

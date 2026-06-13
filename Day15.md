
# Day 15

## Login & SignUp page in React + Vite (Local Storage)

In this example, we build a simple **Signup** and **Login** system using React with Vite.  
We use **localStorage** to persist user data (username & password) in the browser.

---

### App.jsx
```jsx
import Signup from './Signup';
import Login from './Login';
import './App.css'

function App() {
  return (
    <div>
      <h1>User SignUp/Login Here</h1>
      <Signup />
      <hr />
      <Login />
    </div>
  )
}

export default App;
```

---

### Signup.jsx
```jsx
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
      <h1>Signup</h1>
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

---

### Login.jsx
```jsx
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
      <h1>Login here</h1>
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
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
```

---

### Output Screenshots
- **Before page**
<img width="418" height="283" alt="image" src="https://github.com/user-attachments/assets/41eaa793-bf11-4c3a-a047-723c9bdb4310" />

- **User added in local storage through signup button**
<img width="620" height="266" alt="image" src="https://github.com/user-attachments/assets/96fe9b1f-2294-43c3-a6f8-4a4092c9002c" />

- **After login validation**
<img width="629" height="269" alt="image" src="https://github.com/user-attachments/assets/3afff3ed-3237-4ecd-b886-51e82f7cd5b3" />

---

### Key Points
- **localStorage** is used to persist user data in the browser.
- `JSON.stringify()` and `JSON.parse()` are required to store/retrieve objects.
- Signup adds a new user to localStorage.
- Login checks credentials against stored users.
- This is a **basic demo**; in real apps, never store plain passwords in localStorage.

---

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
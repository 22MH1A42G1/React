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
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
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/dashboard'>Dashboard</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/login'>Login</NavLink></li>
        <li style={{float: 'left', marginRight: '10px'}}><NavLink style={{textDecoration: 'none'}} to='/signup'>Signup</NavLink></li>
      </ul>
    </>
  )
}

export default Navbar
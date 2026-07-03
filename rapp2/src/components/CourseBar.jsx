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
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
import React, { Component } from 'react'
import './css/StyleComp3.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class StyleComp3 extends Component {
  render() {

    return (
      <div className="container mt-4">
        <h3 className="text-primary">Bootstrap Styling</h3>
        <button className="btn btn-success">Save</button>
        <button className="btn btn-danger ms-2">Delete</button>
      </div>
    )
  }
}

export default StyleComp3;
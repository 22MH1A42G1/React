import React, { Component } from 'react'

export default class GetCourse extends Component {
  constructor() {
    super();
    this.state = {
      course: ''
    };
  }

  addReact = () => {
    this.setState({
      course: 'React Js'
    })
  };
  addJavaScript = () => {
    this.setState({
      course: 'JavaScript'
    })
  };
  resetCourse = () => {
    this.setState({
      course: ''
    })
  };
  render() {
    return (
      <div>
        <h1>-----------GetCourse--------------------</h1>
        <h3>Course: {this.state.course}</h3>
        <button onClick={this.addReact}>Add React</button>
        <button onClick={this.addJavaScript}>Add JavaScript</button>
        <button onClick={this.resetCourse}>Reset Course</button>
      </div>
    );
  }
}

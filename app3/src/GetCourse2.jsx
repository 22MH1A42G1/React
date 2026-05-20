import React, { Component } from 'react'

export default class GetCourse2 extends Component {
  constructor() { // constructor is a special method that is called when an instance of the class is created
    super(); // call parent class constructor
    this.state = { // state is an object that holds the data of the component
      course: ''
    };
  }
  addCourse=(e) => { // e is the event object that is passed to the event handler
    console.log(e.target.innerText); // e.target is the element that triggered the event and innerText is the text content of the element
    this.setState({ // setState is used to update the state of the component
      course: e.target.innerText
    })
  };
  

  render() {
    return (
      <div>
        <h1>-----------GetCourse2--------------------</h1>
        <h3>Course: {this.state.course}</h3>
        {/* onClick is an event handler that is called when the button is clicked */}
        <button onClick={this.addCourse}>React</button>
        <button onClick={this.addCourse}>JavaScript</button>
        <button onClick={this.addCourse}>Python</button>
        <button onClick={this.addCourse}>Java</button>
        <button onClick={this.addCourse}>C++</button>
      </div>
    );
  }
}

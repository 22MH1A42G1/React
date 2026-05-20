import React, { Component } from 'react'

class ReadText extends Component {
    constructor(){
        super();
        this.state={
            courseName:""
        }
    }

    readCourse=(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        // this.setState({ // setState is used to update the state of the component
        //     courseName:e.target.value
        // })
    }
  render() {
    return (
      <div>
        <h1>Course: {this.state.courseName} </h1>
        <input type="text" id="" onChange={this.readCourse}/>
        <button>Read</button>
      </div>
    )
  }
}
export default ReadText;
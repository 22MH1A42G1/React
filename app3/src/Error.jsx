import React, { Component } from 'react'

export class Error extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }
  render() {
    if (this.state.hasError) {
        return <h3>Image not found</h3>
    }
    return this.props.children
  }
}

export default Error
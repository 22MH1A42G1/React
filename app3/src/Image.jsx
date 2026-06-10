import React, { Component } from 'react'

export class Image extends Component {
  render() {
        if (this.props.img === 'NoImage') {
            throw new Error('Image Not Found');
        }else{
            return <img src={this.props.img} alt="Wallpaper 1" width={200} height={200}/>
        }
    }
}

export default Image
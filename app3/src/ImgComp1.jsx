import React, { Component } from 'react'
import wallpaper1 from './img/wallpaper1.jpg';
class ImgComp1 extends Component {
  render() {
    return (
      <div>
        <h3>Image Component</h3>
        <img src={wallpaper1} alt='Trulli' width={500} height={300} />
      </div>
    )
  }
}
export default ImgComp1;
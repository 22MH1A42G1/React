import React, { Component } from 'react'
import img1 from './img/wallpaper1.jpg';
import img2 from './img/OIP (3).jpeg';
import Image from './Image';
import Error from './Error';
export class ErrComp1 extends Component {
  render() {
    return (
      <div>
        {/* <img src={img1} alt="Wallpaper 1" width={750} height={600}/> */}
        <Error>
          <Image img={'NoImage'}/>
        </Error>
        <Error>
          <Image img={img1}/>
        </Error>
        <Error>
          <Image img={img2}/>
        </Error>
      </div>
    )
  }
}

export default ErrComp1
import React, { Component } from 'react'

class StyleComp2 extends Component {

  render() {

    // const style1 = {
    //     color:'red'
    // }
    // const style2 = {
    //     backgroundColor:'aquamarine',
    // }
    // const style3 = {
    //   fontSize:'30px'
    // }
    return (
      <div>
        {/* <h3 style={style1}>Welcome</h3>  using style1 object */}
        <style>
        {`
          .internalHeading {
            color: blue;
            background-color: lightyellow;
            font-size: 28px;
            padding: 8px;
          }
        `}
      </style>

      <h3 className="internalHeading">Internal CSS Example</h3>
        {/* <h3 style={{...style1,...style2, ...style3}}>React app</h3> using spread operator to combine style1 and style2 objects */}
      </div>
    )
  }
}
export default StyleComp2;
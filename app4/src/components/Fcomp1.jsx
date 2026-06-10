import React from 'react'

const Fcomp1 = (props) => { // define props in fun function
    console.log(props);
    return (
    <div>
        <h3>Functional Component 1 : {props.sid} - {props.name}</h3> {/* access props in fun function */}
    </div>
  )
}
export default Fcomp1
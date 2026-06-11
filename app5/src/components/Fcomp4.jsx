import React, { useState } from 'react'

const Fcomp4 = () => {
  const [name, setName] = useState("Aditya");

  return (
    <div>
        <center>
          <h1>Fcomp4: Developer name is {name}</h1>
        </center>
    </div>
  )
}

export default Fcomp4
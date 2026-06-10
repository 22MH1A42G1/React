import React, { useState } from 'react'
//hooks - useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback

const Fcomp3 = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
        <h3>Functional Component 3</h3>
        <h4>Count : {cnt}</h4>
        <button onClick={() => setCnt(cnt + 1)}>Increment</button>
        <button onClick={() => setCnt(cnt - 1)}>Decrement</button>
    </div>
  )
}
export default Fcomp3
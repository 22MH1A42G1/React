Here's how to apply inline styles in React:

1.  **Inline CSS:**

```jsx
import React, { Component } from 'react'

class StyleComp1 extends Component {
  render() {
    return (
      <div>
        <h3 style={{color:'red', backgroundColor:'aquamarine', fontSize:'30px'}}>Welcome</h3>
      </div>
    )
  }
}
export default StyleComp1;
```

2.  **Styling with variable objects (inline):**

```jsx
import React, { Component } from 'react'

class StyleComp2 extends Component {
  render() {
    const style1 = {
        color:'red'
    }
    const style2 = {
        backgroundColor:'aquamarine'
    }
    return (
      <div>
        <h3 style={style1}>Welcome</h3>  {/* using style1 object */}
        <h3 style={{...style1,...style2}}>React app</h3> {/* using spread operator to combine style1 and style2 objects */}
      </div>
    )
  }
}
export default StyleComp2;
```

3. internal css

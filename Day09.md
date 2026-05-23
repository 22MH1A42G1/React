# day09

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
Here are clear notes on **Style Components in React** — covering inline, internal, and external approaches:

---

# Style Components in React

### i. **Inline Styling**
- Styles are applied directly to elements using the `style` attribute.
- Written as a JavaScript object inside JSX.
- Property names use **camelCase** (e.g., `backgroundColor` instead of `background-color`).
- Example:
  ```jsx
  <h3 style={{ color: 'red', backgroundColor: 'aquamarine' }}>Welcome</h3>
  ```

---

### ii. **Internal Styling**
- Styles are defined inside the component file itself.
- Two common approaches:
  1. **Using `<style>` tag in JSX**:
     ```jsx
     <style>
       {`
         .heading {
           color: blue;
           font-size: 28px;
         }
       `}
     </style>
     <h3 className="heading">Internal CSS Example</h3>
     ```
  2. **CSS-in-JS (object inside component)**:
     ```jsx
     const styles = {
       heading: {
         color: 'blue',
         backgroundColor: 'lightgray',
         fontSize: '28px'
       }
     }
     <h3 style={styles.heading}>Internal CSS Example</h3>
     ```

---

### iii. **External Styling**
- Styles are written in a separate `.css` file and imported into the component.
- Cleaner and more maintainable for larger projects.
- Example:
  - **App.css**
    ```css
    .heading {
      color: green;
      background-color: yellow;
      font-size: 26px;
    }
    ```
  - **App.js**
    ```jsx
    import './App.css';

    function App() {
      return <h3 className="heading">External CSS Example</h3>;
    }
    ```

---

✨ **Summary:**
- **Inline** → Quick, scoped to one element.  
- **Internal** → Styles grouped within the component file.  
- **External** → Best for scalability, reusable across components.

--- 

**Bootstrap in react**


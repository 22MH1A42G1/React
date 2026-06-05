# Day 09 - React Styling Notes

This note explains React styling step by step using:
- Inline CSS
- Internal CSS
- External CSS
- Bootstrap CSS

---

## 1) Inline CSS

### Example 1: Direct inline style

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

### Output
- Text color is **red**
- Background is **aquamarine**
- Font size is **30px**

<img width="393" height="310" alt="Inline CSS output" src="https://github.com/user-attachments/assets/b3dbcfa2-a7af-454d-9813-89e32c20daa3" />

---

### Example 2: Styling with variable objects (inline)

```jsx
import React, { Component } from 'react'

class StyleComp2 extends Component {
  render() {
    const style1 = {
        color:'red'
    }
    const style2 = {
        backgroundColor:'aquamarine',
    }
    const style3 = {
      fontSize:'30px'
    }
    return (
      <div>
        <h3 style={style1}>Welcome</h3> {/* using style1 object */}
        <h3 style={{...style1,...style2, ...style3}}>React app</h3>{/* using spread operator to combine style1 and style2 objects */}
      </div>
    )
  }
}
export default StyleComp2;
```

### Output
- First heading uses only `style1`
- Second heading combines `style1` + `style2`
  <img width="317" height="234" alt="image" src="https://github.com/user-attachments/assets/013517be-8a70-477d-9663-67b8e5fb5aaa" />


---

## 2) Internal CSS

Internal CSS means writing style rules inside the same component file.

```jsx
import React from 'react';

function StyleCompInternal() {
  return (
    <>
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
    </>
  );
}

export default StyleCompInternal;
```

### Output
- Heading is styled using class-based CSS in the same file.
<img width="363" height="222" alt="image" src="https://github.com/user-attachments/assets/7e57b662-a28e-44b0-bbc6-fa16a04c1df9" />

---

## 3) External CSS

External CSS means creating styles in a separate file and importing it.

### `StyleCompExternal.css`

```css
.externalHeading {
  color: green;
  background-color: #fff3cd;
  font-size: 26px;
  padding: 8px;
  border: 1px solid #f0ad4e;
}
```

### `StyleCompExternal.jsx`

```jsx
import React from 'react';
import './StyleCompExternal.css';

function StyleCompExternal() {
  return <h3 className="externalHeading">External CSS Example</h3>;
}

export default StyleCompExternal;
```

### Output
- Styling is managed in a separate CSS file.
- Best for reusability and large projects.
<img width="313" height="203" alt="image" src="https://github.com/user-attachments/assets/2063e131-6fee-409e-b0d6-75ec92d4584d" />

---

## 4) Bootstrap CSS in React

Bootstrap gives ready-made classes for layout and styling.

### Step 1: Install Bootstrap

```bash
npm install bootstrap
```

### Step 2: Import Bootstrap in `src/index.js`

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Step 3: Use Bootstrap classes

```jsx
import React from 'react';

function StyleCompBootstrap() {
  return (
    <div className="container mt-4">
      <h3 className="text-primary">Bootstrap Styling</h3>
      <button className="btn btn-success">Save</button>
      <button className="btn btn-danger ms-2">Delete</button>
    </div>
  );
}

export default StyleCompBootstrap;
```

### Output
- `text-primary` makes heading blue.
- `btn btn-success` and `btn btn-danger` give styled buttons.
- `ms-2` adds spacing between buttons.

<img width="640" height="360" alt="Bootstrap output" src="./app2/Screenshot%202026-05-04%20161458.jpg" />

---

## Step-by-step commands to practice now

```bash
# 1) Create app
npx create-react-app app9-styling

# 2) Move into app
cd app9-styling

# 3) Start React app
npm start

# 4) Create components and CSS files in src/
#    StyleComp1.jsx, StyleComp2.jsx, StyleCompInternal.jsx,
#    StyleCompExternal.jsx, StyleCompExternal.css

# 5) For Bootstrap example
npm install bootstrap

# 6) Import bootstrap in src/index.js
#    import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## Quick Summary

- **Inline CSS**: Fast for single elements.
- **Internal CSS**: Useful when you want CSS inside one component file.
- **External CSS**: Best for clean and scalable styling.
- **Bootstrap CSS**: Fast UI development using prebuilt classes.

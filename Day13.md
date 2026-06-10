# Day 13

## Functional Components

1. Check versions
```
node -v
npm -v
```
2. Create React project
```
npx create-react-app@latest app4
```
3. goto vscode
```
dir
cd app4
code .
```
4. run this project
```
npm start
```
5. make change in `app.js`
```
import './App.css';
import { Fcomp1 } from './components/Fcomp1';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Application</h1>
        <Fcomp1 sid="22MH1A42G1" name="Aditya"/>
      </header>
    </div>
  );
}

export default App;
```
6. create components folder in that have create functional component (`Fcomp1`)
   - **rafce** - react arrow function export component
   - **rcc** - react class component
   - **rce** - react class export component
   - **rccp** - react class component prop types
   - **rfc** - react functional component
   - **rfce** - react functional export component
```
import React from 'react'

export const Fcomp1 = (props) => { // define props in fun function
    console.log(props);
    return (
    <div>
        <h3>Functional Component 1 : {props.sid} - {props.name}</h3> {/* access props in fun function */}
    </div>
  )
}
```
7. output we see in console object Key & value
<img width="670" height="324" alt="image" src="https://github.com/user-attachments/assets/9ac1ed63-1a9e-4633-bbb0-60a9712061ed" />


8. create other components named `Fcomp2.jsx` & `Fcomp3.jsx`
   i. make changes in `app.js`
```
import './App.css';
import Fcomp1 from './components/Fcomp1';
import Fcomp2 from './components/Fcomp2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Application</h1>
      </header>
      <Fcomp1 sid="22QW1QE231" name="John Doe" />
      <Fcomp2 sid="22MH1A42G1" name="Aditya"/>
    </div>
  );
}

export default App;
```
  ii. write code for **rfce** (react functional export component) in `Fcomp2.jsx`
```
import React from 'react'

function Fcomp2(props) {
  return (
    <div>
        <h3>Functional Component 2 : {props.sid} - {props.name}</h3>
    </div>
  )
}

export default Fcomp2
```
  iii. output

<img width="678" height="309" alt="image" src="https://github.com/user-attachments/assets/537988e6-c4b2-4d53-a8bf-031808a13e8f" />

## React useState Hook
The useState hook allows functional components in React to store and manage data that can change over time. It is simple to use and ideal for handling basic state updates within a component.

- It lets you add state variables to functional components.
- It is best suited for simple and straightforward state updates.
- The hook must be imported from React before using it.

<img width="629" height="260" alt="image" src="https://github.com/user-attachments/assets/f56104bb-8658-4aa1-bd4d-b2d9ddcf89f4" />

i. create `Fcomp3.jsx`
```
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
```
ii. output:
- increment
<img width="221" height="251" alt="image" src="https://github.com/user-attachments/assets/89d81fd9-38a3-4e20-9b3d-a973937e0e06" />

- decrement
<img width="230" height="250" alt="image" src="https://github.com/user-attachments/assets/bd6ca1d7-9beb-47d9-8e53-3f698577299e" />

## Vite 
Vite is a blazing fast frontend build tool powering the next generation of web applications.
<img width="2361" height="258" alt="vite-frameworks D3X8o4O8" src="https://github.com/user-attachments/assets/36ae672c-61f7-41d4-ad06-c20b5903db7b" />
**Instant Server Start** : On demand source file serving over native ESM, with blazing fast dependency pre-bundling.
**Lightning Fast HMR** : Instantly reflect changes as you save, no matter how big your app is.

### steps for start react project
1. checking versions
```
node -v
npm -v
```
2. creating react application
```
npm create vite@latest
```
3. remove bolerplatecode from `App.jsx`, `App.css`, `index.css` and after creteing own components that will connect with `App.jsx`.
**App.jsx**
```
import './App.css'
import Fcomp1 from './components/Fcomp1'
import Fcomp2 from './components/Fcomp2'
import Fcomp3 from './components/Fcomp3'
import Fcomp4 from './components/Fcomp4'
function App() {

  return (
    <>
      <center>
      <section id="center">
        <h1>React + Vite Application</h1>
      </section>
      <Fcomp1 name="Aditya" />
      <Fcomp2 name="Aditya" />
      <Fcomp3 />
      <Fcomp4 />
      </center>
    </>
  )
}

export default App

```
**App.css**
```


#center {
  display: flex;
  flex-direction: column;
  background-color: darkblue;
  color: white;
  font-size: 25px;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

```
**Fcomp1.jsx**
```
import React from 'react'

const Fcomp1 = (props) => {
  return (
    <div>     
        <h1 style={{color:"red"}, {fontSize:"50px"}, {textAlign:"center"}}>Fcomp1 : {props.name}</h1>
    </div>
  )
}
export default Fcomp1
```
**Fcomp2.jsx**
```
import React from 'react'

const Fcomp1 = (props) => {
  return (
    <div>     
        <h1 style={{color:"red"}, {fontSize:"50px"}, {textAlign:"center"}}>Fcomp1 : {props.name}</h1>
    </div>
  )
}
export default Fcomp1
```
**Fcomp3.jsx**
```
import React, { useState} from 'react'

const Fcomp3 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Fcomp3: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Fcomp3
```
**Fcomp4.jsx**
```
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
```
4. after run this for local hosting
```
npm run dev
```
6. output
<img width="540" height="433" alt="image" src="https://github.com/user-attachments/assets/12b7521d-f04b-444a-8bb2-84f7c9735240" />

## Reference
- [npmjs](https://www.npmjs.com/package/create-react-app)
- [vite](https://vite.dev/guide/)

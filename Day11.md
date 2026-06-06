### Day 11

## Data transfer by using Props & State 

#### How should that process be done

<img width="545" height="329" alt="image" src="https://github.com/user-attachments/assets/26e83580-7f8a-4f3c-acc4-b43daa18117e" />

#### Example Code with Output

> Comp101.jsx  
Parent component holds **state** and passes it down as **props**.

```jsx
import React, { Component } from 'react'
import Comp102 from './Comp102';
export class Comp101 extends Component {
    constructor() {
        super() 
        this.state = {
            name: 'Aditya'
        }
    }
  render() {
    return (
      <div>
        <h1>Comp101 : {this.state.name}</h1>
        <Comp102 name={this.state.name} />
      </div>
    )
  }
}

export default Comp101

```

> Comp102.jsx  
Receives **props** and passes them further down.

```jsx
import React, { Component } from 'react'
import Comp103 from './Comp103';
export class Comp102 extends Component {
  render() {
    return (
      <div>
        <h1>Comp102 : {this.props.name}</h1>
        <Comp103 name={this.props.name}/>
      </div>
    )
  }
}

export default Comp102
```

> Comp103.jsx

```jsx
import React, { Component } from 'react'
import Comp104 from './Comp104';
export class Comp103 extends Component {
  render() {
    return (
      <div>
        <h1>Comp103 : {this.props.name}</h1>
        <Comp104 name={this.props.name}/>
      </div>
    )
  }
}

export default Comp103
```

> Comp104.jsx

```jsx
import React, { Component } from 'react'
import Comp105 from './Comp105';
export class Comp104 extends Component {
  render() {
    return (
      <div>
        <h1>Comp104 : {this.props.name}</h1>
        <Comp105 name={this.props.name}/>
      </div>
    )
  }
}

export default Comp104
```

> Comp105.jsx  
Final child component displays the prop.

```jsx
import React, { Component } from 'react'

export class Comp105 extends Component {
  render() {
    return (
      <div>
        <h1>Comp105 : {this.props.name}</h1>
      </div>
    )
  }
}

export default Comp105
```

#### 📌 Output Flow:

- `Comp101` holds the state (`name: "Aditya"`)

- Passes it down as props → `Comp102 → Comp103 → Comp104 → Comp105`

- Each component displays the same value.
<img width="393" height="488" alt="image" src="https://github.com/user-attachments/assets/d01328c4-5f4e-42df-ab12-4018c97b8eb8" />

## Context API

<img width="432" height="418" alt="image" src="https://github.com/user-attachments/assets/d2bfb3a5-6b93-4431-baa7-78fc4a1f0ef8" />

- **Problem**: Passing props through multiple levels (prop drilling) becomes repetitive and hard to manage.

- **Solution**: Context API allows sharing data globally without manually passing props at each level.

## 📝 Description
This example demonstrates how **React Context API** helps in sharing data across deeply nested components without **prop drilling**.  
Instead of passing props manually from `Comp101 → Comp102 → Comp103 → Comp104 → Comp105`, we use a **Context Provider** to make data available directly to the consumer component.

---

## 💻 Code

### Comp101.jsx
```jsx
import React, { Component } from 'react'
import Comp102 from './Comp102';
export const MyContext = React.createContext();

export class Comp101 extends Component {
    constructor() {
        super() 
        this.state = {
            rollNo : '22MH1A42G1',
            name: 'Aditya',
            fee: 18000
        }
    }
    feeIncrement = () => {
        this.setState({
            fee: this.state.fee + 1000
        })
    }

    render() {
        const ContextData = {
            data : this.state,
            feeIncrement : this.feeIncrement
        }
        return (
          <div>
            <h1>Comp101 </h1>
            <MyContext.Provider value={ContextData}>
                <Comp102 />
            </MyContext.Provider>
          </div>
        )
    }
}
export default Comp101
```

### Comp102.jsx → Comp103.jsx → Comp104.jsx
```jsx
// Each just renders heading and passes control down
```
### Comp105.jsx

```jsx
import React, { Component } from 'react'
import { MyContext } from './Comp101';

export class Comp105 extends Component {
  render() {
    return (
      <div>
        <h1>Comp105 : </h1>
        <MyContext.Consumer>
          {
            ({data, feeIncrement}) => (
              <div>
                <p>RollNo : {data.rollNo}</p>
                <p>Name : {data.name}</p>
                <p>Fee : {data.fee}</p>
                <button onClick={feeIncrement}>Increment Fee</button>
              </div>
            )
          }
        </MyContext.Consumer>
      </div>
    )
  }
}
export default Comp105
```

### 🖥️ Output

> before clicking Increment  

<img width="404" height="558" alt="image" src="https://github.com/user-attachments/assets/70202ab5-92b1-40a5-8f8d-3ff359895af0" />

> after clicking Increment (one time)

<img width="369" height="540" alt="image" src="https://github.com/user-attachments/assets/7875c9b0-6717-48e3-8b93-08126b8ade19" />

### 📖 Explanation

- **Provider** (`MyContext.Provider`): Supplies data (`rollNo`, `name`, `fee`) and functions (`feeIncrement`) to child components.

- **Consumer** (MyContext.Consumer): Reads the data directly without needing props.

- **State Management**: Fee is updated in `Comp101` but reflected in `Comp105` instantly.

### ❓ Why Use Context API?
- Avoids prop drilling (passing props through multiple levels).

- Makes global state accessible anywhere in the component tree.

- Useful for:
    - Authentication (user login info)
    - Theme switching (dark/light mode)
    - Language preferences
    - Shared app-wide settings

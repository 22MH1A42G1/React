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

- **Problem**: Passing props through multiple levels (prop drilling) becomes repetitive and hard to manage.

- **Solution**: Context API allows sharing data globally without manually passing props at each level.
<img width="432" height="418" alt="image" src="https://github.com/user-attachments/assets/d2bfb3a5-6b93-4431-baa7-78fc4a1f0ef8" />

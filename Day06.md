### events

<img width="768" height="384" alt="image" src="https://github.com/user-attachments/assets/7ebb0172-d260-4256-9e7e-30917ef5c9f6" />

- events are user actions on application inside the browser.

**setState**
- click -- Onclick increment & decrement using `setState` eg: Counter.jsx
- `setState` is used to update the state of the component, it is in-built function to update component state.
- `setState` is one of the official way to update a component state as and when you update state with setState it triggers the render() method again re-render
- component is mounted the `render()` method executed, when it called UI.
- methods are actions on particular event
- `setState` is a method provided by `React.Component`
syntax:
```
this.setState(updater, callback);
```

eg: [GetCourse.jsx]()

```
--------------👉 button  ------👉 target
| click me|                         ☝
-----------| (event) passing 👇      |
           |--👉onClick(Function)    |
     -----------------------------👉 input
Name |    a             |
     -------------------- (event) passing
                     |--> onChange(function)
```
1. before page
<img width="684" height="339" alt="image" src="https://github.com/user-attachments/assets/37cd191c-5af5-40b7-863e-fcc1417a33be" />
2. after click on add React
<img width="677" height="329" alt="image" src="https://github.com/user-attachments/assets/1da99fb7-d7bf-4437-8bdb-dfb70f62542e" />
3. after click on add java script
<img width="658" height="283" alt="image" src="https://github.com/user-attachments/assets/591376c7-1051-4e1a-a3ce-9887d761a994" />
4. after clicking reset course
<img width="679" height="371" alt="image" src="https://github.com/user-attachments/assets/eefca372-65f5-4382-aeed-224797abe20d" />

---

Q) How to pass an argument as an event.

**GetCourse2.jsx**
```
import React, { Component } from 'react'

export default class GetCourse2 extends Component {
  constructor() { // constructor is a special method that is called when an instance of the class is created
    super(); // call parent class constructor
    this.state = { // state is an object that holds the data of the component
      course: ''
    };
  }
  addCourse=(e) => { // e is the event object that is passed to the event handler
    console.log(e.target.innerText); // e.target is the element that triggered the event and innerText is the text content of the element
    this.setState({ // setState is used to update the state of the component
      course: e.target.innerText
    })
  };
  
  render() {
    return (
      <div>
        <h1>-----------GetCourse2--------------------</h1>
        <h3>Course: {this.state.course}</h3>
        {/* onClick is an event handler that is called when the button is clicked */}
        <button onClick={this.addCourse}>React</button>
        <button onClick={this.addCourse}>JavaScript</button>
        <button onClick={this.addCourse}>Python</button>
        <button onClick={this.addCourse}>Java</button>
        <button onClick={this.addCourse}>C++</button>
      </div>
    );
  }
}


```
1. after click on button react
<img width="1283" height="495" alt="image" src="https://github.com/user-attachments/assets/d3971460-9ede-40de-9a0e-5f043c7e00b9" />
2. all buttons clicked after
<img width="1363" height="428" alt="image" src="https://github.com/user-attachments/assets/f7d10f4e-f4d5-493f-a55d-ac1517b072f1" />

---

**ReadText.jsx**
```
import React, { Component } from 'react'

class ReadText extends Component {
    constructor(){
        super();
        this.state={
            courseName:""
        }
    }

    readCourse=(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        // this.setState({ // setState is used to update the state of the component
        //     courseName:e.target.value
        // })
    }
  render() {
    return (
      <div>
        <h1>Course: {this.state.courseName} </h1>
        <input type="text" id="" onChange={this.readCourse}/>
        <button>Read</button>
      </div>
    )
  }
}
export default ReadText;
```

- event, event.target, event.target.value (without setState)
<img width="684" height="681" alt="image" src="https://github.com/user-attachments/assets/91d4f3cb-9af4-4a70-87da-4622f7729905" />
- event, event.target, event.target.value (with setState)
<img width="682" height="719" alt="image" src="https://github.com/user-attachments/assets/1eb65ad3-e9ab-4b1d-aa98-747c33615568" />


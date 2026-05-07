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

---



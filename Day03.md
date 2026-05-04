# cmd
>> first you can check version
```
node -v
```
>> after create your app
```
npx create-react-app@latest app2
```
Their are 2 types of Components in ReactJS
1. Class based
   i. import statement
   ii. class statement
   iii. export statement
```
import React, {Component} from "react";
class comp1 extends Component {
    render() {
        return {
            <div> welcome </div>
            <h1> this component 1</h1>
        }
    }
}
export default comp1;
```

3. Functional based


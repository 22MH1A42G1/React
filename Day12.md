# Day 12: 

## Error Handling in React

### Image Component

This `Image` component displays an image based on the `img` prop. If `img` is 'NoImage', it throws an error.

```jsx
import React, { Component } from 'react'

export class Image extends Component {
  render() {
        if (this.props.img === 'NoImage') {
            throw new Error('Image Not Found');
        }else{
            return <img src={this.props.img} alt="Wallpaper 1" width={200} height={200}/>
        }
    }
}

export default Image
```

### Error Boundary Implementation

To handle errors gracefully, an `Error` component acts as an error boundary. It uses `getDerivedStateFromError` to catch errors from its children and update its state, displaying a fallback UI (`<h3>Image not found</h3>`) if an error occurs.


<img width="643" height="391" alt="image" src="https://github.com/user-attachments/assets/711f693e-3a30-4b1b-b209-99b625c9a5a0" />

```jsx
import React, { Component } from 'react'

export class Error extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }
  render() {
    if (this.state.hasError) {
        return <h3>Image not found</h3>
    }
    return this.props.children
  }
}

export default Error
```

### Example Usage with Error Boundary

The `ErrComp1` component demonstrates how to use the `Error` boundary with the `Image` component. It attempts to render three `Image` components; one intentionally triggers an error by passing 'NoImage' as the prop, while the others display valid images.

```jsx
import React, { Component } from 'react'
import img1 from './img/wallpaper1.jpg';
import img2 from './img/OIP (3).jpeg';
import Image from './Image';
import Error from './Error';
export class ErrComp1 extends Component {
  render() {
    return (
      <div>
        {/* <img src={img1} alt="Wallpaper 1" width={750} height={600}/> */}
        <Error>
          <Image img={'NoImage'}/>
        </Error>
        <Error>
          <Image img={img1}/>
        </Error>
        <Error>
          <Image img={img2}/>
        </Error>
      </div>
    )
  }
}

export default ErrComp1
```


### Output

<img width="566" height="350" alt="image" src="https://github.com/user-attachments/assets/4e4b402e-c8cd-4f44-9455-190ccd9d5815" />

---

## Call back fuctions

### description

<img width="446" height="291" alt="image" src="https://github.com/user-attachments/assets/6476ff11-8438-4a78-8333-7034caf6a665" />


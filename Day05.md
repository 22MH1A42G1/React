### templates

This HTML file is a template.
- If you open it directly in the browser, you will see an empty page.
- You can add webfonts, meta tags, or analytics to this file.
- The build step will place the bundled scripts into the <body> tag.
- To begin the development, run `npm start` or `yarn start`.
- To create a production bundle, use `npm run build` or `yarn build`.

### Architecture Diagram
```
                     connects to
  index.html           <------    index.js                                                     <------ App.js
--------------------------    --------------------------------------------------------------------   ----------------          
| <div id="root"> </div> |    | const root=ReactDOM.createRoot(document.getElementById('root');  |   |              |
--------------------------    | root.render(                                                     |   |              |
                              |      <React.StrictMode>                                          |   ----------------
                              |            <App />                                               |
                              |      </React.StrictMode>                                         |
                              | );                                                               |
                              --------------------------------------------------------------------
```
`index.js` connects components to the `<App />` tag in `index.html` to load templates.

###  events handling
  - events are user actions on application inside the browser.
      1. click -- Onclick increment & decrement using `setState`
         eg: [Counter.jsx](app3/src/Counter.jsx)
         - methods are actions on particular event
        
<img width="768" height="384" alt="image" src="https://github.com/user-attachments/assets/eaedb359-8e7e-4b15-9810-fd4cf8c637d4" />



completed topics
----------------

1. what is react
2. single page application (index.html in public folder)
   - understanding single page applications(index.js, app.js)
3. Virtual DOM concepts?
4. installation process
   - create-react-app@latest
5. project creation
   - `/node modules` --> required modules to develop applications.
   - `/public`  --> here files are public.
   - `/src`  --> here develop write entire application code.
   - `package.json` --> 
   - `package-lock.json` -->
   - `README.md` --> instructions for how to work or run this project.
6. what is JSX? (className)
   - Jsx Rules.
     1. any function / class method returns only one element.
   - Rendering elements.
   - understanding parent and child relation.
7. components
8. class, functional
9. class component creation
    - constructor
    - state
    - props
10. events handling
    - events are user actions on application inside the browser.
      1. click -- Onclick increment & decrement using `setState`
         eg: [Counter.jsx](app3/src/Counter.jsx)
             [Event.jsx](app3/src/Event1.jsx)
      

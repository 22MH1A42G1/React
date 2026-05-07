### templates

This HTML file is a template.
- If you open it directly in the browser, you will see an empty page.
- You can add webfonts, meta tags, or analytics to this file.
- The build step will place the bundled scripts into the <body> tag.
- To begin the development, run `npm start` or `yarn start`.
- To create a production bundle, use `npm run build` or `yarn build`.

# Architecture Diagram
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

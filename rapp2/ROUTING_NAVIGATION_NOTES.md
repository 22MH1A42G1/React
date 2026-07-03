# React Routing and Navigation Notes

## Step 1: Install the router package
I added `react-router-dom` to the project so the app can support page-to-page navigation without reloading the browser.

What I learned:
- React Router is the standard library for client-side routing in React apps.
- Installing the package is the first requirement before using routes, links, or navigation hooks.

## Step 2: Wrap the app with `BrowserRouter`
In `src/App.jsx`, the whole application is wrapped with `BrowserRouter` so routing works across the app.

What I learned:
- `BrowserRouter` provides routing context to every component inside it.
- Without it, `Routes`, `Route`, and `NavLink` will not work correctly.

## Step 3: Define routes with `Routes` and `Route`
I created routes for `Home`, `About`, `Contact`, `Courses`, `Login`, and `Signup`.

What I learned:
- `Routes` acts like a container for all route definitions.
- Each `Route` matches a URL path with a component to display.
- The `element` prop decides which page component appears for that path.

## Step 4: Build navigation with `NavLink`
In `src/components/Navbar.jsx`, I used `NavLink` for each menu item.

What I learned:
- `NavLink` lets users move between pages without refreshing the browser.
- It is better for navigation menus than plain anchor tags in a React Router app.
- `NavLink` can also help show active link styles later if needed.

## Step 5: Keep page components separate
Each page was placed in its own file inside `src/pages`.

What I learned:
- Separating pages makes the code easier to read and maintain.
- One component per page keeps routing clean and organized.
- This structure is easier to expand when the app grows.

## Step 6: Render the app from `main.jsx`
The root app is mounted with `createRoot` and rendered inside `StrictMode`.

What I learned:
- `main.jsx` is the entry point for the React app.
- The router setup in `App.jsx` only works after the app is mounted from `main.jsx`.
- `StrictMode` helps highlight potential issues during development.

## Step 7: Test navigation in the browser
I checked that clicking the navbar links changes the route and displays the correct page.

What I learned:
- Route changes should update the URL and component view together.
- If a page does not show, the route path and component import are the first things to verify.
- Navigation should feel smooth because the browser is not doing a full reload.

## Summary
This project taught me how to set up React Router, connect URL paths to components, and create a navigation bar that moves between pages cleanly.

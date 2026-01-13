# React Basics – npm, Vite, Project Structure & SPA

---

## 1. npm and npx

- **npm (Node Package Manager)**  
  Used to install, manage, and maintain dependencies (packages) in a Node.js / React project.

- **npx (Node Package Executor)**  
  Used to execute packages directly without globally installing them.

---

## 2. `package.json` Scripts (React)

```json
start        -> Used to start the project in development mode
build        -> Used to generate production-ready files
lint         -> Used for code quality, optimization, and catching errors
browserslist -> Defines which browsers the web app should support
```

---

## 3. Running a React Project

```bash
npm start
# or
npm run start
```

### Build Command

```bash
npm run build
```

- Generates a **`build/`** folder
- This folder contains **all static files** (HTML, CSS, JS)
- Entire React code is converted into optimized JavaScript
- In **production**, users are served files from the **build folder**, not the `src` folder

---

## 4. Creating a React Project

### Using Create React App (CRA)

```bash
npx create-react-app app_name
```

- Slower because it installs all bundles and dependencies at once
- Uses `react-scripts`

### Using Vite (Recommended)

```bash
npm create vite@latest
cd app_name
npm run dev
```

- Faster than CRA
- Lightweight
- No `react-scripts`

---

## 5. How React Injects into HTML

### Flowchart

```
public/index.html
        |
        v
<div id="root"></div>
        |
        v
src/index.js
        |
        v
<App /> (App.jsx)
```

### Explanation

- React creates its **own virtual DOM**
- React attaches itself to the root div using:

```js
ReactDOM.createRoot(document.getElementById('root'))
```

---

## 6. Project Structure (Create React App)

### Important Files

#### `package-lock.json`
- Locks the **exact versions** of dependencies
- Ensures consistency across different machines

#### `package.json`
- Contains project metadata
- Lists required dependencies
- Defines scripts

---

### `public/` Folder

- `index.html` → Main and only HTML page
- `logo` → Static assets
- `manifest.json` → Used for mobile/PWA support
- `robots.txt` → Used by search engines (SEO)

---

### `src/` Folder

- `index.js` → Entry point of React
- `App.js / App.jsx` → Root component

---

## 7. Vite Project Structure Difference

- Does **not** use `react-scripts`
- React is injected directly using:

```html
<script type="module" src="/src/main.jsx"></script>
```

- Faster development and build process

---

## 8. Why React is a SPA (Single Page Application)

- React has **only one HTML file**:

```text
public/index.html
```

- Page does not reload
- Content updates dynamically using JavaScript and Virtual DOM

---

## 9. React Scripts

- `react-scripts` is responsible for:
  - Injecting React into HTML
  - Development server
  - Build optimization
  - Babel and Webpack configuration

---

## 10. JSX Rules

- **Component names must start with an Uppercase letter**

```jsx
function MyComponent() {}
```

- A component must return **only one parent element**

### Correct Ways

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)
```

### Using Fragment

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
)
```

- `<> </>` is called a **Fragment**
- Used to avoid unnecessary `<div>` wrappers

---

## 11. Summary Flow (React App Lifecycle)

```
Code (JSX)
   ↓
React Components
   ↓
Virtual DOM
   ↓
Real DOM (Browser)
```
# React Internals & JSX – Complete Notes

---

## 1. Why this gives ERROR (Custom ReactElement Object)

```
this will give error
like we make object of ReactElement
so before it in render() function things written like <ReactElement/> or ReactElement()
```

### Explanation
- In React, **we cannot directly render a plain JavaScript object**.
- React expects a **valid React Element**, not just any object.
- Writing `<ReactElement />` or calling `ReactElement()` assumes it is:
  - either a **component** (function/class)
  - or a **React-created element**

### Why error occurs
- Your custom object does NOT have:
  - `$$typeof: Symbol(react.element)`
  - internal metadata required by React
- React performs a check internally to verify:
  > "Is this a React Element?"
- Since your object fails this check, React throws an error.

> ⚠️ Important: **React does not trust user-made objects** for rendering.

---

## 2. Why THIS runs successfully

```
this will run ?? ## but why ??????
when we give this render have some argument as it is function now when we give this other element obejct then it is parse into tree
while we give Reactelement its tree fromation is differnet as we write our own react library.
```

### Explanation
- `render()` expects a **valid React Element object**
- When we use `React.createElement()`:
  - React creates an object in a **specific internal format**
  - That object is then converted into a **Fiber Tree**

### Internal Flow
```
React.createElement()
      ↓
React Element Object (with $$typeof)
      ↓
Fiber Tree Creation
      ↓
DOM Rendering
```

### Key Reason it works
- React itself created the element
- React fully understands the structure
- React can safely parse it into its reconciliation system

---

## 3. React Proper Syntax (JSX)

```
this is react proper syntax it properly works ..
this is react syntax ....
above pic we define our custom
```

### JSX Example
```jsx
<a href="https://google.com">Google</a>
```

### Important Truth
- JSX is **NOT HTML**
- JSX is **NOT directly rendered**
- JSX is converted into JavaScript before execution

---

## 4. Custom React vs Real React (Code)

```javascript
// this is our custom react
const reactelement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',},
        children:'Google Link'
}
```

### Why this fails
- Missing React-specific fields
- Children not placed inside `props.children`
- No identity marker (`$$typeof`)

---

```javascript
// how react done internally
const reactElement =React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Google Link'
)
```

### What React Adds Internally
```js
{
  $$typeof: Symbol(react.element),
  type: 'a',
  key: null,
  ref: null,
  props: {
    href: 'https://google.com',
    target: '_blank',
    children: 'Google Link'
  }
}
```

> ✅ This is why React accepts this but rejects custom objects.

---

## 5. How to Inject Variables in React (JSX `{}`)

```javascript
/* any thing in curly braces works as parameter...
 {} called as Expression (evaluated expression)..
 javascript nu final o/p je evalute thai gayu e write kariye..
 now evalution means {if(true) username } we don't write this .
 this things we write outside return .only final evaluted code we write ...

 now why we dont write {if()....}
 coz in reactelement code as we write above all variable are injected at last
 now if valu write kariye then it inject at last and object ni
 kaik syntax to hoy ne . so we dont write it like this..
*/
```

### Function Example
```javascript
function name(){
  const username="prince patel"
  return (
    <>
    <h1>welcome to {username}</h1>
    </>
  )
}
```

### Important Rule
- `{}` accepts **ONLY EXPRESSIONS**
- Expressions return values
- Statements do NOT return values

### Allowed Inside `{}`
```js
{username}
{2 + 2}
{isLoggedIn && "Welcome"}
```

### Not Allowed
```js
{if(condition) {...}}
{for(...) {...}}
```

---

## 6. Why React Disallows `if` Inside JSX

### Reason
- JSX is converted to function calls
- React injects values into `children`
- Statements break object structure

Example Conversion:
```jsx
<h1>{username}</h1>
```
⬇️
```js
React.createElement('h1', null, username)
```

---

## 7. Anchor Tag Output Explanation

```
output is like (click me to visit google chai aur react) whole this as one anchor tag...
```

### Reason
- Everything inside `<a>` becomes `props.children`
- Browser behavior makes entire anchor clickable

---

## 8. Direct JSX Injection & jsx-runtime

```javascript
import {jsx as _jsx} from 'react/jsx-runtime.js'
// now what to write ...
// go to github...
```

### Modern React Reality (React 17+)
- JSX no longer needs `import React from 'react'`
- JSX compiles into `jsx()` instead of `createElement()`

Example:
```jsx
<h1>Hello</h1>
```
⬇️
```js
_jsx("h1", { children: "Hello" })
```

---

## 9. Final Internal Flow (Very Important)

```
JSX
 ↓
jsx() / React.createElement()
 ↓
React Element Object
 ↓
Fiber Tree
 ↓
DOM
```

---

## 10. Final Summary
- JSX is syntax sugar
- React only understands **valid React Elements**
- `{}` allows evaluated expressions only
- Custom objects cannot be rendered directly
- `jsx-runtime` is the modern JSX engine



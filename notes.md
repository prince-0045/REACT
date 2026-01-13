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

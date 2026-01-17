import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0
        }}
      >
        {/* Bottom Panel */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            background: "rgba(255,255,255,0.9)",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          <button style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
          <button style={{ backgroundColor: "lavender" }} onClick={() => setColor("lavender")}>Lavender</button>
          <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => setColor("blue")}>Blue</button>
          <button style={{ backgroundColor: "green", color: "white" }} onClick={() => setColor("green")}>Green</button>
          <button style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
          <button style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
          <button style={{ backgroundColor: "black", color: "white" }} onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </>
  )
}

export default App

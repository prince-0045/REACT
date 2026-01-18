import { useCallback, useState,useEffect,useRef } from "react";

export default function App() {

  const [length, setLength] = useState(12);
  const [numberallowed, setNumberAllowed] = useState(false);
  const [charactersallowed, setCharactersallowed] = useState(false);
  const [password, setpassword] = useState("");

  //useCallback hook

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyuz";
    if (numberallowed) str += "1234567890";
    if (charactersallowed) str += "!@#$%^&*(){}[]'`~/";

    for (let i = 1; i <= length; i++) {
      let charidx = Math.floor(Math.random() * str.length + 1);
      pass += str[charidx];
    }
    setpassword(pass);
  }, [length, numberallowed, charactersallowed, setpassword]);
  //we can also avoid setpassword but for code optimization we put it there.
  // passwordGenerator()    we dont call like this .
  // as it make too much re render also it may also gone to infinate loop..


    // use of useRef hook
  const passwordref=useRef(null)
  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0,3) -> for selecting custom range 
    
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect call back ..
  useEffect(()=>{passwordGenerator()},[length, numberallowed, charactersallowed, passwordGenerator])

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        {/* Input */}
        <div style={styles.inputBox}>
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordref}
            style={styles.input}
          />
          <button style={styles.button} onClick={copyPasswordToClipboard}>copy</button>
        </div>

        {/* Controls */}
        <div style={styles.controls}>
          <div style={styles.row}>
            <input
              type="range"
              min={6}
              max={60}
              value={length}
              onChange={(e) => { setLength(e.target.value); }}
            />
            <label>Length: {length}</label>
          </div>

          <div style={styles.row}>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              onChange={() => { setNumberAllowed((prev) => !prev); }}
            />
            <label>Numbers</label>
          </div>

          <div style={styles.row}>
            <input
              type="checkbox"
              defaultChecked={charactersallowed}
              onChange={() => { setCharactersallowed((prev) => !prev); }}
            />
            <label>Characters</label>
          </div>
        </div>


        //we can call passwordGenerator when button is click 
        // but we have to do using useEffect hook

        {/* <button style={styles.generateBtn} onClick={passwordGenerator}>
          Generate Password
        </button> */}
      </div>
    </div>
  );
}

/* ================== STYLES ================== */

const styles = {
  page: {
    height: "100vh",
    background: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  container: {
    width: "500px",
    background: "#111827",
    padding: "20px",
    borderRadius: "12px",
    color: "orange",
  },

  inputBox: {
    display: "flex",
    background: "#1f2933",
    borderRadius: "8px",
    overflow: "hidden",
  },

  input: {
    flex: 1,
    padding: "12px",
    fontSize: "18px",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "orange",
  },

  button: {
    padding: "0 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },

  controls: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  generateBtn: {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    background: "orange",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

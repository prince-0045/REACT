import { useState } from 'react';
import './App.css'


function App() {

  const [counter,setCounter]=useState(15)
    const increaseValue = () => {
    setCounter(counter + 1);
  }

  const decreaseValue = () => {
    setCounter(counter - 1);
  }

  // const increaseValue = () => {
  //   // eslint-disable-next-line react-hooks/immutability
  //   counter += 1;
  //   console.log(counter);
  // }

  // const DecreaseValue = () => {
  //   counter -= 1;// here we get error -> Reassigning `counter` after render has completed can cause inconsistent behavior on subsequent renders. Consider using state instead.
  //   console.log(counter);
  // }



  return (
    <>
      <h1>Counter app</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={increaseValue}>Increment</button>
      <br/>
      <button onClick={decreaseValue}>Decrement</button>
    </>
  )
}

export default App
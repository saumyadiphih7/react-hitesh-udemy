import {useState} from "react"

import './App.css'

function App() {
  // let counter = 0;
  const [counter,setCounter]=useState(0)

   const addValue=()=>{
    setCounter(counter+1);
    console.log(counter);
   }

   const removeValue=()=>{
    setCounter(counter - 1);
    console.log(counter);
   }

  return (
    <>
      <h1>Learning React with Hitesh</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value </button>
      <button onClick={removeValue}>Remove Value </button>
    </>
  )
}

export default App

import { useRef, useState } from 'react'
import './App.css'
import FocusInput from './FocusInput';
import PreviousValue from './PreviousValue';

function App() {
  const [input, setInput] = useState<string>("");
  console.log("Rendering!!!");

  const inputRef = useRef<HTMLInputElement>(null);

  const Display = () =>{
    console.log(inputRef.current);
    inputRef.current?.focus()
  }

  return (
    <>
      <h1>Input</h1>
      <input 
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <p>Entered Input1 : {inputRef.current?.value}</p>
      <p>Enered Input: {input}</p>

      <button onClick={Display}>CLick</button>

      <FocusInput/>
      <PreviousValue/>
    </>
  )
}

export default App

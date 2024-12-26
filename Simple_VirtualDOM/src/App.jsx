import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("Hello");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{text}</h1>
      Count:<h2>{count}</h2>
      <button name="btn1" onClick={() => setText("Hi")}>Change Text</button>
      <button name="btn2" onClick={() => {setCount(count => count + 1)}}>Count</button>
    </div>
  );
}

export default App

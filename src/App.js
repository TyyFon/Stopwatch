//import './App.css';
import { useState, useRef } from 'react';
import FormatedTime from './Components/FormatedTime.js'


function App() {

const [time, setTimer] = useState(0)
const [isActive, setIsActive] = useState(false)
const [isPaused, setIsPaused] = useState(false)
const interval = useRef(null)


const handleStart = () => {
  setIsActive(true)
  setIsPaused(false)
  interval.current = setInterval(() => {
    setTimer((timer) => timer + 1)
  }, 1)
}

const handlePause = () => {
  clearInterval(interval.current)
  setIsActive(false)
  setIsPaused(true)
}


const handleReset = () => {
  clearInterval(interval.current)
  setIsActive(false)
  setIsPaused(false)
  setTimer(0)
}


 return (
  <div>    
    <FormatedTime />
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  </div>
);
}

export default App;
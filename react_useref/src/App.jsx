import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  //// Learning useRef

  // const [count, setCount] = useState(0);
  // let val = 1;    // Normally
  // let val1 = useRef(1);   // Using useRef
  // function handleIncrement(){
  //   val++;
  //   console.log("Value of val: ", val);
  //   // Now this value of val resets to 1 everytime we do anything on the page because the page refreshes.
  //   // Hence, to make sure its value does not reset, we use useRef
  //   val1.current = val1.current + 1;
  //   console.log("Value of val1: ", val1.current);
  //   // Hence,
  //   // When useState variable changes: Page Re-Renders
  //   // When useRef variable changes: Page does not Re-Render

  //   setCount(count + 1);
  // }
  // // useRef can also be used to store reference of any element inside my DOM and 
  // // I can easily change its properties through it.
  // let btnRef = useRef();
  // function changeColor(){
  //   btnRef.current.style.backgroundColor = 'red';
  // }
  // // It runs on every render of page
  // useEffect(() => {
  //   console.log("New Render");
  // })
  // return (
  //   <div>
  //   //   <button ref={btnRef} onClick={handleIncrement}>
  //   //     Increment
  //   //   </button>
  //   //   <br />

  //   //   <button onClick={changeColor}>Change Color of 1st Button</button>
  //   //   <br />

  //   //   <div>
  //   //     Count: {count}
  //   //   </div>
  //   // </div>
  // )

  //// Basic StopWatch App
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br /><br />
      <button onClick={stopTimer}>Stop</button>
      <br /><br />
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default App

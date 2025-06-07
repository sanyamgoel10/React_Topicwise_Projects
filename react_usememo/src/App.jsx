import { useMemo, useState } from 'react'
import './App.css'

function App() {
  // useMemo hook is used to not do any expensive operations again and again
  const [count, setCount] = useState(0);
  const [inputVal, setInput] = useState(0);

  function expensiveTask(num){
    console.log("Inside Expensive Task");
    for(let i=0; i<2000000000; i++){}
    return num*2;
  }

  // let doubleValue = expensiveTask(inputVal);
  let doubleValue = useMemo(() => expensiveTask(inputVal), [inputVal]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => {setCount(count + 1)}}>Increment Count</button>
      <br /><br />
      <input type="number" placeholder='Enter Number' value={inputVal} onChange={(e) => setInput(e.target.value)} />
      <div>Double: {doubleValue}</div>
    </div>
  )
}

export default App

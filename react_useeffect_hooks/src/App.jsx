import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  // useEffect(() => {
  //   // first => side-effect function
  //   // second => clean-up function
  //   // third => comma separated dependancy list
  //   first
  //   return () => {
  //     second
  //   }
  // }, [third])

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  function handleClick(){
    setCount(count + 1);
  }
  function handleTotal(){
    setTotal(total + 1);
  }

  //// Use Effect Variation 1:-
  //// Runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  //// Use Effect Variation 2:-
  //// Runs on first render
  // useEffect(() => {
  //   alert("I will run on only first ender")
  // }, [])

  //// Use Effect Variation 3:-
  //// Runs on any action
  // useEffect(() => {
  //   alert("I will run on count change");
  // }, [count])

  //// Use Effect Variation 4:-
  //// Runc on Multiple dependencies action
  // useEffect(() => {
  //   alert("Runs when count or total is updated");
  // }, [count, total])

  //// Use Effect Variation 5:-
  //// Added a cleanup function
  // useEffect(() => {
  //   alert("Count is updated");
  //   return () => {
  //     alert("Count is unmounted from UI");
  //   }
  // }, [count])

  return (
    <div>
      <button onClick={handleClick}>Update Count</button>
      <br />
      Count is: {count}
      <br /><br />
      <button onClick={handleTotal}>Update Total</button>
      <br />
      Total is: {total}
    </div>
  )
}

export default App

// import { useCallback, useState } from 'react'
// import './App.css'
// import ChildComponent from './components/ChildComponent.jsx'

// function App() {
//   // Similar to useMemo hook
//   // useMemo hook cached a key and its value, but useCallback caches the reference to a function

//   const [count, setCount] = useState(0);

//   // Putting this function in useCallback prevents it from recreating, hence preventing re-rendering
//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   // On every click on Increment Button, the below ChildComponent also gets re-rendered as seen through console log
//   // To prevent this, we can use useCallback 

//   return (
//     <>
//       <div>
//         Count: {count}
//       </div>
//       <br />
//       <div>
//         <button onClick={handleClick}>
//           Increment
//         </button>
//       </div>
//       <br /><br />
//       <div>
//         <ChildComponent buttonName="Click Me" handleClick={handleClick} ></ChildComponent>
//       </div>
//     </>
//   )
// }

// export default App






import { useCallback, useState } from 'react'
import './App.css'
import ExpensiveComponent from './components/ExpensiveComponent.jsx'

function App() {
  return (
    <div>
      <ExpensiveComponent></ExpensiveComponent>
    </div>
  )
}

export default App

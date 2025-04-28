import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA.jsx';
import { useState } from 'react';

// Step 1:- Create Context
const UserContext = createContext();
// Step 2:- Wrap all the child inside a provider
// Step 3:- Pass value
// Step 4:- Consume the value in consumer

function App() {
  const [user, setUser] = useState({name: "Sango"})
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // Do the below in this parent only:-
  // create state
  // manage state
  // change state
  // sync state in all childs
  
  const [name, setName] = useState('');
  
  return (
    <div>
      <p>I am inside parent, and value of name is: {name}</p>
      <Card title="Card 1" name={name} setName={setName} />
      <Card title="Card 2" name={name} setName={setName} />
    </div>
  )
}

export default App

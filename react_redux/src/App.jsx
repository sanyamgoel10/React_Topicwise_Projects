import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleClickIncrement(){
    dispatch(increment());
  }

  function handleClickDecrement(){
    dispatch(decrement());
  }

  function handleClickReset(){
    dispatch(reset());
  }

  function handleClickAmount(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
      <p>Count: {count}</p>
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickDecrement}>-</button>
      <br />
      <button onClick={handleClickReset}>Reset</button>
      <br /><br />
      <input type="number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleClickAmount}>Increment by Amount</button>
    </div>
  )
}

export default App

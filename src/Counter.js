import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slices/CounterSlices';
import './Counter.css'

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='main'>
    <h2 align='center' className="heading">Counter Application</h2>
    <div className='counter'>
    
        <button className ='button' onClick={()=> dispatch(decrement())}>Decrement</button>
        <br></br>

        <div className='heading'>{count}</div>

        <br></br>

        <button className ='button' onClick={() => dispatch(increment())}>Increment</button>

        <br></br>
        
    </div>
    <div className='reset'>
    <button className ='button' onClick={()=> dispatch(reset())}>Reset</button>
    </div>
    </div>
  )
}

export default Counter
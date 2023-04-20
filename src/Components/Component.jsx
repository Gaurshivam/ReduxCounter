import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment ,decrement,reset} from './Counter';

const Component = () => {
    const storedata = useSelector((store)=>store.CountData.counter)
    const dispatch = useDispatch()
  return (
    <div >
      <h2>Count:  {storedata}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>&nbsp; &nbsp;
      <button onClick={()=>dispatch(decrement())}>Decrement</button>&nbsp; &nbsp;
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Component;

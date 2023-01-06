import React, {useState} from 'react'

const Counter = () =>{
  const [counter, setCounter] = useState(0);
  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

  return (
    <>
      <h2>Counter</h2>
      <button onClick={decrement}>{"-"}</button>
      {counter}
      <button onClick={increment}>{"+"} </button>
      <br></br>
    </>
  )
}

export default Counter;

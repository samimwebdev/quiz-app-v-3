import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = (num) => {
    setCount((prevCount) => prevCount + num)
  }

  const handleDecrement = (num) => {
    setCount((prevCount) => prevCount - num)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <div className='container'>
        <h2>Count : {count}</h2>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <button onClick={() => handleDecrement(1)}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default Counter

import { useState } from 'react'
import IsOddOrEven from './IsOddOrEven'
import RandomCard from './RandomCard'
//Must be remembered
//Must have parent element
//must have closing
// must be careful of reserved javascript keyword for-htmlFor class-className
// Dynamic value(expression) must be written within {}

//when component re-renders
// state update
//props change
// force update

//CSS Styling
//inline css
//external css
//modular css
//component CSS

function App() {
  const [count, setCount] = useState(0)
  const cardValues = [30, 33, 98, 10]
  const [pickedValue, setPickedValue] = useState(null)

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
      <IsOddOrEven count={count} pickedValue={pickedValue} />
      <RandomCard cardValues={cardValues} setPickedValue={setPickedValue} />
    </>
  )
}

export default App

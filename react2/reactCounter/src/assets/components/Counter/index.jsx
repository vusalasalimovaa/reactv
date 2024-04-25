import React from 'react'
import Decrement from '../Decrement'
import Count from '../Count'
import Increment from '../Increment'

const Counter = ({count, setCount}) => {
  return (
    <div>
      <Decrement count = {count} setCount={setCount} />
      <Count count={count} />
      <Increment count={count} setCount={setCount} />

    </div>
  )
}

export default Counter
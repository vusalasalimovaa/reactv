import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './reduxx/slice/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
     <div>
      <button onClick={() => {
        dispatch(increment())
      }}>Inc</button>
      <span>{count}</span>
      <button onClick={() => {
        dispatch(decrement())
      }}>Dec</button>
     </div>
    </>
  )
}

export default App

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/slice/counterSlice";
// import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <div>
        <div>
          <input onChange={(e) => {
            setInputValue(e.target.value)
          }} type="text" placeholder="eded daxil edin"/>
          <button onClick={() => {
            dispatch(incrementByAmount(inputValue))
          }}>Inc amount</button>
        </div>
        <button onClick={() => {
          dispatch(increment())
        }}>Inc</button>
        <span>{count}</span>
        <button onClick={() => {
          dispatch(decrement())
        }}>Dec</button>
      </div>
    </>
  );
}

export default App;

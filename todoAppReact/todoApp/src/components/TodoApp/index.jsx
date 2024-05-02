import React from 'react'
import reducer from '../Reducers/reducer'
import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {

const [state, dispatch] = useReducer(reducer,{
  data: [],
  value: ""
})

  return (
    <div>
      <input type="text" value={state.value} onChange={(e) => {
        dispatch({type: "SET_INPUT_VALUE", value:e.target.value})
      }}/>
      <button onClick={() => {
        dispatch({
          type: "SET_DATA",
          data: state.value
        })

        console.log(state.value)
      }}>Add</button>

      <ul>
        {state.data.map(elem => {
          return <li key={uuidv4()}>{elem.name}</li> 
        })}
      </ul>
    </div>
  )
}

export default TodoApp
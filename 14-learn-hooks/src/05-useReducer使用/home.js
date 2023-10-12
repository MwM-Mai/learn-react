import React, { useReducer, useState } from 'react'

function reducer(state, actions) {
  switch (actions.type) {
    case "increment":
      return { ...state, count: state.count + 1 }
    case "decrement":
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export default function Home() {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>Home当前计数: {state.count}</h2>
      <button onClick={e => dispatch({ type: "increment" })}>+1</button>
      <button onClick={e => dispatch({ type: "decrement" })}>-1</button>
    </div>
  )
}

import React, { useState } from 'react'

export default function CounterHooks() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
    </div>
  )
}

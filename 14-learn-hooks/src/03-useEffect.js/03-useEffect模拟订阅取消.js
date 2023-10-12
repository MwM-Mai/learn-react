import React, { useEffect, useState } from 'react'

export default function EffectHookCancelDemo() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("订阅一些事件");

    return (() => {
      console.log("取消事件订阅");
    })
  }, [])

  return (
    <div>
      <h2>EffectHookCancelDemo</h2>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

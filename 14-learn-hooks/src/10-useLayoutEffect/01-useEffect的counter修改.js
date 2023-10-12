import React, { useEffect, useState } from 'react'

export default function EffectCounterDemo() {

  const [couter, setCounter] = useState(10)

  useEffect(() => {
    if (couter === 0) {
      setCounter(Math.random() + 200)
    }
  }, [couter])

  return (
    <div>
      <h2>数字: {couter}</h2>
      <button onClick={e => setCounter(0)}>修改数字</button>
    </div>
  )
}

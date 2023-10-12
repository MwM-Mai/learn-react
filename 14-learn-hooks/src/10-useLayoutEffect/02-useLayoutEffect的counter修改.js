import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function LayoutEffectCounterDemo() {

  const [couter, setCounter] = useState(10)

  useLayoutEffect(() => {
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

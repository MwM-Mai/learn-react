import React, { useMemo, useState } from 'react'

function calcNumber(count) {
  let total = 0
  console.log("calcNumber重新计算");
  for (let i = 1; i <= count; i++) {
    total += i
  }

  return total
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)

  // const total = calcNumber(count)
  const total = useMemo(() => {
    return calcNumber(count)
  }, [count])

  return (
    <div>
      <h2>MemoHookDemo01</h2>
      <h2>计算数字的和: {total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow(!show)}>show切换</button>
    </div >
  )
}

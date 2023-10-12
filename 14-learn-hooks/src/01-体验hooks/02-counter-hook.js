import React, { useState } from 'react'

export default function CounterFn(prosp) {
  // hook useState本身是一个函数 返回一个数组 [state, setState]
  // 参数： 作用是给创建出来的状态一个默认值
  const counterArr = useState(0)
  const couter = counterArr[0]
  console.log(counterArr);
  const setState = counterArr[1]


  return (
    <div>
      <h2>当前计数: {couter}</h2>
      <button onClick={e => setState(couter + 1)}>+1</button>
      <button onClick={e => setState(couter - 1)}> -1</button>
    </div >
  )
}

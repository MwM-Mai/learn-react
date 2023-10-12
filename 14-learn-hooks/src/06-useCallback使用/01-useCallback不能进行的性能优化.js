// useCallback 的实际目的是为了进行性能优化
// useCallback 会返回一个函数memoized(记忆的)值
// 在依赖不变的情况下(第二个参数为空数组), 多次定义的时候, 返回的值相同

import React, { useCallback, useState } from 'react'

export default function CallbackHookDemo01() {

  const [count, setCount] = useState(0)

  const increment1 = () => {
    console.log("执行increment1函数");
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log("执行increment2函数");
    // 如果第二个参数是空数组 ,那么会形成一个闭包 count 一直都是指向外部 count 初始化的值 0 
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h2>CallbackHookDemo01</h2>
      <h2>{count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+2</button>
    </div>
  )
}

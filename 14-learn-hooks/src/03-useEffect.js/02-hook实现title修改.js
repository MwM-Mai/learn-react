import React, { useEffect, useState } from 'react'

export default function TitleHook(props) {
  const [counter, setCounter] = useState(0)

  // useEffect()
  // 参数一: 回调函数 等到jsx 渲染到DOM 会执行这个回调函数; 返回一个函数 组件发生更新或者卸载会执行返回的函数 
  // 参数二: 数组 添加参数二 可以在 修改数据 更新 DOM 的时候不会执行 参数一 的返回函数 
  // 二.1 数组里面可以 写 useState的state, 可以指定哪个状态DOM发生更新时时调用useEffect() 比如[counter]
  useEffect(() => {
    document.title = counter

    return () => {
      console.log("组件发生更新或者卸载");
    }
  })

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

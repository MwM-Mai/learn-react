// useCallback 的实际目的是为了进行性能优化
// useCallback 会返回一个函数memoized(记忆的)值
// 在依赖不变的情况下(第二个参数为空数组), 多次定义的时候, 返回的值相同

// 使用场景: 将一个组件中的函数, 传递给子元素进行使用时, 使用useCAllback对函数处理

import React, { memo, useCallback, useState } from 'react'

const HYButton = memo((props) => {
  console.log(props.title, "HYButton重新渲染");
  return <button onClick={e => props.increment()}>HYButton+1</button>
})

export default function CallbackHookDemo02() {
  console.log("CallbackHookDemo02重新渲染");

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

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
      <HYButton title="btn1" increment={increment1} />
      <HYButton title="btn2" increment={increment2} />

      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}

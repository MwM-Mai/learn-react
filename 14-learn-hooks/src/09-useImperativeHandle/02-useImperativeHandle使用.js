import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// useImperativeHandle 可以控制父组件通过ref 来调用哪些方法之类的 不希望子组件暴露太多东西给父组件

const HYInput = forwardRef((props, ref) => {

  const inputRef = useRef()

  // 参数1: ref 参数2: 回调函数 返回一个对象
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log('useImperativeHandle中的回调函数返回对象的focus方法');
      inputRef.current.focus()
    }
  }), [inputRef])

  return <input ref={inputRef} type="text" />
})


export default function ImperativeHandleHook() {
  const inputRef = useRef()

  return (
    <div>
      <HYInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}

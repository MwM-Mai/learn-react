import React, { useEffect, useState } from 'react'

export default function MultiEffectHookDome() {
  const [counter, setCounter] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    console.log("修改DOM");
  }, [counter])

  useEffect(() => {
    console.log("订阅事件");
  }, [])

  useEffect(() => {
    console.log("网路请求");
  }, [])

  return (
    <div>
      <h2>MultiEffectHookDome</h2>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <h2>{isLogin ? "coderwhy" : "未登录"}</h2>
      <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  )
}

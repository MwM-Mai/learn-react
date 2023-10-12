import React, { memo, useMemo, useState } from 'react'

const HYInfo = memo((props) => {
  console.log("HYInfo重新渲染");
  return (
    <h2>名字: {props.info.name} 年龄: {props.info.age}</h2>
  )
})

export default function MemoHookDemo02() {
  console.log("MemoHookDemo02重新渲染");
  // const [info, setInfo] = useState({ name: "coderwhy", age: "18" })
  // const info = { name: "coderwhy", age: "18" }
  const info = useMemo(() => {
    return { name: "coderwhy", age: "18" }
  }, [])


  const [show, setShow] = useState(true)


  return (
    <div>
      <HYInfo info={info} />
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}

import React, { PureComponent, useRef } from 'react'

class TestCpn extends PureComponent {
  render() {
    return (
      <div>
        <h2>TestCpm</h2>
      </div>
    )
  }
}

function TextCpn2(props) {
  return <h2>TextCpn2</h2>
}

export default function RefHookDome01() {
  const titleRef = useRef()
  const inpRef = useRef()
  const TestCpnRef = useRef()
  const TestCpn2Ref = useRef()

  const changeDom = () => {
    titleRef.current.innerHTML = "Hello World"
    inpRef.current.focus()
    console.log(TestCpnRef.current);
    console.log(TestCpn2Ref.current);
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDome01</h2>
      <input type="text" ref={inpRef} />
      <TestCpn ref={TestCpnRef} />
      <TextCpn2 ref={TestCpn2Ref} />

      <button onClick={e => changeDom()}>修改DOM</button>
    </div>
  )
}

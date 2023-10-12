import React, { useState } from 'react'

export default function MultiHooksState() {
  const [counter, setCounter] = useState(0)
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(['coderwhy', 'pink', 'james'])

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <h2>我的年龄: {age}</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

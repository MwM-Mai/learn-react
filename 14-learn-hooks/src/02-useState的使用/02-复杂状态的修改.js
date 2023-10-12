import React, { useState } from 'react'

export default function ComplexHooksState() {
  const [friends, setFriends] = useState(['coderwhy', 'pink', 'james'])


  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setFriends([...friends, 'kobe'])}>添加好友</button>
    </div>
  )
}

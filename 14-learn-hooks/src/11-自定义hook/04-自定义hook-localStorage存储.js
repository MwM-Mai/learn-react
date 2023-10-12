import React from 'react'
import useLocalStorage from '../hook/use-loaclStorage'

export default function CustomDataStoreHook() {

  const [name, setName] = useLocalStorage("name")

  return (
    <div>
      <h2>CustomDataStoreHook: {name}</h2>
      <button onClick={e => setName("james")}>设置name</button>
    </div>
  )
}

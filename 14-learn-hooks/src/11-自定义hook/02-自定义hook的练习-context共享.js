import React from 'react'
import useUserContext from '../hook/user-hook';

export default function CustomContextShareHook() {
  const [user, token] = useUserContext()

  console.log(user, token);

  return (
    <div>
      <h2>CustomContextShareHook</h2>
    </div>
  )
}

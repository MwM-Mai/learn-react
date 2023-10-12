import React, { useEffect } from 'react'


const Home = (props) => {
  useLogginLife("Home")

  return <h2>Home</h2>
}

const Profile = (props) => {
  useLogginLife("Profile")

  return <h2>Profile</h2>
}

export default function CustomLifeHookDemo01() {
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home />
      <Profile />
    </div>
  )
}

// 自定义组件 函数名必须是 use开头
function useLogginLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建出来了`);
    return () => {
      console.log(`${name}组件被销毁了`);

    }
  }, [name])
}

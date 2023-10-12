import React, { PureComponent, StrictMode } from 'react'

// StrictMode 严格模式 (检查哪些)
// 1. 检查不安全的生命周期函数
// 2. 使用过时的ref API

class Home extends PureComponent {
  constructor (props) {
    super(props)

    console.log("Home constructor");
  }

  UNSAFE_componentWillMount() {
    console.log("Home componentWillMount");
  }

  render() {
    return (
      <div ref="title">
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  constructor (props) {
    super(props)

    console.log("Profile constructor");
  }

  UNSAFE_componentWillMount() {
    console.log("Profile componentWillMount");
  }

  render() {
    return (
      <div>
        Profile
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    )
  }
}

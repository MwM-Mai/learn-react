import React, { PureComponent } from 'react'

class Home extends PureComponent {

  constructor (props) {
    super(props)

    this.beginTime = 0
    this.endTime = 0
  }

  // 即将渲染的时间 beginTime
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now()
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }

  // 渲染完成的时间 endTime
  componentDidMount() {
    this.endTime = Date.now()
    console.log(`Home 渲染时间 ${this.endTime - this.beginTime}`);
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0,
      message: "Hello Wrold"
    }
  }

  render() {
    console.log('App render函数被调用');
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  // 这个生命周期函数默认返回 true 表示是否更新组件
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true
    }

    return false
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeText() {
    this.setState({
      message: '你好啊, 李银河'
    })
  }
}

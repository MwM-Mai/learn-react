import React, { Component } from 'react'

export default class App extends Component {
  constructor (proos) {
    super(proos)

    this.state = {
      message: 'Hello Wrold',
      name: 'coderwhy'
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.setState({
      message: '你好啊, 李银河'
    })

    // Object.assign() 方法是数据合并 第三个参数会覆盖 第二个参数相同属性 组成第一个参数的新数组
    // Object.assign({}, this.state, { message: '你好啊, 李银河' })
  }
}

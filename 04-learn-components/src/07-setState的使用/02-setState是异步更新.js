import React, { Component } from 'react'

export default class App extends Component {
  constructor (proos) {
    super(proos)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  componentDidUpdate() {
    console.log('调用componentDidUpdate生命周期函数获取异步更新后的state', this.state.counter);
  }

  increment() {
    // setState是异步更新的 this.setState(更新的state, callback)
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    console.log('setState是异步更新', this.state.counter);
    // 总结：
    // 1. 设计setState为异步是为了提高性能，如果每次嗲用setState都更新一次，那么会频繁调用，界面重新刷新，这样子效率低
    //    最好的办法就是批量获取得到多个更新，之后进行批量更新
    // 2. 如果state同步更新，但是还没有执行render函数(返回的React.element慢)，那么state和props不能保持同步，会产生很多问题


    // 获取异步更新后的数据
    // 方式一: setState 的第二个参数 是一个回调函数 会等到state更新后再调用
    this.setState({
      counter: this.state.counter + 1
    }, () => {
      console.log('异步更新后的state', this.state.counter);
    })
    // 方法二：使用生命周期函数 componentDidUpdate
  }
}

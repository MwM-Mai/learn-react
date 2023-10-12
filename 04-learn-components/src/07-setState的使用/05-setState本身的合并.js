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

  increment() {
    // 1. setState本身被合并
    // setState在内部会进行合并 虽然写了三次相同的 但是最后会合并成一个对象
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // 2. setState合并时进行累加 把第一个参数写成函数 函数里面有两个参数 第一个是上一个state， 第二个是props
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
}

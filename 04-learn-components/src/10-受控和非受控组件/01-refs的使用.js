import React, { PureComponent, createRef } from 'react'

class Counter extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.titleRef = createRef()
    this.titleEl = null

    this.counterRef = createRef()
  }

  render() {
    return (
      <div>
        {/* ref='字符串/对象/函数' */}

        {/* 使用方式一: 字符串形式 */}
        <h2 ref='titleRef'>Hello Wrold</h2>
        <button onClick={e => { this.changeText() }}>改变文本</button>

        {/* 使用方式二: 对象方式(目前React推荐的方式) */}
        <h2 ref={this.titleRef}>Hello Wrold</h2>
        <Counter ref={this.counterRef} />
        <button onClick={e => this.AppBtnClick()}>App按钮</button>

        {/* 使用方式三: 回调函数 */}
        <h2 ref={(arg) => this.titleEl = arg}>Hello Wrold</h2>
        <hr />
      </div>
    )
  }

  changeText() {
    // 使用方式一
    this.refs.titleRef.innerHTML = 'Hello Coderwhy'

    // 使用方式二
    this.titleRef.current.innerHTML = 'Hello Javascipt'

    // 使用方式三
    this.titleEl.innerHTML = 'Hello TypeScipt'

  }

  AppBtnClick() {
    this.counterRef.current.increment()
  }
}
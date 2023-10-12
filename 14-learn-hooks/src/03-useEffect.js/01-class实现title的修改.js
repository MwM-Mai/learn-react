import React, { PureComponent } from 'react'

export default class TitleClass extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    document.title = this.state.counter
    console.log("订阅一些事件");
  }

  componentDidUpdate() {
    document.title = this.state.counter
  }

  componentWillUnmount() {
    console.log("取消事件订阅");
  }


  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.setState({ counter: this.state.counter + 1 })}>+1</button>
      </div >
    )
  }
}

import React, { Component } from 'react'

class CounterBtn extends Component {
  render() {
    const { btnClick } = this.props

    return (
      <div>
        <button onClick={btnClick}>+1</button>
      </div>
    )
  }
}

export default class App extends Component {
  constructor (props) {
    super(props)


    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => { this.increment() }}>+1</button>
        <CounterBtn btnClick={e => { this.increment() }} />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

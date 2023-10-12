import React, { Component } from 'react'

export default class App extends Component {
  constructor (proos) {
    super(proos)

    this.state = {
      counter: 0,
      message: 'Hello Wrold'
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button id='btn'>改变文本</button>
      </div>
    )
  }

  // componentDidMount() {
  //   document.getElementById('btn').addEventListener('click', () => {
  //     this.setState({
  //       message: '你好啊, 李银河'
  //     })
  //     console.log(this.state.message);
  //   })
  // }
}

import React, { Component } from 'react'

class Cpn extends Component {

  render() {
    return <h2>我是Cpn组件</h2>
  }

  componentWillUnmount() {
    console.log('执行了Cpn组件的componentWillUnmount方法');

  }
}

export default class App extends Component {

  constructor () {
    super()

    this.state = {
      counter: 0,
      isShow: true
    }

    console.log('执行了组件的constructor方法');
  }

  render() {
    console.log('执行了组件的render函数');

    return (
      <div>
        我是App组件
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => { this.increment() }}>+1</button>
        <hr />
        <button onClick={e => { this.changeCpn() }}>切换</button>
        {this.state.isShow && <Cpn />}
      </div>
    )
  }

  componentDidMount() {
    console.log('执行了组件的componentDidMount方法');
  }

  componentDidUpdate(previousProps, prevState, snapshot) {
    // previousProps: 更新之前的props， prevState: 更新之前的state,  snapshot: 是生命周期函数 getSnapshotBeforeUpdate() 返回的变量
    console.log('执行了组件的componentDidUpdate方法');

  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeCpn() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

}

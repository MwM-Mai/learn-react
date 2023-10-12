import React, { PureComponent } from 'react'

import store from '@/store'
import {
  addAction
} from '@/store/actionCreators'

export default class home extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    // 订阅 store 属性
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.addNumber(1)}>+1</button>
        <button onClick={e => this.addNumber(5)}>+5</button>
      </div>
    )
  }

  addNumber(num) {
    store.dispatch(addAction(num))
  }
}

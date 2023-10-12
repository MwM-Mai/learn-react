import React, { PureComponent } from 'react'

import store from '@/store'
import {
  subAction
} from '@/store/actionCreators'

export default class about extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
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
        <h1>About</h1>
        <h2>当前计数: {store.getState().counter}</h2>
        <button onClick={e => this.subNumber(1)}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div>
    )
  }

  subNumber(num) {
    store.dispatch(subAction(num))
  }
}

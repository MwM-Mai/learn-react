import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0,
      currentTitle: "新款"
    }
  }

  render() {
    const { currentTitle } = this.state

    return (
      <div>
        <TabControl titles={['新款', '精选', '推荐']} itemClick={(title) => { this.itemClick(title) }} />
        <h2>{currentTitle}</h2>
      </div>
    )
  }

  itemClick(title) {
    this.setState({
      currentTitle: title
    })
  }
}

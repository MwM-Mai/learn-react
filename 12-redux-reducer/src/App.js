import React, { PureComponent } from 'react'

// import About from '@/pages/about4-redux-thunk的使用.js'
import About from '@/pages/about5-redux-saga的使用.js'
import Home from '@/pages/home3.js'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <hr />
        <About />
      </div>
    )
  }
}

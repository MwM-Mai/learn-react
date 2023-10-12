import React, { Component } from 'react'

import NavBar from './NavBar'
import NavBar2 from './NavBar2'

import './style.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>abc</span>
          <span>cba</span>
          <span>nba</span>
        </NavBar>
        <NavBar2 leftSlot={<span>abc</span>}
          centerSlot={<span>cba</span>}
          rightSlot={<span>nba</span>} />
      </div>
    )
  }
}

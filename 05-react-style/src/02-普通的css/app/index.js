import React, { PureComponent } from 'react'

import './style.css'

import Home from '../home';
import Profile from '../profile';

export default class App extends PureComponent {
  render() {
    return (
      <div id='app'>
        <span className='title'>App</span>
        <Home />
        <Profile />
      </div>
    )
  }
}

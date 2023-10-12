import React, { PureComponent } from 'react'

import appStyle from './style.module.css'

import Home from '../home';
import Profile from '../profile';

export default class App extends PureComponent {
  render() {
    return (
      <div id='app'>
        <span className={appStyle.title}>App</span>
        <Home />
        <Profile />
      </div>
    )
  }
}

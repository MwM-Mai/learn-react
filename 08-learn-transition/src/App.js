import React, { PureComponent } from 'react'

import CSSTransitionDome from './transition/CSSTransitionDome'
import SwitchTransitionDome from './transition/SwitchTransitionDome'
import TransitionGroupDome from './transition/TransitionGroupDome'

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ "textAlign": "center", "padding": "30px" }}>
        {/* <CSSTransitionDome /> */}
        {/* <SwitchTransitionDome /> */}
        <TransitionGroupDome />
      </div>
    )
  }
}

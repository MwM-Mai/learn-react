import React, { PureComponent } from 'react'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './SwitchTransitionDome.css'

export default class switchTransitionDome extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isOn: true
    }
  }

  render() {
    const { isOn } = this.state

    return (
      <div>
        { /* 使用这个组件必须包裹 CSSTransition */}
        <SwitchTransition mode="out-in">
          <CSSTransition key={isOn ? "on" : "off"}
            classNames="btn"
            timeout={1000}>
            <button onClick={e => { this.setState({ isOn: !isOn }) }}>
              {isOn ? "on" : "off"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
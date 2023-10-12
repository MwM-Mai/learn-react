import React, { PureComponent } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import "./TransitionGroup.css"

export default class TransitionGroupDome extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      names: ["coderwhy", "kobe", "lilei"]
    }
  }

  render() {
    return (
      // 必须包裹在 TransitionGroup 组件里面 添加名字才有动画
      <TransitionGroup>
        {
          this.state.names.map((item, index) => {
            return (
              <CSSTransition key={index}
                timeout={500}
                classNames="item">
                <div>
                  {item}
                  <button onClick={e => this.removeItem(index)}>-</button>
                </div>
              </CSSTransition>
            )
          })
        }
        <button onClick={e => { this.addName() }}>+name</button>
      </TransitionGroup>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, "james"]
    })
  }

  removeItem(i) {
    this.setState({
      names: this.state.names.filter((item, indey) => {
        if (i !== indey) {
          return item
        }
      })
    })
  }
}

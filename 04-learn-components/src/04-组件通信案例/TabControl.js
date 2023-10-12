import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default class TabControl extends Component {
  static propTypes = {
    titles: PropTypes.array

  }

  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const { titles } = this.props
    const { currentIndex } = this.state

    return (
      <div className='tab-control'>
        {
          titles.map((item, index) => {
            return (
              <div key={index} className={'tab-item ' + (currentIndex === index ? 'active' : '')}
                onClick={e => { this.itemClick(index, item) }}>
                <span className=''>
                  {item}
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }

  itemClick(i, title) {
    const { itemClick } = this.props

    this.setState({
      currentIndex: i
    })
    itemClick(title)
  }
}

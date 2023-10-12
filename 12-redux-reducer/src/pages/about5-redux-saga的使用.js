import React, { PureComponent } from 'react'

// import { connect } from '@/utils/connect'
import { connect } from 'react-redux'

import {
  fetchHomeMultidataAction
} from '@/store/home/actionCreators'

import { subAction } from '../store/counter/actionCreators'

class About extends PureComponent {

  componentDidMount() {
    this.props.getHomeMultidata()
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={e => this.props.subNumber(1)}>-1</button>
        <button onClick={e => this.props.subNumber(5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counterInfo.counter
})

const mapDispatchToProps = dispatch => ({
  subNumber: (num) => {
    dispatch(subAction(num))
  },
  getHomeMultidata: () => {
    dispatch(fetchHomeMultidataAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)

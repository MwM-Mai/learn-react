import React from 'react'

// import store from '@/store'
import {
  addAction
} from '@/store/actionCreators'

import { connect } from '@/utils/connect'

function Home(props) {

  return (
    <div>
      <h1>Home</h1>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={e => props.addNumber(1)}>+1</button>
      <button onClick={e => props.addNumber(5)}>+5</button>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    counter: state.homeInfo.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNumber: (num) => {
      dispatch(addAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React from 'react'

// import store from '@/store'
import {
  addAction
} from '@/store/actionCreators'

// import { connect } from '@/utils/connect'
import { connect } from 'react-redux'

function Home(props) {

  return (
    <div>
      <h1>Home</h1>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={e => props.addNumber(1)}>+1</button>
      <button onClick={e => props.addNumber(5)}>+5</button>
      {/* <hr /> */}
      <h1>banners</h1>
      <ul>
        {
          props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>recommends</h1>
      <ul>
        {
          props.recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
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

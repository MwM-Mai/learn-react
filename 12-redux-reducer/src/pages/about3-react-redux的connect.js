import React, { PureComponent } from 'react'

// import { connect } from '@/utils/connect'
import { connect } from 'react-redux'

import {
  subAction,
  changeBannerAction,
  changeRecommendAction
} from '@/store/actionCreators'

import axios from 'axios'

class About extends PureComponent {

  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      const data = res.data.data
      console.log("轮播图:", data.banner.list);
      console.log("推荐:", data.recommend.list);
      this.props.changeBanners(data.banner.list)
      this.props.changeRecommends(data.recommend.list)
    })
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
  changeBanners: (banners) => {
    dispatch(changeBannerAction(banners))
  },
  changeRecommends: (recommentds) => {
    dispatch(changeRecommendAction(recommentds))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)

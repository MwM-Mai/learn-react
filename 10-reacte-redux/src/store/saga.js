// export default 生成器函数

// takeEvery(类型， 生成器函数(写逻辑代码))
import { takeEvery, put, all } from 'redux-saga/effects'

import axios from 'axios'

import { FETCH_HOME_MULTIDATA } from './constants'
import { changeBannerAction, changeRecommendAction } from './actionCreators'

// 2.
function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
  console.log(res);

  const banners = res.data.data.banner.list
  const recommend = res.data.data.recommend.list

  // yield put(changeBannerAction(banners))
  // yield put(changeRecommendAction(recommend))
  yield all([
    yield put(changeBannerAction(banners)),
    yield put(changeRecommendAction(recommend))
  ])
}

// 1.
function* mySaga() {
  // takeEvery takeLatest 区别
  // takeEvery 依次只能监听一个对应的action(只监听最后一个对应的action)
  // takeLatest 每个都会被执行
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
}


export default mySaga
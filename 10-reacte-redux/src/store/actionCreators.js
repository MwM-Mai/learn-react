import axios from 'axios'

import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCRETMENT,
  DECRETMENT,
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA
} from './constants.js'

export const addAction = num => ({
  type: ADD_NUMBER,
  num
})

export const subAction = num => ({
  type: SUB_NUMBER,
  num
})

export const incAction = () => ({
  type: INCRETMENT
})

export const decAction = () => ({
  type: DECRETMENT
})

export const changeBannerAction = (banners) => ({
  type: CHANGE_BANNER,
  banners
})

export const changeRecommendAction = recommends => ({
  type: CHANGE_RECOMMEND,
  recommends
})


// 利用redux-thunk 定义actions函数 到中间件 middleware
export const getHomeMultidataAction = (dispatch, getState) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }).then(res => {
    const data = res.data.data
    console.log("轮播图:", data.banner.list);
    console.log("推荐:", data.recommend.list);
    dispatch(changeBannerAction(data.banner.list))
    dispatch(changeRecommendAction(data.recommend.list))
  })
  console.log("action函数中", dispatch);
}


// redux-saga 拦截的action

export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}
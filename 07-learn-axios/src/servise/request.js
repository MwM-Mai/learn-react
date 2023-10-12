import axios from 'axios';

import { BASE_URL, TIME_OUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

})



instance.interceptors.request.use(config => {
  return config
}, err => {

})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  switch (err && err.response.status) {
    default:
      console.log("其他错误信息");
      break
    case 400:
      console.log("请求出错");
      break
    case 401:
      console.log("未授权访问");
      break
  }
})

export default instance 
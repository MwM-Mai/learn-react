import React, { PureComponent } from 'react'

import axios from 'axios'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

  }

  async componentDidMount() {

    // // axios发送基本的网络请求
    // axios({
    //   url: "/get",
    //   params: {
    //     name: "why",
    //     age: "18"
    //   },
    //   method: "GET"
    // }).then(res => {
    //   console.log("GET", res);
    // })

    // try {
    //   const result = await axios({
    //     url: "/post",
    //     data: {
    //       name: "why",
    //       age: "18"
    //     },
    //     method: "POST"
    //   })
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }

    // // axios.all
    // const request1 = axios({
    //   url: "/get",
    //   params: {
    //     name: "kobe",
    //     age: "40"
    //   }
    // })

    // const request2 = axios({
    //   url: "/post",
    //   data: {
    //     name: "why",
    //     age: "18"
    //   },
    //   method: "POST"
    // })

    // axios.all([request1, request2]).then(res => {
    //   console.log(res);
    // }).catch(err => console.log(err))



    // // 创建实例
    // const instance = axios.create({
    //   baseURL: 'http://coderwhy',
    //   timeout: 2000,
    //   headers: {

    //   }
    // })

    axios.interceptors.request.use(config => {

      return config
    }, err => {

    })

    axios.interceptors.response.use(res => {
      return res.data
    }, err => {
      switch (err && err.response.status) {
        case 400:
          console.log('请求出错');
          break
        case 401:
          console.log('未授权访问');
          break
        default:
          console.log("其他错误信息");
          break
      }
      return err
    })

    axios.get("http://httpbin.org/get", {
      name: "why",
      age: 18
    })
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

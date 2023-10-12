import axios from 'axios'

// 导入显示加载进度条的第三方库 在请求头中使用
// import NProgress from 'nprogress'
// 导入css
// 直接在 cdn 加载 实现项目发布优化
// import 'nprogress/nprogress.css'

export function request(config) {
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://codercba.com:9002',
    timeout: 5000
  })

  // 2. axios 拦截器
  // 2.1 请求拦截 
  // 在每次请求 request  展示进度条 NProgress.start();
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 显示进度条
    // NProgress.start();

    config.headers.Authorization = window.sessionStorage.getItem('token')
    // 必须return config
    return config
  })   //  拦截请求 us 两个参数 都是函数 函数本身也有参数

  // 2.2 响应拦截的作用
  // 在每次响应 response 隐藏进度条 NProgress.done(); 
  instance.interceptors.response.use(res => {
    // 隐藏进度条
    // NProgress.done();
    return res.data
  })  //  拦截响应 也是两个参数

  // 3. 发送真正的网络请求
  return instance(config)   // 源码表示 最终的返回值是 Promise
}
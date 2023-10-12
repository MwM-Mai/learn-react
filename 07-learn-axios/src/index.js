import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import axios from 'axios'

// 默认配置
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 5000

// headers.common 通用的请求头
axios.defaults.headers.common["token"] = 'asdasdasd'

// 如果需要在某个请求中修改内容类型，则需要在那个请求中修改
axios.defaults.headers.post["Content-Type"] = "application/json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


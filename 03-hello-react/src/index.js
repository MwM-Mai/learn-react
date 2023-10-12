// React 代码
import React from "react";
import { createRoot } from "react-dom/client";
import App from './App'

// react 18 不支持 使用ReactDOM.render 方法 用 ceactRoot() 替代
// ReactDOM.render(<h2>Hello World</h2>, document.getElementById('root'))

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App></App>);

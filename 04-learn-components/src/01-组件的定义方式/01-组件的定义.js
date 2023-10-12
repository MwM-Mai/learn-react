import React, { Component } from 'react';

// 类组件

// export default class App extends Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       message: '你好啊， 李银河'
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>Hello Wrold</h2>
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }


// 函数式组件
/**
 * 函数式组件的特点
 *  1. 没有 this 对象
 *  2. 没有内部状态
 */
export default function App() {
  return (
    <div>我是一个function组件: App组件</div>
  )
}
import React, { Component } from 'react'

// 1. 创建Context对象
const userContext = React.createContext({
  nickname: 'aaa',
  level: -1
})

// 3. 共享后接收数据 有两种方法
// 方法一: 必须是类组件 不能写成函数式组件

// class ProfileHeader extends Component {
//   render() {
//     console.log(this.context);
//     return (
//       <div>
//         <h2>用户昵称: {this.context.nickname}</h2>
//         <h2>用户等级: {this.context.level}</h2>
//       </div>
//     )
//   }
// }
// ProfileHeader.contextType = userContext

// 方法二: 函数式组件
function ProfileHeader() {
  return (
    <userContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户昵称: {value.nickname}</h2>
              <h2>用户等级: {value.level}</h2>
            </div>
          )
        }
      }
    </userContext.Consumer>
  )
}

function Profile(props) {

  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nickname: 'james',
      level: 99
    }
  }

  render() {

    return (
      <div>
        {/* {2. userCOntext对象中的组件 Provider 将需要跨组件通信的组件放入到 Provider 组件中 将需要共享数据写入到属性 value 中} */}
        <userContext.Provider value={this.state}>
          <Profile />
        </userContext.Provider>
      </div>
    )
  }
}

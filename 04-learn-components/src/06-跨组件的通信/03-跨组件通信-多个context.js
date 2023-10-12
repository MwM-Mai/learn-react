import React, { Component } from 'react'

// 1. 创建Context对象
const userContext = React.createContext({
  nickname: 'aaa',
  level: -1
})

const ThemContext = React.createContext({
  color: "black"
})

// 3. 共享后接收数据
function ProfileHeader() {
  return (
    <userContext.Consumer>
      {
        value => {
          return (
            <ThemContext.Consumer>
              {
                ThemValue => {
                  return (
                    <div>
                      <div>
                        <h2 style={{ color: ThemValue.color }}>用户昵称: {value.nickname}</h2>
                        <h2>用户等级: {value.level}</h2>
                        <h2>颜色: {ThemValue.color}</h2>
                      </div>
                    </div>
                  )
                }
              }
            </ThemContext.Consumer>
          )
        }
      }
    </userContext.Consumer >
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
          <ThemContext.Provider value={{ color: "pink" }}>
            <Profile />
          </ThemContext.Provider>
        </userContext.Provider>
      </div>
    )
  }
}

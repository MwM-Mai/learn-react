import React, { PureComponent, createContext } from 'react'

// 定义高阶组件

function withUser(WrappedComponent) {
  return props => {
    return (
      <userContext.Consumer>
        {
          user => {
            return (
              <div>
                <WrappedComponent {...props} {...user} />
              </div>
            )
          }
        }
      </userContext.Consumer>
    )
  }
}


// 创建context
const userContext = createContext({
  nickname: "默认",
  level: "-1",
  region: "中国"
})

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
      </div>
    )
  }
}

// Home.contextType = userContext

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
      </div>
    )
  }
}

// About.contextType = userContext

const UserHome = withUser(Home)

class App extends PureComponent {
  render() {
    return (
      <div>
        App:
        <userContext.Provider value={{ nickname: "why", level: '18', region: "中国" }}>
          <UserHome />
          <About />
        </userContext.Provider>
      </div>
    )
  }
}

export default App

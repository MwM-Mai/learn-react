import React, { PureComponent } from 'react'

// 定义高阶组件
function enhanceRegionProps(WrappedComponent) {
  return props => {
    return (
      <WrappedComponent {...props} region="中国" />
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
      </div>
    )
  }
}

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)


class App extends PureComponent {
  render() {
    return (
      <div>
        App:
        <EnhanceHome nickname="coderwhy" level={90} />
        <EnhanceAbout nickname="Jemas" level={99} />
      </div>
    )
  }
}

export default App

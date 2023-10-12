import React, { PureComponent } from 'react'

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    // 即将渲染的时间 beginTime
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }

    // 渲染完成的时间 endTime
    componentDidMount() {
      this.endTime = Date.now()
      console.log(`${WrappedComponent.name} 渲染时间 ${this.endTime - this.beginTime}`);
    }
  }
}

class Home extends PureComponent {

  constructor (props) {
    super(props)

    this.beginTime = 0
    this.endTime = 0
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

const TimeHome = withRenderTime(Home)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome />
        <About />
      </div>
    )
  }
}

import React, { PureComponent } from 'react'

import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent {

  componentDidMount() {
    eventBus.addListener('sayHello', this.handleSayHelloLinstener)
  }

  componentWillUnmount() {
    eventBus.removeListener('sayHello', this.handleSayHelloLinstener)
  }

  handleSayHelloLinstener(num, message) {
    console.log(num, message);
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emmitEvent()}>点击了profile按钮</button>
      </div>
    )
  }

  emmitEvent() {
    eventBus.emit('sayHello', 'Hello Home', 123)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}

import React, { Component } from 'react'

// header
class Header extends Component {
  render() {
    console.log('调用Header组件');
    return (
      <div>
        <h2>我是Header组件</h2>
      </div>
    )
  }
}

// main
class Banner extends Component {
  render() {
    console.log('调用Banner组件');
    return (
      <div>
        <h3>我是Banner组件</h3>
      </div>
    )
  }
}

class ProducList extends Component {
  render() {
    console.log('调用ProducList组件');
    return (
      <div>
        <ul>
          <li>商品列表1</li>
          <li>商品列表2</li>
          <li>商品列表3</li>
          <li>商品列表4</li>
          <li>商品列表5</li>
        </ul>
      </div>
    )
  }
}


class Main extends Component {
  render() {
    console.log('调用Main组件');
    return (
      <div>
        <Banner />
        <ProducList />
      </div>
    )
  }
}

// footer
class Footer extends Component {
  render() {
    console.log('调用Footer组件');
    return (
      <div>
        <h2>我是Footer组件</h2>
      </div>
    )
  }
}

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header />
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.counter + 1
    })
  }
}

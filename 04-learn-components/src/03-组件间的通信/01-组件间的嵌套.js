import React, { Component } from 'react'

// header
function Header() {
  return <h2>我是Header组件</h2>
}

// main
function Banner() {
  return <h3>我是Banner组件</h3>
}

function ProducList() {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}

function Main() {
  return (
    <div>
      <Banner />
      <ProducList />
    </div>
  )
}

// footer
function Footer() {
  return <h2>我是Footer组件</h2>
}

export default class App extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}

import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

const Profile = forwardRef(function (props, ref) {

  return (
    <h2 ref={ref}>Profile</h2>
  )
})

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.titleRef = createRef()
    this.homeRef = createRef()
    this.profileRef = createRef()
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello Wrold</h2>
        <Home ref={this.homeRef} />
        <Profile ref={this.profileRef} />
        <button onClick={e => this.printfRef()}>打印ref</button>
      </div>
    )
  }

  printfRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}

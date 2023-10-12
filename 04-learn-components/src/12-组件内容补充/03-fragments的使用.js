import React, { PureComponent, Fragment } from 'react'

// Fragment 类似于 vue template

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0,
      friends: [
        { name: 'why', age: 18 },
        { name: 'lilei', age: 28 },
        { name: 'james', age: 38 },
      ]
    }
  }

  render() {
    return (
      // <Fragment>
      //   <h2>当前计数:{this.state.counter}</h2>
      //   <button onClick={e => this.increment()}>+1</button>
      // </Fragment>

      // 短语法
      <>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <div>
          {
            this.state.friends.map(item => {
              return (
                <Fragment key={item.name}>
                  <div>{item.name}</div>
                  <p>{item.age}</p>
                  <hr />
                </Fragment>
              )
            })
          }
        </div>
      </>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

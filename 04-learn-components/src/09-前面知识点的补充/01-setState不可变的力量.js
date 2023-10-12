import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      friends: [
        { name: '李雷', age: 20 },
        { name: '李银河', age: 18 },
        { name: 'pink', age: 40 },
        { name: '詹姆斯', age: 38 },
      ]
    }
  }

  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.friends !== this.state.friends) {
  //     return true
  //   }

  //   return false
  // }

  render() {
    return (
      <div>
        <h2>好友列表:</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return (
                <li key={index}>
                  <span>姓名: {item.name}, 年龄: {item.age}</span>
                  <button onClick={e => this.incrementAge(index)}>年龄+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.insertData()}>添加数据</button>
      </div>
    )
  }

  insertData() {
    // 1. 在开发中不要这样来做  在shouldComponentUpdate进行性能优化时newState和this.state是相等的
    // const newData = { name: 'tom', agr: 30 }
    // this.state.friends.push(newData)
    // this.setState({
    //   friends: this.state.friends
    // })

    // 2. 推荐方法
    const newFriends = [...this.state.friends]
    newFriends.push({ name: 'tom', agr: 30 })
    this.setState({
      friends: newFriends
    })
  }

  incrementAge(index) {
    const newFriends = [...this.state.friends]
    newFriends[index].age += 1
    this.setState({
      friends: newFriends
    })
  }
}

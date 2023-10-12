import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.username = createRef()
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            {/* 受控组件 */}
            用户: <input type="text" id='username' ref={this.username} />
          </label>
          <input type="submit" value='提交' />
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.username.current.value);
  }
}

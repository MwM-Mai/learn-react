import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      username: ""
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            {/* 受控组件 */}
            用户: <input type="text" id='username' onChange={e => this.handleChange(e)} value={this.state.username} />
          </label>
          <input type="submit" value='提交' />
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      username: e.target.value
    })
  }
}

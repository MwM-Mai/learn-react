import React, { Component } from 'react'

export default class App extends Component {
  constructor (proos) {
    super(proos)

    this.state = {
      movies: ['星际穿越', '盗梦空间']
    }
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {
            this.state.movies.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
        <button onClick={e => this.unshiftMoviesClik()}>添加电影</button>
      </div>
    )
  }

  unshiftMoviesClik() {
    this.setState({
      // movies: this.state.movies.unshift('大话西游') this.state的数据不可能性 不能这样子修改
      movies: ['大话西游', ...this.state.movies]
    })
  }
}

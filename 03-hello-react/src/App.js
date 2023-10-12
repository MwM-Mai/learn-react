// import React from 'react'
// const { Component } = React

import React, { Component } from 'react'



class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }

  add() {

  }

  sub() {

  }
}

export default App
import React, { Component } from 'react'

import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, height } = props
  const { names } = props

  return (
    <div>
      <h2>{name + ' ' + age + ' ' + height}</h2>
      <ul>
        {names.map((item, index) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

// props 类型检验
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
  height: PropTypes.string,
  names: PropTypes.array
}

// props 默认值
ChildCpn.defaultProps = {
  name: 'james',
  age: '38',
  height: '2.08',
  names: ['aaa', 'bbb']
}


class childCpn2 extends Component {
  // es6中的class fields写法 在类添加属性
  static propTypes = {

  }

  static defaultProps = {

  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age="18" height="1.88" names={['abc', 'cba']} />
        <ChildCpn name="Kobe" age="40" height="1.98" names={['nba', 'mba']} />
        <ChildCpn />
      </div>
    )
  }
}
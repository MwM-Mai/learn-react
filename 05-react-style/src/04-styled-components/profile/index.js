import React, { PureComponent } from 'react'
import styled from 'styled-components';

// 特点
// 1. 具有props穿透 input 输入框的属性 styled.input 也可以设置
// 2. 也可以在 styled.input.attrs()函数设置属性
// 3. 传入 state 作为props属性
// 4. 可以继承组件的样式 在 app.js 有示例
// 5. 可以共享样式(设置主题样式) ThemeProvider 在 app.js 有示例 在 home/style.js 运用
const HYInput = styled.input.attrs({
  placeholder: 'coderwhy',
  bColor: 'red'
})`
  background-color: lightblue;
  border-color: ${props => props.bColor};
  color: ${props => props.color};
`

export default class Profile extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      color: 'purple'
    }
  }

  render() {
    return (
      <div className='profile'>
        {/* 3.传入state作为props属性 */}
        <HYInput type="text" color={this.state.color} />
        <h2 >我是profile标题</h2>
        <ul >
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}

import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components';


import Home from '../home';
import Profile from '../profile';

const HYButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: red;
`

// const HYPrimaryButton = styled.button`
//   padding: 10px 20px;
//   border-color: red;
//   color: #fff;
//   background-color: green;
// `

// 可以继承 HYButton 组件的样式
const HYPrimaryButton = styled(HYButton)`
  color: #fff;
  background-color: green;
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ themeColor: "yellow", fontSize: "30px" }}>
        <span >App</span>
        <Home />
        <hr />
        <Profile />
        <HYButton>我是一个普通的按钮</HYButton>
        <HYPrimaryButton>我是一个主要的按钮</HYPrimaryButton>
      </ThemeProvider>
    )
  }
}

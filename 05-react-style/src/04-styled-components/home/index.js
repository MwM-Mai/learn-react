import React, { PureComponent } from 'react'

import {
  HomeWrapper,
  TitleWrapper
} from './style'


export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper >我是home标题</TitleWrapper>
        <div className='banner'>
          <span>轮播图1</span>
          <span className='active'>轮播图2</span>
          <span>轮播图3</span>
          <span>轮播图45</span>
        </div>
      </HomeWrapper>
    )
  }
}

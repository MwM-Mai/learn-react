import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from '@/common/local-data';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

export default memo(function MwMAppHeader() {

  // 业务代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }

  // jsx
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a href="#/" className='logo sprite_01'></a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
          <button className='center'>创作者中心</button>
          <button style={{ "backgroundColor": "#242424", "color": "#FFF", cursor: "pointer" }}>登录</button>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

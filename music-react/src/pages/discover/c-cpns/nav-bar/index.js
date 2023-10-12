import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import { NavWrapper, TopMenu } from './style';

import { dicoverMenu } from '@/common/local-data.js'

export default memo(function NavBar() {
  return (
    <NavWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item) => {
              return (
                <div key={item.link} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
    </NavWrapper>
  )
})

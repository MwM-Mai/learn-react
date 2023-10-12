import React, { memo } from 'react'


import { HeaderV1Wrapper } from './style'

const AreaHeaderV1 = memo(function () {
  const keyword = ["华语", "流行", "摇滚", "民谣", "电子"]

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className='left'>
        <h3 className='title'>热门推荐</h3>
        <div className='keyword'>
          {
            keyword.map((item, index) => (
              <div key={index} className="item">
                <span className="text">{item}</span>
                {index < (keyword.length - 1) && <span className="divider">|</span>}
              </div>
            ))
          }
        </div>
      </div>
      <div className='right'>
        <a href="#/" className='more'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderV1Wrapper>
  )
})

export default AreaHeaderV1

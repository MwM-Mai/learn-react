import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Carousel } from 'antd'
import classnames from "classnames" // 动态添加class  

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

export default memo(function Banner() {

  // 定义内部数据
  const bannerRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  // const [currentBg, setCurcurrentBg] = useState("")

  // 从store中获取数据
  const { banners } = useSelector((state) => ({
    banners: state.recommend.banners
  }), shallowEqual)

  // 事件处理函数
  const handelPrevClick = () => {
    bannerRef.current.prev()
  }

  const handleNextClick = () => {
    bannerRef.current.next()
  }

  const handleAferChange = (currnet) => {
    setCurrentIndex(currnet)
  }

  let bgImage = banners[currentIndex]?.imageUrl
  if (bgImage) {
    bgImage = bgImage + "?imageView&blur=40x20"
  }

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay ref={bannerRef} effect="fade" afterChange={handleAferChange}
          >
            {
              banners.map((item) => (
                <div key={item.imageUrl} className="banner-item">
                  <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                </div>
              ))
            }
          </Carousel>
          {/* <ul className='dots'>
            {
              banners.map((item, index) => (
                <li key={item.imageUrl}>
                  <span className={classnames("item", { active: index === currentIndex })}></span>
                </li>
              ))
            }
          </ul> */}
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={handelPrevClick}></button>
          <button className='btn right' onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

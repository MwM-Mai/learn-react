import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';


import Banner from './c-cpns/banner';
import HotRecommend from './c-cpns/hot-recommend';
import { fetchBannerDataAction } from './store/recommend';
import { RecommendWarpper } from './style';

export default memo(function Recommend() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <div>
      <Banner />
      <RecommendWarpper className='content wrap-v2'>
        <div className='left'>
          <HotRecommend></HotRecommend>
        </div>
        <div className='right'>right</div>
      </RecommendWarpper>
    </div>
  )
})

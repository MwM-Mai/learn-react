import React, { memo, useEffect } from 'react';
// shallowEqual 进行浅层比较 useSelector会将上次调用的结果与当前调用的结果进行引用（===）比较，不一样会进行重新渲染。
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotAlbumsAction } from '../../store/actionCreators';

import HYAlbumCover from '@/components/album-cover';
import HYThemHeaderNormal from '@/components/theme-header-normal';
import {
  HotAlbumWrapper
} from './style';

export default memo(function HYHotAlbum() {

  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <HYThemHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbums.slice(0, 10).map((item, index) => {
            return <HYAlbumCover size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              key={item.id}
              info={item} />
          })
        }
      </div>
    </HotAlbumWrapper>
  )
});

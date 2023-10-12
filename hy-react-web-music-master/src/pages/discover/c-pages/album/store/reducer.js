// immutable 只要修改了对象就会返回一个新的对象
import { Map } from 'immutable';

import * as actionTypes from './constants';

// 1. 使用 Map 函数
const defaultState = Map({
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      // 不能再使用 { ...state, hotAlbums: action.hotAlbums }
      return state.set("hotAlbums", action.hotAlbums);
    case actionTypes.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", action.topAlbums);
    case actionTypes.CHANGE_TOP_TOTAL:
      return state.set("topTotal", action.total);
    default:
      return state;
  }
}

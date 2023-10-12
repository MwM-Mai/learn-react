import {
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from './constants.js'

// 拆分home reducer
const initalHomeSate = {
  banners: [],
  recommends: []
}

function homeReducer(state = initalHomeSate, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return { ...state, banners: action.banners }
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default homeReducer
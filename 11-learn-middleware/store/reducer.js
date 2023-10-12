import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCRETMENT,
  DECRETMENT
} from './constants.js'

const initialState = {
  counter: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case INCRETMENT:
      return { ...state, counter: state.counter + 1 }
    case DECRETMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}


export default reducer
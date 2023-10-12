import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCRETMENT,
  DECRETMENT
} from './constants.js'

export const addAction = num => ({
  type: ADD_NUMBER,
  num
})

export const subAction = num => ({
  type: SUB_NUMBER,
  num
})

export const incAction = () => ({
  type: INCRETMENT
})

export const decAction = () => ({
  type: DECRETMENT
})

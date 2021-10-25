import { TOGGLE_CART, ADD_ITEM } from './cartActionTypes'

export const toggleCart = state => ({
  type: TOGGLE_CART
})

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})
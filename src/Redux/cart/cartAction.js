import { TOGGLE_CART, ADD_ITEM, DELETE_ITEM, DECREASE_QUANTITY} from './cartActionTypes'

export const toggleCart = state => ({
  type: TOGGLE_CART
})

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})

export const deleteItem = item => ({
  type:   DELETE_ITEM,
  payload: item
})

export const decreaseQuantity = item => ({
  type:   DECREASE_QUANTITY,
  payload: item
})


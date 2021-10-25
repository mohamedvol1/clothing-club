import { TOGGLE_CART, ADD_ITEM } from './cartActionTypes'
import { addItemsToCart } from './cartUtils'

const INITIAL_STATE = {
  showCart: false,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      }

    case ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      }
    }
    default:
      return state;
  }
}

export default cartReducer; 
import { TOGGLE_CART, ADD_ITEM, DELETE_ITEM, DECREASE_QUANTITY } from './cartActionTypes'
import { addItemsToCart, removeItemFromCart, decreaseItemQuantity } from './cartUtils'

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

    case DELETE_ITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    }
    
    case DECREASE_QUANTITY: {
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      }
    }


    default:
      return state;
      
  }
}

export default cartReducer; 
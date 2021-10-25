const INITIAL_STATE = {
  showCart: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        showCart: !state.showCart
      }
    default:
      return state;
  }
}

export default cartReducer; 
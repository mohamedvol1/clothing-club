import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectShowCart = createSelector(
  [selectCart],
  cart => cart.showCart
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems
    .reduce(
      (accumulator, item) => accumulator += item.quantity,
      0
    )
    
)

export const selectCartItemsTotla = createSelector(
  [selectCartItems],
  cartItems => cartItems
    .reduce(
      (accumulator, item) => accumulator += item.quantity * item.price,
      0
    )
    
)
import React from "react";
import './CartItem.scss'

const CartItem = ({ item: {imageUrl, name, price, quantity} }) => {
  return (
    <div className='cart-item'>
      <div 
        className='cart-item-image'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${imageUrl})`    
        }}
      />
      <div className='cart-item-details'>
        <span className='cart-item-name'>{name}</span>
        <span className='cart-item-price'>{quantity} x ${price}</span>
      </div>

    </div>
  ) 
}

export default CartItem;
import React from "react";
import './CheckoutPage.scss'
import { selectCartItems } from '../../Redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux"; 
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'


const CheckoutPage = ({ cartItems }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-page-header'>
        <span>Product</span>
        <span>Name</span>
        <span>Quantity</span>
        <span>Price</span>
      </div>
      <div className='checkout-page-items'>
        {cartItems.map(item => {
          return (
            <CheckoutItem key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStatetoProps)(CheckoutPage);

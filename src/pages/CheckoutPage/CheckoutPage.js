import React from "react";
import './CheckoutPage.scss'
import { selectCartItems, selectCartItemsTotla } from '../../Redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux"; 
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'


const CheckoutPage = ({ cartItems, total }) => {
  
  
    if (cartItems.length) {
      
      return (
        <div className='checkout-page'>
          <div className='checkout-page-header'>
            <span>Product</span>
            <span>Name</span>
            <span>Quantity</span>
            <span>Price</span>
          </div>
          <div className='checkout-page-items'>
            { 
              cartItems.map(item => {
                return (
                  <CheckoutItem key={item.id} item={item} />
                )
              })
            }
          </div>
          <div className="checkout-page-total"><span>{`Totla: $${total}`}</span></div>
        </div>
      )

    } else {
      return(
        <div className='checkout-page'>
          <div className='checkout-page-empty-cart'>
            <p>No items here yet ...</p>
          </div>
        </div>
      )
    }
    
  
}

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotla
})

export default connect(mapStatetoProps)(CheckoutPage);

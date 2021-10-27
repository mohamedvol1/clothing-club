import React from 'react';
import './CartSlider.scss';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import  CartItem  from '../CartItem/CartItem';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import { toggleCart } from '../../Redux/cart/cartAction';
import { selectCartItems, selectShowCart } from '../../Redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';



const CartSlider = ({ showCart, toggleCart, cartItems, history }) => {
  return (
    <Slide timeout={500} direction="left" in={showCart} mountOnEnter unmountOnExit>
      <div className='cart-slider'>
        <div className='cart-slider-header'>
          <h2 className='cart-slider-header-text'>My Cart</h2>
          <span className="cart-slider-close" onClick={toggleCart}>
            <CloseIcon className="close-icon"/>
          </span>
        </div>
        <div className='cart-slider-items'>
          {
            cartItems.length ?
            cartItems.map( item => (
              <CartItem key={item.id} item={item} />
            ))
            :
            <div className='cart-slider-empty-msg'>
              <p> Your Cart is empty... </p>
            </div>
          }
        </div>
        <Button className='cart-slider-checkout-btn'
              sx={{
                margin: '10px',
                borderRadius: '0px',
                background: 'linear-gradient(90deg,#ed145b 0,#7b31f4)',
                transition: 'opacity .3s',
                '&:hover': {
                  opacity: '.8'
                }
              }}
              variant="contained" 
              size="large"
              onClick={() => {
                history.push('/checkout');
                toggleCart();
              }}
            >
              go to checkout
            </Button>
      </div>
    </Slide>
  ) 
}

const mapStatetoProps = createStructuredSelector({
  showCart: selectShowCart,
  cartItems: selectCartItems
})

const mapDispatchtoProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(CartSlider));
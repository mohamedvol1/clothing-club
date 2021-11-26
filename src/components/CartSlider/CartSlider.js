import React from 'react';
import './CartSlider.scss';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import  CartItem  from '../CartItem/CartItem';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleCart } from '../../Redux/cart/cartAction';
import { selectCartItems, selectShowCart } from '../../Redux/cart/cartSelector';

const CartSlider = () => {
  const cartItems = useSelector(selectCartItems);
  const showCart = useSelector(selectShowCart);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Slide timeout={500} direction="left" in={showCart} mountOnEnter unmountOnExit>
      <div className='cart-slider'>
        <div className='cart-slider-header'>
          <h2 className='cart-slider-header-text'>My Cart</h2>
          <span className="cart-slider-close" onClick={() => dispatch(toggleCart())}>
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
        <Button 
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
            dispatch(toggleCart());
          }}
        >
          go to checkout
        </Button>
      </div>
    </Slide>
  ) 
}

// const mapStatetoProps = createStructuredSelector({
//   showCart: selectShowCart,
//   cartItems: selectCartItems
// })

// const mapDispatchtoProps = dispatch => ({
//   toggleCart: () => dispatch(toggleCart())
// })

export default CartSlider;
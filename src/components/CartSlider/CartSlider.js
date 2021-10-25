import Button from '@mui/material/Button';
import './CartSlider.scss';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import { toggleCart } from '../../Redux/cart/cartAction';

const CartSlider = ({ cart, toggleCart }) => {
  return (
    <Slide timeout={500} direction="left" in={cart} mountOnEnter unmountOnExit>
      <div className='cart-slider'>
        <div className='cart-slider-header'>
          <h2 className='cart-slider-header-text'>My Cart</h2>
          <span className="cart-slider-close" onClick={toggleCart}>
            <CloseIcon className="close-icon"/>
          </span>
        </div>
        <div className='cart-slider-items'>
          cart items
        </div>
        <Button
              sx={{
                marginTop: '30px',
                borderRadius: '0px',
                backgroundColor: 'rgba(224, 11, 203, 1)',
                '&:hover': {
                  backgroundColor: 'black',
                }
              }}
              variant="contained" 
              size="large"
              type='submit'
            >
              Sign In
            </Button>
      </div>
    </Slide>
  ) 
}

const mapStatetoProps = state => ({
  cart: state.cart.showCart
})

const mapDispatchtoProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(CartSlider);
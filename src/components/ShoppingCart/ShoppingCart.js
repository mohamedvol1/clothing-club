import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './ShoppingCart.scss';
import { connect } from 'react-redux';
import { toggleCart } from '../../Redux/cart/cartAction';

const ShoppingCart = ({ toggleCart, itemCount }) => {
  return (
    <div className='option shopping-cart' onClick={toggleCart}>
      <ShoppingBagOutlinedIcon
        fontSize="large" 
        sx={{
          fill: 'white'
        }}
      />
      <span className='shopping-cart-items-number'>{itemCount}</span>
    </div>
  )
}

const mapStatetoProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((accumulator, item) => accumulator += item.quantity, 0)
})

const mapDispatchtoProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ShoppingCart);
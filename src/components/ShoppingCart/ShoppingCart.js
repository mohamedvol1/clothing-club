import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './ShoppingCart.scss';
import { connect } from 'react-redux';
import { toggleCart } from '../../Redux/cart/cartAction';

const ShoppingCart = ({ toggleCart }) => {
  return (
    <div className='option shopping-cart' onClick={toggleCart}>
      <ShoppingBagOutlinedIcon
        fontSize="large" 
        sx={{
          fill: 'white'
        }}
      />
      <span className='shopping-cart-items-number'>1</span>
    </div>
  )
}

const mapDispatchtoProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchtoProps)(ShoppingCart);
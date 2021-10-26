import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './ShoppingCart.scss';
import { connect } from 'react-redux';
import { toggleCart } from '../../Redux/cart/cartAction';
import { selectCartItemsCount } from '../../Redux/cart/cartSelector';

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

const mapStatetoProps = state => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchtoProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ShoppingCart);
import './CheckoutItem.scss';
import { connect } from 'react-redux';
import { deleteItem, addItem, decreaseQuantity } from '../../Redux/cart/cartAction';


const CheckoutItem = ({ item, deleteItem, addItem, decreaseQuantity }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className='checkout-item'>
      <div 
        className='checkout-item-remove-btn'
        onClick={() => deleteItem(item)}
      >&#10005;</div>
      <div className='checkout-item-image-wrapper'>
        <div 
          className='checkout-item-image'
          style={{ 
            backgroundImage: `url(${imageUrl})`    
          }}
        />
      </div>     
      <div className='checkout-item-name'>{name}</div>
      <div className='checkout-item-quantity'>
        <span className='arrow' onClick={() => decreaseQuantity(item)}>&#10096;</span>
        {quantity}
        <span className='arrow' onClick={() => addItem(item)}>&#10097;</span>
      </div>
      <div className='checkout-item-price'>{price}</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteItem: item => dispatch(deleteItem(item)),
  addItem: item => dispatch(addItem(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
import './CheckoutItem.scss'


const CheckoutItem = ({item: { imageUrl, name, quantity, price }}) => {
  console.log(imageUrl)
  return (
    <div className='checkout-item'>
      <div className='checkout-item-remove-btn'>&#10005;</div>
      <div className='checkout-item-image-wrapper'>
        <div 
          className='checkout-item-image'
          style={{ 
            backgroundImage: `url(${imageUrl})`    
          }}
        />
      </div>     
      <div className='checkout-item-name'>{name}</div>
      <div className='checkout-item-quantity'>{quantity}</div>
      <div className='checkout-item-price'>{price}</div>
    </div>
  )
}

export default CheckoutItem;
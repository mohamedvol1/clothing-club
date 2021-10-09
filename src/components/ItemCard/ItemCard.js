import './ItemCard.scss'

const ItemCard = ({ imageUrl, name, price }) => {
  return (
    <div className='item-card'>
      <div 
        className='background-card-image'
        style={{
          height: '350px',
          width: '100%',
          backgroundImage: `url(${imageUrl})`    
        }}
      />
      <div className='item-colors'>colors</div>
      <div className='item-card-footer'>
        <p className='item-name'>{name}</p>
        <p className='item-price'>{`${price}$`}</p>
      </div> 
    </div>
  )
}

export default ItemCard;
import React from 'react';
import './ItemCard.scss';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/cart/cartAction';

const ItemCard = ({ item,  addItem }) => {
  const { imageUrl, name, price } = item

  const [checked, setChecked] = React.useState(false);
  
  return (
    <div className='item-card'>
      <div 
        onMouseEnter={() => setChecked(true)}
        onMouseLeave={() => setChecked(false)}
        className='background-card-image'
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // backgroundPosition:'center',
        }}
      >
        <Slide timeout={300} direction="up" in={checked} mountOnEnter unmountOnExit>
          <Button
            className='add-cart-button'
            sx={{
              width: '80%',
              height: '50px',
              display: 'block', 
              fontSize: '.8em',
              borderRadius: '0px',
              backgroundColor: 'black',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'inset 0px 0px 0px 2px black',
                boxSizing: 'border-box'
              }
            }}
            variant="contained" 
            size="large"
            onClick={() => addItem(item)}   
          >
            add to cart
          </Button>
        </Slide>
      </div>
     
      <div className='item-card-footer'>
        <p className='item-name'>{name}</p>
        <p className='item-price'>{`${price}$`}</p>
      </div> 
    </div>
  )
}

const mapDispatchToProps = dipatch => ({
  addItem: item => dipatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemCard);
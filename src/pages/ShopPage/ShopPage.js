import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    let { collections } = this.state;
    return (
      <div className='shop-page'>
        <div className='shop-page-collections'>
          {
            collections.map(({ id, ...collectionProps}) => {
              return(
                <CollectionPreview key={id} {...collectionProps} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ShopPage;
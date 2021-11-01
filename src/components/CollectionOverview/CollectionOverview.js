import React, { Fragment } from "react";

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { selectShopCollections } from '../../Redux/shop/shopSelector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const CollectionOverview = ({ collections }) => {
  return(
    <Fragment>
      <h1 className='shop-page-title'>Collections</h1>
      {
        collections.map(({ id, ...collectionProps}) => {
          return(
            <CollectionPreview key={id} {...collectionProps} />
          )
        })
      }
    </Fragment>
  )
}
  
const mapStatetoProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStatetoProps)(CollectionOverview);
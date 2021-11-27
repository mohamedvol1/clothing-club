import React, { Fragment } from "react";

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { selectCollectionsArray } from '../../Redux/shop/shopSelector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const CollectionOverview = ({ collections }) => {
  return(
    <Fragment>
      <h1 
        className='shop-header' 
        style={{ textAlign: 'center' }}
      >
        Collections
      </h1>
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
  collections: selectCollectionsArray
})

export default connect(mapStatetoProps)(CollectionOverview);
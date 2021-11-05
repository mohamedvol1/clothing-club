import React, { Fragment } from "react";

import './CollectionPage.scss'

import ItemCard from '../../components/ItemCard/ItemCard';


import { selectCollection } from '../../Redux/shop/shopSelector';
import { connect } from "react-redux";

const CollectionPage = ({ collection }) => {
  console.log('heeeeeeeheeeeeeeeeeheeeeeeee', collection)
  const { title, items } = collection
  return(
    <Fragment>
    <div className='collection-page-style'>
      <h1 className='collection-page-title'>{title}</h1>
      <div className='collection-page-items'>
        {
          items.map((item) => {
            return(
              <ItemCard key={item.id} item={item} />
            )
          })
        }
      </div>
    </div>
    </Fragment>
  )
}

const mapStatetoProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStatetoProps)(CollectionPage); 
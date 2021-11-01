import React from "react";

import { selectCollection } from '../../Redux/shop/shopSelector';
import { connect } from "react-redux";

const CollectionPage = ({ collection, match }) => {
  console.log('heeeeeeeheeeeeeeeeeheeeeeeee', collection)
  return(
    <div className='collection-page'>
      <h1>Collection name</h1>
    </div>
  )
}

const mapStatetoProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStatetoProps)(CollectionPage); 
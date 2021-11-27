import React, { Fragment } from "react";

import './CollectionPage.scss'

import ItemCard from '../../components/ItemCard/ItemCard';

import { selectCollection } from '../../Redux/shop/shopSelector';
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId))
  const { title, items } = collection;

  return(
    <Fragment>
    <div className='collection-page-style'>
      <h1 className='collection-page-title'>{title}</h1>
      <div className='collection-page-items'>
        {
          items.map((item) => {
            return(             
                <ItemCard 
                  key={item.id} 
                  item={item} 
                />
            )
          })
        }
      </div>
    </div>
    </Fragment>
  )
}

export default CollectionPage; 
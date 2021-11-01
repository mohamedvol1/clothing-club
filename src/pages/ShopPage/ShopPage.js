import React from 'react';
import { Route, Switch } from "react-router-dom";

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage'

const ShopPage = ({ match }) => {
  console.log('hey over here' , match.url)
    return (
      <div className='shop-page'>
      <Switch> 
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
          
      </Switch>
      </div>
    )
}

export default ShopPage;
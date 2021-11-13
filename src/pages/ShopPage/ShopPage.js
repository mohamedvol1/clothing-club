import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import { SpinnerContainer } from './ShopPageStyles';
import CircularProgress from '@mui/material/CircularProgress';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage'

import { firestore, mapCollectionsSnapshotsToNew } from '../../firebase/firebase.utils';

import { updateShopData } from '../../Redux/shop/shopActions';

class ShopPage extends Component  {
  state = {
    loading: true
  }


  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopData } = this.props;
    const collectionRef = firestore.collection('collections');
    
    collectionRef.get().then(snapshot => {
      const collectionsMap = mapCollectionsSnapshotsToNew(snapshot);
      updateShopData(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return loading ? (
      <SpinnerContainer>
        <CircularProgress sx={{
          color: '#7b31f4'
        }} />
      </SpinnerContainer>
    ) : (
      <Switch> 
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />     
      </Switch>
    )
          
    
  }
}

const mapDispatchtoProps = dispatch => ({
  updateShopData: collectionsMap => dispatch(updateShopData(collectionsMap))
})

export default connect(null, mapDispatchtoProps)(ShopPage);
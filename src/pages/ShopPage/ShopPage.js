import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import { SpinnerContainer } from './ShopPageStyles';
import CircularProgress from '@mui/material/CircularProgress';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage'

import { createStructuredSelector } from 'reselect';
import { selectCollectionsIsFetching, selectCollectionsIsLoaded } from '../../Redux/shop/shopSelector';
import { fetchCollectionsStart } from '../../Redux/shop/shopActions';


class ShopPage extends Component  {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match, isFetching, isloaded } = this.props;
    console.log(isloaded)
    return isFetching || !isloaded  ? (
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

const mapStatetoProps = createStructuredSelector({
  isFetching: selectCollectionsIsFetching,
  isloaded: selectCollectionsIsLoaded
})

const mapDispatchtoProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ShopPage);
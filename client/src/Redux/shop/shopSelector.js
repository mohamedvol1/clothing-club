import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollectionsArray = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ?
    Object.keys(collections).map(key => collections[key])
    : []
)

export const selectCollection = memoize(collectionUrlParam => 
  createSelector(
    [selectShopCollections],
    (collections) => 
      collections ? 
      collections[collectionUrlParam]
      : null
  ))

  export const selectCollectionsIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
  )

  export const selectCollectionsIsLoaded = createSelector(
    [selectShop],
    shop => !!Object.keys(shop.collections).length
  )


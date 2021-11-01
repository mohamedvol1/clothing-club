import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
  Hats: 1,
  Sneakers: 2,
  Jackets:3,
  Womens: 4,
  Mens: 5
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollection = memoize(collectionUrlParam => 
  createSelector(
    [selectShopCollections],
    (collections) => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  ))


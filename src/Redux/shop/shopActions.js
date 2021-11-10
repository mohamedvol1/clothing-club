import { UPDATE_SHOP_DATA } from './shopActionTypes';

export const updateShopData = collectionsMap => ({
  type: UPDATE_SHOP_DATA,
  payload: collectionsMap
})
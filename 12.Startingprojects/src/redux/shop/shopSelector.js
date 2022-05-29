
import { createSelector } from "reselect";

const selectShop = state => state.shop 

export const selectShopSection = createSelector(
  [selectShop],
  shop => shop.data
)
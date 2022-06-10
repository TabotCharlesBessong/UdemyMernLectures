
import { createSelector } from "reselect";

const collectionIdMap = {
  hats:1,
  sneakers:2,
  jackets:3,
  womens:4,
<<<<<<< HEAD
  mens:5 
=======
  mens:5
>>>>>>> ce1822e6919d3eed3f9d5c6aad3a3dbe67a457df
}

const selectShop = state => state.shop 

export const selectShopSection = createSelector(
  [selectShop],
  shop => shop.data
)

<<<<<<< HEAD
export const selectCollection = (collectionUrlParam) => {
  createSelector(
    [selectCollection],
    collections => collections.find( collection => collection.id === collectionIdMap[collectionUrlParam])
=======
export const selectcollection = (collectionUrlParam) =>{
  createSelector(
    [selectcollection],
    collections => collections.find(collection => collection.id === collectionIdMap[collectionUrlParam] )
>>>>>>> ce1822e6919d3eed3f9d5c6aad3a3dbe67a457df
  )
}
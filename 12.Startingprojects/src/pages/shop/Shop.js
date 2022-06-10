<<<<<<< HEAD

import React, { Component } from 'react'
// import shop from '../../redux/shop/shop'
import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import {Route} from 'react-router-dom'
// import { selectShopSection } from '../../redux/shop/shopSelector'
import Collection from '../collections/Collection'

const  Shop =  ({match})=> {
  // console.log(match)
  return (
    <div className='shop-page' >
    <Route exact path={`${match.path}`}  component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`}  component={Collection} />
    </div>
  )
}

export default Shop
=======
import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import Collection from '../collection/Collection';
// import Coll

const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={ <CollectionOverview /> } />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
>>>>>>> ce1822e6919d3eed3f9d5c6aad3a3dbe67a457df

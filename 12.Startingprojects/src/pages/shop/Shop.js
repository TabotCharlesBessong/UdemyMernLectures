
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
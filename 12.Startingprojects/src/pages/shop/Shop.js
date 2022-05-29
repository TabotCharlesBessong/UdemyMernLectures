
import React, { Component } from 'react'
import shop from '../../redux/shop/shop'
import CollectionOverview from '../../components/collection-overview/CollectionOverview'

import { selectShopSection } from '../../redux/shop/shopSelector'

const  Shop =  ({data})=> {
  
  return (
    <div className='shop-page' >
    <CollectionOverview/>
    </div>
  )
}



export default Shop
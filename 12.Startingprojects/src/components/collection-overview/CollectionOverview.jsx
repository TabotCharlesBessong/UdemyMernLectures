
import React from 'react'
import './CollectionOverview.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Preview from '../preview/Preview'
import { selectShopSection } from '../../redux/shop/shopSelector'


const CollectionOverview = ({data}) => {
  return (
    <div className='collections-overview' >
      {
      data.map(({id , ...otherPreviews}) => (
        <Preview key={id} {...otherPreviews}  /> 
      ) )
    }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  data : selectShopSection
})

export default connect(mapStateToProps)(CollectionOverview)
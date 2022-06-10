
import React from 'react'
// import CollectionOverview  from '../../components/collection-overview/CollectionOverview'
import CardItem from '../../components/cardItem/CardItem'
import './Collection.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shopSelector'

const Collection = ({collection})=>{
  console.log(collection);
  return(
    <div className="collection-page">
      <h2>Collection  page</h2>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => ({
  collection:selectCollection(ownProps.match.params.collectionId)
})

export default connect(mapStateToProps)(Collection) 
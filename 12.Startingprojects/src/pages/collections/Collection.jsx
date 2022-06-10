
import React from 'react'
// import CollectionOverview  from '../../components/collection-overview/CollectionOverview'
import CardItem from '../../components/cardItem/CardItem'
import './Collection.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shopSelector'
// import { useState } from 'react'

const Collection = ({collection})=>{
  // const [state,setState] = useState([])
  const {title , items} = collection
  console.log(collection);
  return(
    <div className="collection-page">
      <h2 className='title' >{title}</h2>
      <div className="items">
        {
          items.map(item => <CardItem key={item.id} item={item} />  )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => ({
  collection:selectCollection(ownProps.match.params.collectionId)
})

export default connect(mapStateToProps)(Collection)
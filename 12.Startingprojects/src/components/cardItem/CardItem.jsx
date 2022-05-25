
import React from 'react'
import Button from '../button/Button'
import './CardItem.scss'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/CartActions'

const CardItem = ({item,  addItem }) => {
  const {name,imageUrl,price} = item
  return (
    <div className='collection-item' >
      <div className="image" style={{backgroundImage: `url(${imageUrl})` }} >
      </div>
      
        <div className="collection footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button inverted onClick={()=> addItem(item) }  >
          ADD TO CART
        </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem:item => dispatch(addItem(item)) 
})

export default connect(null,mapDispatchToProps)(CardItem)

import React from 'react'
import Button from '../button/Button'
import './CardItem.scss'

const CardItem = ({id, name,price,imageUrl }) => {
  return (
    <div className='collection-item' >
      <div className="image" style={{backgroundImage: `url(${imageUrl})` }} >
      </div>
      
        <div className="collection footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button inverted >
          ADD TO CART
        </Button>
    </div>
  )
}

export default CardItem
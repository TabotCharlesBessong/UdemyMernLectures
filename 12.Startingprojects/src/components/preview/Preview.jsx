
import React from 'react'
import CardItem from '../cardItem/CardItem'
import './Preview.scss'

const Preview = ({title,items}) => {
  return (
    <div className='collection-preview' >
      <h1> {title.toUpperCase()}  </h1>
      <div className="preview">
        {
          items.filter((item,idx) => idx < 4 ).map(({id , ...itemProps}) => (
            <CardItem key={id} {...itemProps} />
          )  )
        }
      </div>
    </div>
  )
}

export default Preview
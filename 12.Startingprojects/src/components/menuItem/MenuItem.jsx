
import React from 'react'
import './Menu.scss'

const MenuItem = ( {title , imageUrl , subtitle , size}) => {
  // const {title , image , subtitle} = props
  return (
    <div style={{backgroundImage:`url(${imageUrl})`}}  className= {`${size} menu-item `}  >
        <div className="menu-item">
          <div className="content">
            <h1 className="title">
              {title}
            </h1>
            <span className="subtitle">
              {/* {subtitle} */}
              SHOP NOW
            </span>
          </div>
        </div>
    </div>
  )
}

export default MenuItem
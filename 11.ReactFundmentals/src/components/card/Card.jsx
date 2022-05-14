
import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card-container' >
      <img src={`https://robohash.org/${props.monster.id}?set=set2 `} alt="" />
      <h2> {props.monster.name}  </h2>
      <p>{props.monster.email}</p>
      <h3>{props.monster.address.city}</h3>
    </div>
  )
}

export default Card
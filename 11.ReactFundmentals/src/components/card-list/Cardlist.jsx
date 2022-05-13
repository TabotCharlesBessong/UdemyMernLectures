

import React from 'react'
import 'cardlist.css'

const Cardlist = (props) => {
  // const {name} = props
  return (
    <>
       {/* <div>Cardlist</div> */}
    <h1 className='card-list' >{props.children}</h1>
    </>
    
  )
}

export default Cardlist
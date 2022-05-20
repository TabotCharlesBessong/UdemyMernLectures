

import React from 'react'
import './CartIcon.scss'
import { ReactComponent as  ShoppingIcon} from '../../constant/images/bag.svg'
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/CartActions'

const CartIcon = ({toggleCart}) => {
  return (
    <div className='cart-icon' >
      <ShoppingIcon onClick={toggleCart}  className='shopping-icon' />
      <span className='item-count' >0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>({
  toggleCart: ()=> dispatch(toggleCart())  
})

export default  connect(null,mapDispatchToProps)(CartIcon)
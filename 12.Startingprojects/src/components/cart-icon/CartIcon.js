

import React from 'react'
import './CartIcon.scss'
import { ReactComponent as  ShoppingIcon} from '../../constant/images/bag.svg'
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/CartActions'

const CartIcon = ({toggleCart , itemCount }) => {
  return (
    <div className='cart-icon' >
      <ShoppingIcon onClick={toggleCart}  className='shopping-icon' />
      <span className='item-count' > {itemCount} </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>({
  toggleCart: ()=> dispatch(toggleCart())  
})

const mapStateToProps = ({cart : {cartItems}}) => ({
  itemCount : cartItems.reduce((acc,cartItem) => acc + cartItem.quantity  , 0)
})

export default  connect(mapStateToProps,mapDispatchToProps)(CartIcon)
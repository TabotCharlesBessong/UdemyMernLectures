

import React from 'react'
import './CartIcon.scss'
import { ReactComponent as  ShoppingIcon} from '../../constant/images/bag.svg'
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/CartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelector'
import { createStructuredSelector } from 'reselect'

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

const mapStateToProps = createStructuredSelector ({
  itemCount : selectCartItemsCount
})

export default  connect(mapStateToProps,mapDispatchToProps)(CartIcon)
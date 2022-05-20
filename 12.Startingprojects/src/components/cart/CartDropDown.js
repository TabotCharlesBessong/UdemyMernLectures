
import React from 'react'
import './CartDropDown.scss'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

const CartDropDown = ({cartItems , history}) => {
  return (
    <div className='cart-dropdown' >
      <div className="cart-items">
        {
          cartItems.length ? 
          cartItems.map(cart => <CartItem key={cart.id} item={cart} /> ) : 
          <span className="empty-message"> Your Cart is Empty </span>
        }
      </div>
      <Button onClick = {() => history.push('/checkout')} >

        GO TO CHECKOUT
      </Button>
        
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
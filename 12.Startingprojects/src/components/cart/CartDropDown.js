
import React from 'react'
import './CartDropDown.scss'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { createStructuredSelector } from 'reselect'

const CartDropDown = ({cartItems}) => {
  return (
    <div className='cart-dropdown' >
      <div className="cart-items">
        {
          cartItems.map(cart => <CartItem key={cart.id} item={cart} /> )
        }
      </div>
      <Button>
        GO TO CHECKOUT
      </Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems
})

export default connect(mapStateToProps)(CartDropDown)
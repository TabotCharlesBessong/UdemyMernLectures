
import React from 'react'
import './CartDropDown.scss'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
import { connect } from 'react-redux'

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

const mapStateToProps = ({cart:{cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropDown)
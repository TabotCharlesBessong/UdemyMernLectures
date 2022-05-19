

import React from 'react'
import './CartIcon.scss'
import { ReactComponent as  ShoppingIcon} from '../../constant/images/bag.svg'

const CartIcon = () => {
  return (
    <div className='cart-icon' >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count' >0</span>
    </div>
  )
}

export default CartIcon
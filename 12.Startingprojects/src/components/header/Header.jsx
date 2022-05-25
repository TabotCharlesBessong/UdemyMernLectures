
import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as  Logo} from '../../constant/images/crown.svg'
import {connect} from 'react-redux'
import { auth } from '../../firebase/firebase'
import CartIcon from '../cart-icon/CartIcon'
import CartDropDown from '../cart/CartDropDown'
import { createStructuredSelector } from 'reselect'
import { selectHiddenCart } from '../../redux/cart/cartSelector'
import { selectCurrentUser } from '../../redux/user/userSelector'

const Header = ({currentUser , hidden }) => {
  return (
    <div className='header' >
      <Link className='logo-container'  to='/'> <Logo className='logo' /> </Link>
      <div className="options">
        <Link to='/shop' className='option'>shop</Link>
        <Link to='/contact' className='option'>contact</Link>
        {currentUser ?
          <div className="option" onClick={()=> auth.signOut() } >
           sign out
          </div>
          :
        <Link to='/form' className='option'>signup</Link>
          
         }
         {/* <Logo1/> */}
         
         <CartIcon/>
      </div>
    {!hidden && <CartDropDown/>  }
      
    </div>
  )
}

const mapStateToProps =  createStructuredSelector ({
  currentUser : selectCurrentUser ,
  hidden : selectHiddenCart
})

export default connect(mapStateToProps)(Header)
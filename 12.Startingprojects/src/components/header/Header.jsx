
import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as  Logo} from '../../constant/images/crown.svg'
import {connect} from 'react-redux'
import { auth } from '../../firebase/firebase'
import CartIcon from '../cart-icon/CartIcon'

const Header = ({currentUser}) => {
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
    </div>
  )
}

const mapStateToProps = (state)=> ({
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header)
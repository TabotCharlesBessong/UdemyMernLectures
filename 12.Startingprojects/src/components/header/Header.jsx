
import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as  Logo} from '../../constant/images/crown.svg'

import { auth } from '../../firebase/firebase'

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
      </div>
    </div>
  )
}

export default Header
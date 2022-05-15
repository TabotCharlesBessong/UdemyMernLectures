
import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as  Logo} from '../../constant/images/crown.svg'

const Header = () => {
  return (
    <div className='header' >
      <Link className='logo-container'  to='/'> <Logo className='logo' /> </Link>
      <div className="options">
        <Link to='/shop' className='option'>shop</Link>
        <Link to='/contact' className='option'>contact</Link>
        <Link to='/form' className='option'>signup</Link>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import './Button.scss'

const Button = ({children ,isGoogleSignIn,inverted, ...otherProps}) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in':'' } ${inverted ? 'inverted':'' }  custom-button `} {...otherProps}   >
      {children}
    </button>
  )
}

export default Button
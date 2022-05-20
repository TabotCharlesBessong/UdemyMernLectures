
import React from 'react'
import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/signup/SignUp'
import './Form.scss'

const Form = () => {
  return (
    <div className='form' >
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default Form
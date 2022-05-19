

import React, { Component } from 'react'
import { auth , createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase'
import Button from '../button/Button'
import FormInput from '../form-input/FormInput'

export default class SignUp extends Component {

  constructor(){
    super()

    this.state = {
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }

  

  handleSubmit = async (e)=>{
    e.preventDefault()
    const {displayName , email , password , confirmPassword} = this.state
    if(password !== confirmPassword){
      alert("password dont match")
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email,password)
      await createUserProfileDocument(user,{displayName})

      this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
      })

    } catch (error) {
      console.log('errors',error)
    }
  }

  handleChange = (e)=>{
    // e.preventDefault()
    const {name,value} = e.target
    this.setState({[name]:value})
  }

  render() {
    const {displayName , email , password , confirmPassword} = this.state
    return (
      <div className="sign-up">
        <h2 className="title">i dont yet have an accout</h2>
        <span>sign up with your email and password</span>

        <div className="sign-up-form">
        <form action="" onSubmit={this.handleSubmit} >
          <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={this.handleChange}
          label='Full Name'
          required
          />

          <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Enter email address'
          required
          />

          <FormInput
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}
          label='Enter your password'
          required
          />

          <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={this.handleChange}
          label='Confirm your password'
          required
          />

          <div className="buttons">
            <Button type='submit' > Sign Up </Button>
            {/* <Button onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google </Button> */}
          </div>
          </form>

        </div>
      </div>
    )
  }
}

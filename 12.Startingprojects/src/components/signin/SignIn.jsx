
import React, { Component } from 'react'

export default class SignIn extends Component {

  constructor(props){
    super(props)

    this.state = {
      email:'',
      password:''
    }
  }

  handleSubmit = (e)=>{
    e.preventDefault()
  }

  handleChange = (e)=>{
    const {value,name} = e.target
    this.setState({[name]:value})
  }
  render() {
    return (
      <div className='sign-in' >
        <h2>I already have an account </h2>
        <span> sign in with your email and password </span> 
        <form onSubmit={this.handleSubmit}  action="">
          <input type="email" name='email' value={this.state.email}  required onChange={this.handleChange}  />
          <label htmlFor="email">Email</label>
          <input onChange={this.handleChange} type="password" name='password' value={this.state.password}  required  />
          <label htmlFor="password">Password</label>
          <button type="submit">submit form</button>
        </form>
      </div>
    )
  }
}

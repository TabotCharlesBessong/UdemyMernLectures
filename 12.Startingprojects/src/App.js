import React, { Component } from 'react'
import Directory from './components/directory/Directory'
import Home from './pages/home/Home'
import {Switch,Route} from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'
import './App.css'
import Form from './pages/form/Form'
import { auth , createUserProfileDocument } from './firebase/firebase'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async  user =>{
      // this.setState({currentUser:user})
      createUserProfileDocument(user)
      // console.log(user)
    } )
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className='App' >
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' > <Home/> </Route>
          <Route path='/shop' >  <Shop/> </Route>
          <Route path='/form' > <Form/> </Route>
        </Switch>
        
      </div>
    )
  }
}

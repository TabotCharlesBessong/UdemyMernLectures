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
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async  userAuth =>{
      // this.setState({currentUser:user})
      // createUserProfileDocument(user)
      // console.log(user)
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          } )
          console.log(this.state);
        } )
      }
      this.setState({currentUser:userAuth})
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

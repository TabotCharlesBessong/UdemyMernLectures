import React, { Component } from 'react'
import Directory from './components/directory/Directory'
import Home from './pages/home/Home'
import {Switch,Route} from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'
import './App.css'
import Form from './pages/form/Form'

export default class App extends Component {
  render() {
    return (
      <div className='App' >
        <Header/>
        <Switch>
          <Route exact path='/' > <Home/> </Route>
          <Route path='/shop' >  <Shop/> </Route>
          <Route path='/form' > <Form/> </Route>
        </Switch>
        
      </div>
    )
  }
}

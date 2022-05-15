import React, { Component } from 'react'
import Directory from './components/directory/Directory'
import Home from './pages/home/Home'
import {Switch,Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className='App' >
        <Switch>
          <Route exact path='/' > <Home/> </Route>
          <Route path='/shop/mens' > <h1>Hello mens</h1> </Route>
        </Switch>
        
      </div>
    )
  }
}

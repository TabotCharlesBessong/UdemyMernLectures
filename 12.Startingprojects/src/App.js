import React, { Component } from 'react'
import Directory from './components/directory/Directory'
import Home from './pages/home/Home'

export default class App extends Component {
  render() {
    return (
      <div className='App' >
        <Home/>
      </div>
    )
  }
}

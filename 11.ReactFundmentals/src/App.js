
import React, { Component } from 'react'
import Cardlist from './components/card-list/Cardlist'

export default class App extends Component {

  constructor(){
    super()

    this.state = {
      monsters:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users})  )
  }
  render() {
    return (
      <div className='App' >
      <Cardlist name="Charles" >
        {this.state.monsters.map(monster =>(
          <h1 key={monster.id} > {monster.name}  </h1>
        ) )}
      </Cardlist>
        
      </div>
    )
  }
}

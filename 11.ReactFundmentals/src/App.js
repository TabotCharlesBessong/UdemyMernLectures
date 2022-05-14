
import React, { Component } from 'react'
import Cardlist from './components/card-list/Cardlist'
import SearchList from './components/search-list/SearchList'
import './App.css'
export default class App extends Component {

  constructor(){
    super()

    this.state = {
      monsters:[],
      searchField:''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users})  )
  }

  handleChange = (e)=>{
    this.setState({searchField: e.target.value })
      
  }
  render() {
    const { monsters , searchField } = this.state
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase())  )
    return (
      <div className='App' >
      <h1>monsters rolex</h1>
      <SearchList 
      search = {this.state.searchField}
      placeholder='search a monster'
      handleChange= {this.handleChange}
       />
      
      <Cardlist monsters={filteredMonsters} >
        
      </Cardlist>
        
      </div>
    )
  }
}

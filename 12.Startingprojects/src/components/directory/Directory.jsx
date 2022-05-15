
import React, { Component } from 'react'
import sections from '../../constant/section'
import MenuItem from '../menuItem/MenuItem'
import './Directory.scss'

export default class Directory extends Component {

  constructor(){
    super()
    this.state = {
      sections: sections
    }
  }
  render() {
    return (
      <div className='directory-menu' >
      {
        this.state.sections.map(({id,...otherSectionsprops}) => (
          <MenuItem key={id} {...otherSectionsprops} />
        ) )
      }
      </div>
    )
  }
}

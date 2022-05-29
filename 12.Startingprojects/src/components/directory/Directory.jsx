
import React, { Component } from 'react'
import sections from '../../constant/section'
import MenuItem from '../menuItem/MenuItem'
import './Directory.scss'
import { connect } from 'react-redux'
import { selectDirectorySection } from '../../redux/directory/directorySelector'
import { createStructuredSelector } from 'reselect'

const Directory =  ({sections})=>{
  
    return (
      <div className='directory-menu' >
      {
        sections.map(({id,...otherSectionsprops}) => (
          <MenuItem key={id} {...otherSectionsprops} />
        ) )
      }
      </div>
    )
  }

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)
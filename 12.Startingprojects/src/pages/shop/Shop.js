
import React, { Component } from 'react'
import Preview from '../../components/preview/Preview'
import shop from '../../constant/shop'

export default class Shop extends Component {

  constructor(props){
    super(props)

    this.state = {
      collections : shop
    }
  }
  render() {
    const {collections} = this.state
    return (
      <div className='shop-page' >
      {
        collections.map(({id , ...otherPreviews}) => (
          <Preview key={id} {...otherPreviews}  /> 
        ) )
      }
      </div>
    )
  }
}

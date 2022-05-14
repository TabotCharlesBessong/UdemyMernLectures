
import React from 'react'
import './Search.css'

const SearchList = ({placeholder , handleChange}) => {
  return (
    <div  >
      <form action="">
        <input 
        className='search' 
        type="search" 
        placeholder={placeholder}
        onChange={handleChange}
      />
      </form>
    </div>
  )
}

export default SearchList
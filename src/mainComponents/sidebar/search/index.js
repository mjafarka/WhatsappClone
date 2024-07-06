import React from 'react'
import './index.scss'
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <>
      <div className='searchContainer'>
        <input type='text' placeholder='Search...' className='input-search' />
        <span className='search-icon'>
          <CiSearch />
        </span>
      </div>
    </>
  )
}

export default Search
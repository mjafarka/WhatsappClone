import React, { useState } from 'react'
import './index.scss'
import { CiSearch } from "react-icons/ci";
import { useSearchMethodDispatcherContext, useSearchResult } from '../../../context/SearchContext';

function Search() {

  const searchTrigger = useSearchMethodDispatcherContext();
  const [subName, setSubName] = useState("");

  function searchPeople () {
      searchTrigger({type: 'recent', subName: subName});
  }

  return (
    <>
      <div className='searchContainer'>
        <input type='text' placeholder='Search...' className='input-search' 
        onChange={e => setSubName(e.target.value)}/>
        <span className='search-icon'>
          <CiSearch onClick={() => searchPeople()}/>
        </span>
      </div>
    </>
  )
}

export default Search

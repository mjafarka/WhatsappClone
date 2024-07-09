import React, { useContext, useState } from 'react'
import './index.scss'
import { CiSearch } from "react-icons/ci";
import { subNameContext, useSearchMethodDispatcherContext, useSearchResult } from '../../../context/SearchContext';

function Search() {

  const searchTrigger = useSearchMethodDispatcherContext();
  const [subName, setSubName] = useState("");
  const {setSubNameInContext} = useContext(subNameContext);

  function searchPeople () {
      searchTrigger({type: 'recent', subName: subName});
      setSubNameInContext(subName);
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

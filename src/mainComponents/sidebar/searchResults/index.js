import React from 'react'
import './index.scss'
import UserProfile from '../userProfile'
import { useSearchResult } from '../../../context/SearchContext';

const SearchResult = () => {


  const searchResult = useSearchResult();
  const searchResultArray = []
  for (const user of searchResult) {
  // need to remove it and add user when search button is clicked
      searchResultArray.push(<UserProfile user={user} key={user.userId}/>)
    
    
  }
  return (
    <div className={searchResultArray.length > 3 ? "searchResult" : "searchResultNoScroll"}>
        {searchResultArray}
        <div className='searchMore'>
          New connections
        </div>
        <button>back</button>
    </div>
  )
}

export default SearchResult
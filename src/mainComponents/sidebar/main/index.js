import React from 'react'
import './index.scss'
import Search from '../search';
import UserProfile from '../userProfile';
import SearchResult from '../searchResults';
import { SearchProvider } from '../../../context/SearchContext';

function SideBar() {

  const profiles = []
  for (let i = 0 ; i < 10 ; i ++ ){
    profiles.push(<UserProfile user={{emaidId: "muhammed@gmail.com",profileLoc
      : 
      "jdksjkfsl",
      userId
      : 
      "89faueio",
      userName
      : 
      "muhammed"}} key={i}/>)
  }
  return (
    <div className='sideBar'>
          <SearchProvider> {/* to search local and db profiles */}
              <Search/>
              <SearchResult/>
          </SearchProvider>
            {profiles}
    </div>
  )
}

export default SideBar;

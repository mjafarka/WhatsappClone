import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import UserProfile from '../userProfile'
import { defaultContext, subNameContext, useSearchMethodDispatcherContext, useSearchResult } from '../../../context/SearchContext';

const SearchResult =  () => {


  const [searchResult, setSearchResult] = useState([]);
  const result = useSearchResult();
  const {showSearchResult, setShowSearchResult} = useContext(defaultContext);

  useEffect( () => {
    const fetchData = async () => {
      const res = await result;
      setSearchResult(res);
    }
    fetchData();
  },[result]);

  const dbSearchTrigger = useSearchMethodDispatcherContext();
  const searchResultArray = []
  const {subName, setSubNameInContext} = useContext(subNameContext);
  for (const user of searchResult) {
  // need to remove it and add user when search button is clicked
      searchResultArray.push(<UserProfile user={user} key={user.userId} showAdd={true}/>)
  }

  const searchPeopleOnDB = () => {
    dbSearchTrigger({type: 'new', subName: subName});
  }

  const exitSearchAction = () => {
    setSubNameInContext("");
    setSearchResult([]);
    setShowSearchResult(false);
  }

  return (
    <div style={{display: showSearchResult ? 'block' : 'none'}}>
    <div className={searchResultArray.length > 3 ? "searchResult" : "searchResultNoScroll"}>
        {searchResultArray}
        <div className='searchMore' onClick={() => searchPeopleOnDB()}>
          New connections
        </div>
        <button onClick={() => exitSearchAction()}>back</button>
    </div>
    </div>
  )
}

export default SearchResult
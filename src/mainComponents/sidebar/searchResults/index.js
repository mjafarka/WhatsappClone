import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import UserProfile from '../userProfile'
import { subNameContext, useSearchMethodDispatcherContext, useSearchResult } from '../../../context/SearchContext';

const SearchResult =  () => {


  const [searchResult, setSearchResult] = useState([]);
  const result = useSearchResult();

  useEffect( () => {
    const fetchData = async () => {
      const res = await result;
      setSearchResult(res);
    }
    fetchData();
  },[result]);

  console.log("searchresult" , searchResult);
  const dbSearchTrigger = useSearchMethodDispatcherContext();
  const searchResultArray = []
  const {subName} = useContext(subNameContext);
  for (const user of searchResult) {
  // need to remove it and add user when search button is clicked
      searchResultArray.push(<UserProfile user={user} key={user.userId}/>)
  }

  const searchPeopleOnDB = () => {
    dbSearchTrigger({type: 'new', subName: subName});
  }

  return (
    <div className={searchResultArray.length > 3 ? "searchResult" : "searchResultNoScroll"}>
        {searchResultArray}
        <div className='searchMore' onClick={() => searchPeopleOnDB()}>
          New connections
        </div>
        <button>back</button>
    </div>
  )
}

export default SearchResult
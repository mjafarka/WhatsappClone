import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import UserProfile from '../userProfile'
import { defaultContext, subNameContext, useSearchMethodDispatcherContext, useSearchResult } from '../../../context/SearchContext';
import { getChatHistoryDoc } from '../../../firebase/firebaseDB';
import { useUser } from '../../../context/UserContext';
import { getRecentChatUsers } from '../../../firebase/helpers';
import { toggleSearchMethod } from '../../../redux/sideBar/searchSlice';
import { useDispatch } from 'react-redux';

const SearchResult =  () => {


  const [searchResult, setSearchResult] = useState([]);
  const result = useSearchResult();
  const {showSearchResult, setShowSearchResult} = useContext(defaultContext);
  const searchTrigger = useSearchMethodDispatcherContext();
  const dispatch = useDispatch();

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

  const user = useUser();
  const searchPeopleOnline = async () => {
    dispatch(toggleSearchMethod({searchMethod: 'new'}));
    const recentHistoryRef = await getChatHistoryDoc(user.userId);
    // const recentChatUsers = await getRecentChatUsers(recentHistoryRef,subName);
    // setSearchResult(recentChatUsers);
    searchTrigger({type: 'new', subName: subName, 
                  recentHistoryDoc: recentHistoryRef, currUserId: user.userId})
  }

  const exitSearchAction = () => {
    setSubNameInContext("");
    setSearchResult([]);
    setShowSearchResult(false);
    dispatch(toggleSearchMethod({searchMethod: 'recent'}));
  }

  return (
    <div style={{display: showSearchResult ? 'block' : 'none'}}>
    <div className={searchResultArray.length > 3 ? "searchResult" : "searchResultNoScroll"}>
        {searchResultArray}
        <div className='searchMore' onClick={() => searchPeopleOnline()}>
          New connections
        </div>
        <button onClick={() => exitSearchAction()}>back</button>
    </div>
    </div>
  )
}

export default SearchResult
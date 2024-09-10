import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { CiSearch } from "react-icons/ci";
import { defaultContext, subNameContext, useSearchMethodDispatcherContext, useSearchResult } from '../../../context/SearchContext';
import { getChatHistoryDoc } from '../../../firebase/firebaseDB';
import { useUser } from '../../../context/UserContext';
import { getRecentChatUsers } from '../../../firebase/helpers';

function Search() {

  const {subName} = useContext(subNameContext);
  const searchTrigger = useSearchMethodDispatcherContext();
  const [subNameSearch, setSubNameSearch] = useState(subName);
  const {setSubNameInContext} = useContext(subNameContext);
  const {setShowSearchResult} = useContext(defaultContext);
  const user = useUser();

  useEffect(() => {
    setSubNameSearch(subName);
  },[subName])

  async function searchPeople () {
    const recentHistoryRef = await getChatHistoryDoc(user.userId);
    searchTrigger({type: 'recent', subName: subNameSearch, recentHistoryDoc:
    recentHistoryRef});
    setSubNameInContext(subNameSearch);
    setShowSearchResult(true);
  }

  return (
    <>
      <div className='searchContainer'>
        <input type='text' placeholder='Search...' className='input-search' value={subNameSearch}
        onChange={e => setSubNameSearch(e.target.value)}/>
        <span className='search-icon'>
          <CiSearch onClick={() => searchPeople()}/>
        </span>
      </div>
    </>
  )
}

export default Search

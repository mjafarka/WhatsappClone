import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import Search from '../search';
import UserProfile from '../userProfile';
import SearchResult from '../searchResults';
import { SearchProvider, defaultContext } from '../../../context/SearchContext';
import { localPerson } from '../../../localDB/localDB';

function SideBar() {


  const [profiles, setProfiles] = useState([]);
  const [addButtonRefresh, setAddButtonRefresh] = useState(false);

  useEffect(() => {
    function addAllProfiles() { // used to add profiles from queue
      const a = localPerson.persons;
      const backIndex = localPerson.backIndex;
      const frontIndex = localPerson.frontIndex;
      const profilesToAdd = []
      for (let i = backIndex; i >= frontIndex; i--) {
        if (a[i] == null) continue;
        const ithPerson = a[i];
        profilesToAdd.push(<UserProfile user={{
          userName: ithPerson.userName,
          emailId: ithPerson.emailId, profileLoc: ithPerson.profileLoc, userId: ithPerson.userId
        }}/>);
      }
      setProfiles(profilesToAdd);
    }
    addAllProfiles();
  }, [addButtonRefresh])

  return (
    <div className='sideBar'>
      <SearchProvider> {/* to search local and db profiles */}
        <Search />
        <SearchResult />
      </SearchProvider>
      {profiles}
    </div>
  )
}

export default SideBar;
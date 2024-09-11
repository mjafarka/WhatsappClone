import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import Search from '../search';
import UserProfile from '../userProfile';
import SearchResult from '../searchResults';
import { SearchProvider, defaultContext } from '../../../context/SearchContext';
import { localPerson } from '../../../localDB/localDB';
import {useSelector, useDispatch} from 'react-redux'
import { convertFireBaseTimeToJsTime, getChatHistoryDoc } from '../../../firebase/firebaseDB';
import { useUser } from '../../../context/UserContext';
import { onSnapshot } from 'firebase/firestore';

function SideBar() {


  const [profiles, setProfiles] = useState([]);
  const refresh = useSelector(state => state.search.refreshBool)
  const user = useUser();

  useEffect(() => {
    const addProfilesFromFS = async () =>{
      const chatHistoryDoc = await getChatHistoryDoc(user.userId);
      const unsubscribe = onSnapshot(chatHistoryDoc, (doc) => {

        if (doc.exists() && 'chatPartners' in doc.data()) {
          const data = doc.data();
          const arrOfPartners = data.chatPartners;

          arrOfPartners.sort((a,b) => convertFireBaseTimeToJsTime(b.lastActivityTimestamp) 
                                    - convertFireBaseTimeToJsTime(a.lastActivityTimestamp));

          const profileComponent = arrOfPartners.map((element) => {
            return <UserProfile key={element.userId} user={{userName: element.userName,
            emailId: element.emailId, profileLoc: element.profileLoc, 
            userId: element.userId}}/>
          });

          setProfiles(profileComponent);
        }
      })

      return () => unsubscribe();
    }
    addProfilesFromFS();
  }, [])

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
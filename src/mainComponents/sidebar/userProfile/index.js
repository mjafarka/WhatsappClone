import React from 'react'
import './index.scss'
import profilePic from '../../../resources/joseph.webp';
import { addToLocalPersons } from '../../../localDB/localDB';
import {useSelector, useDispatch} from 'react-redux'
import { toggleRefresh } from '../../../redux/sideBar/searchSlice';
import {selectProfile} from '../../../redux/sideBar/userSelectSlice'
import { useUser } from '../../../context/UserContext';
import { updateTimeStampOfSelectedUsr } from '../../../firebase/firebaseDB';

function UserProfile(props) {
  const { user, showAdd} = props;
  user.profileLoc = profilePic;
  const dispatch = useDispatch();
  const mainUserInf = useUser();

  const addUserToChat = () => {
    addToLocalPersons(user);
    dispatch(toggleRefresh())
  }

  const startChattingWithPerson = () => {
    dispatch(selectProfile({userId: user.userId}));
    updateTimeStampOfSelectedUsr(mainUserInf.userId,user.userId);
  }

  return (
    <div className='userProfile' onClick={!showAdd ? startChattingWithPerson : undefined}>
      <img src={user.profileLoc} alt='user_photo' className='profilePic' />
      <h3 className='personName'>{user.userName}</h3>
      {showAdd ? <button className='addButton' onClick={() => addUserToChat()}>add</button> : ""}
    </div>
  )
}

export default UserProfile
import React from 'react'
import './index.scss'
import profilePic from '../../../resources/joseph.webp';
import { addToLocalPersons } from '../../../localDB/localDB';
import {useSelector, useDispatch} from 'react-redux'
import { toggleRefresh } from '../../../redux/sideBar/searchSlice';
import {selectProfile} from '../../../redux/sideBar/userSelectSlice'

function UserProfile(props) {
  const { user, showAdd} = props;
  user.profileLoc = profilePic;
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userSelect.userId);

  const addUserToChatt = () => {
    addToLocalPersons(user);
    dispatch(toggleRefresh())
  }

  const startChattingWithPerson = () => {
    dispatch(selectProfile({userId: user.userId}));
  }
  console.log("userId",userId);
  return (
    <div className='userProfile' onClick={() => startChattingWithPerson()}>
      <img src={user.profileLoc} alt='user_photo' className='profilePic' />
      <h3 className='personName'>{user.userName}</h3>
      {showAdd ? <button className='addButton' onClick={() => addUserToChatt()}>add</button> : ""}
    </div>
  )
}

export default UserProfile
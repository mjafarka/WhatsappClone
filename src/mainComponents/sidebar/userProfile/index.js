import React from 'react'
import './index.scss'
import profilePic from '../../../resources/joseph.webp';

function UserProfile(props) {
  const {user} = props; 
  user.profileLoc = profilePic;
  return (
    <div className='userProfile'>
    <img src={user.profileLoc} alt='user_photo' className='profilePic'/>
      <h3 className='personName'>{user.userName}</h3> 
    </div>
  )
}

export default UserProfile
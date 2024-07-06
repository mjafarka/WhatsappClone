import React from 'react'
import './index.scss'
import profilePic from '../../../resources/joseph.webp';

function UserProfile() {
  return (
    <div className='userProfile'>
    <img src={profilePic} alt='user_photo' className='profilePic'/>
      <h3 className='personName'>Muhammed Jafar K A</h3> 
    </div>
  )
}

export default UserProfile
import React from 'react'
import './index.scss'
import Search from '../search';
import UserProfile from '../userProfile';

function SideBar() {

  const profiles = []
  for (let i = 0 ; i < 10 ; i ++ ){
    profiles.push(<UserProfile/>)
  }
  return (
    <div className='sideBar'>
            <Search/>
            {profiles}
    </div>
  )
}

export default SideBar;
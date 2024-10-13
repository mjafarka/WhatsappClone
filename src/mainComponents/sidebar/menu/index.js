import React from 'react'
import './index.scss'
import profilePhoto from '../../../resources/profilephoto.jpg'

function Menu() {
  return (
    <div className='menu bg-[#202C33] w-[3.5rem] flex flex-col items-center'>
      <div className='profilePhoto w-8 h-8 rounded-full overflow-hidden mt-2 mb-6'>
        <img src={profilePhoto} alt='profilePhoto' className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}

export default Menu
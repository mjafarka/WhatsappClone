import React from 'react'
import SideBar from './sidebar/main'
import ChatWindow from './chatWindow/main'
import './index.scss'

const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <ChatWindow/>
    </div>
  )
}

export default Home
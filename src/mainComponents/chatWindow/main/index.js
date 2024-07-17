import React from 'react'
import './index.scss'
import ChatInput from '../ChatInput'
import ChatView from '../chatView'

function ChatWindow() {
  return (
    <div className='chatWindow'>
        <ChatView/>
        <ChatInput/>
    </div>
  )
}

export default ChatWindow
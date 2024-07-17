import React from 'react'
import './index.scss'
import { IoSend } from "react-icons/io5";

function ChatInput() {
  return (
    <div className='chatInput'>
      <input className='textArea'/>
      <IoSend className='toSend'/>
    </div>
  )
}

export default ChatInput
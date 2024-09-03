import React, { useState } from 'react'
import './index.scss'
import { IoSend } from "react-icons/io5";
import { useUser } from '../../../context/UserContext';
import { useSelector } from 'react-redux';
import { sendMessage } from '../../../firebase/firebaseDB';

function ChatInput() {

  const [message, setMessage] = useState("");

  const currentUser = useUser().userId;
  const selectedUser = useSelector(state => state.userSelect.userId);

  const sendMessageChatInput = () => {
    sendMessage(currentUser,selectedUser,message);
    setMessage("");
  }



  console.log("messsage",message);
  return (
    <div className='chatInput'>
      <input className='textArea' onChange={v => setMessage(v.target.value)} value={message}/>
      <IoSend className='toSend' onClick={() => sendMessageChatInput()}/>
    </div>
  )
}

export default ChatInput
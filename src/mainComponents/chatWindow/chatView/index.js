import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import Chat from '../chat'
import { getAllMessages } from '../../../firebase/firebaseDB';
import { useUser } from '../../../context/UserContext';
import { useSelector } from 'react-redux';

//here we are viewing all the chat component
function ChatView() {

  const chatViewRef = useRef();

  useEffect(() => {
        if (chatViewRef.current) {
            chatViewRef.current.scrollTop = chatViewRef.current.scrollHeight;
        }
  }, []);

  useEffect(() => {
        if (chatViewRef.current) {
            chatViewRef.current.scrollTop = chatViewRef.current.scrollHeight;
        }
  });

  const [allMessage,setAllMessage] = useState([]);
  const selectedUser = useSelector(state => state.userSelect.userId); //for chatting with a user
  const user = useUser(); //master user
  console.log("selected user", selectedUser, "master"+user);

  useEffect(() => {
    async function getAllMyMessages (){
      let retrievedMessages = await getAllMessages(selectedUser, user.userId);
      setAllMessage(retrievedMessages);
    }
    getAllMyMessages();
  },[selectedUser]);

  const [allChatComponent,setAllChatComponent] = useState([]);

  useEffect(() => {
    const chatComponent = [];
    allMessage.forEach((chat, index) => {
      const reverseIndex = allMessage.length - 1 - index;
      chatComponent.push(
        <Chat key={reverseIndex}
              message={allMessage[reverseIndex].message}
              alignment={allMessage[reverseIndex].sender === user.userId ? "right" : "left"}/>
      )
    })
    setAllChatComponent(chatComponent);
  },[allMessage])

  return (
    <div ref={chatViewRef} className='chatView'>
      <div className='chatContainer'>
        {allChatComponent}
      </div>
    </div>
  )
}

export default ChatView
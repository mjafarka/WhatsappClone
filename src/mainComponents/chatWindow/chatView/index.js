import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import Chat from '../chat'
import { getAllMessages } from '../../../firebase/firebaseDB';
import { useUser } from '../../../context/UserContext';
import { useSelector,useDispatch } from 'react-redux';
import {insertMessageRedux} from '../../../redux/chatWindow/messageSlice';


//here we are viewing all the chat component
function ChatView() {

  const chatViewRef = useRef();
  const dispatch = useDispatch();


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

  const allMessage = useSelector(state => state.messageSelect.messages); // can set message when user selected and onsnapshot
  const selectedUser = useSelector(state => state.userSelect.userId); //for chatting with a user
  const user = useUser(); //master user
  console.log("selected user", selectedUser, "master"+user);

  useEffect(() => {
    async function getAllMyMessages (){
      let retrievedMessages = await getAllMessages(selectedUser, user.userId);
      dispatch(insertMessageRedux({messages:retrievedMessages}))
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
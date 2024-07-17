import React, { useEffect, useRef } from 'react'
import './index.scss'
import Chat from '../chat'

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
  return (
    <div ref={chatViewRef} className='chatView'>
      <div className='chatContainer'>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        <Chat message={"messsage1"} alignment={"left"}/>
        <Chat message={"message2"} alignment={"right"}/>
        </div>
    </div>
  )
}

export default ChatView
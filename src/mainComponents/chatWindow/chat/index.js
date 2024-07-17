import React from 'react'
import './index.scss'

function Chat(props) {
  const {message, alignment}  = props;
  return (
    <div className={`${alignment} Chat`}>
        {message}
    </div> // we need right and left oriented chats
  )
}

export default Chat
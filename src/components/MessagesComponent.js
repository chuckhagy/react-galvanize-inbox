import React from 'react';
import MessageComponent from './MessageComponent';


export default function MessagesComponent({
  messages,
  selectedMessageIds,
  onReadMessage,
  onStarMessage,
  onUnstarMessage,
  onSelectMessage,
  onDeselectMessage
}){
  if (!messages) return <h5>"No Messages"</h5>;
  return(
    <div>
      {messages.map(message =>
        <MessageComponent
          message={message}
          key={message.id}
          selected={selectedMessageIds.includes(message.id)}
          onReadMessage={onReadMessage}
          onStarMessage={onStarMessage}
          onUnstarMessage={onUnstarMessage}
          onSelectMessage={onSelectMessage}
          onDeselectMessage={onDeselectMessage}
          selectedMessageIds={selectedMessageIds}

      />)}
    </div>
  )
}

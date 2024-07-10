import React, { useState } from "react";

function ChatApp() {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Harsha",
      lastMessage: "I ordered this yesterday",
      timestamp: "10:45 AM",
      unreadCount: 2,
    },
    {
      id: 2,
      name: "Anjali",
      lastMessage: "Should i order this dress or the top???",
      timestamp: "10:40 AM",
      unreadCount: 5,
    },
    {
      id: 3,
      name: "Lochani",
      lastMessage: "Choose one of these tshirts",
      timestamp: "10:30 AM",
      unreadCount: 6,
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setMessages([
      {
        id: 1,
        text: "I ordered this yesterday",
        sender: "Harsha Pareek",
        timestamp: "10:45 AM",
      },
      {
        id: 2,
        text: "Do you like this dress???",
        sender: "You",
        timestamp: "10:40 AM",
      },
    ]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: newMessage,
          sender: "You",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      setNewMessage("");
    }
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <h2>Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id} onClick={() => handleChatSelect(chat)}>
              <div className="chat-info">
                <h3>{chat.name}</h3>
                <p>{chat.lastMessage}</p>
                <span>{chat.timestamp}</span>
                {chat.unreadCount > 0 && (
                  <span className="unread-count">{chat.unreadCount}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedChat && (
        <div className="chat-window">
          <h2>{selectedChat.name}</h2>
          <ul className="messages">
            {messages.map((message) => (
              <li key={message.id}>
                <div className="message">
                  <p>{message.text}</p>
                  <span>{message.timestamp}</span>
                </div>
                {message.sender === "You" && <div className="sender">You</div>}
              </li>
            ))}
          </ul>
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="input-container">
              <input
                type="text"
                value={newMessage}
                onChange={handleInputChange}
                placeholder="Type a message..."
              />
              <i className="send-button" />
              <button onClick={handleSendMessage}>&#8593; Send</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatApp;

import { useState, useRef, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./ChatBot.css"; // Import the CSS file

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how can I assist you today?",
      sender: "chatbot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "RESPONSE RECEIVED",
          sender: "chatbot",
        };
        setMessages([...messages, newMessage, botResponse]);
      }, 1000);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the messages container
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <Avatar className="chatbot-avatar">
          <img src="https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-2478937557.jpg" alt="Chatbot" />
        </Avatar>
        <div className="chatbot-title">Chatbot</div>
      </header>
      <div className="chatbot-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === "user" ? "message-user" : "message-chatbot"}`}
          >
            <Avatar className="message-avatar">
              <img src={`${message.sender === "user" ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : "https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-2478937557.jpg"}`} alt={message.sender} />
            </Avatar>
            <div className="message-bubble">
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {/* This div is used to scroll to the bottom */}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-footer">
        <Input
          type="text"
          placeholder="Type your message..."
          className="chatbot-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className="chatbot-button"
          onClick={handleSendMessage}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import './chatBotInterface.css'

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how can I assist you today?",
      sender: "chatbot",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
      }
      setMessages([...messages, newMessage])
      setInputValue("")
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "RESPONSE RECEIVED",
          sender: "chatbot",
        }
        setMessages([...messages, newMessage, botResponse])
      }, 1000)
    }
  }

  return (
    <div className="chat-container">
      <header className="chat-header">
        <Avatar className="avatar">
          <AvatarImage src="/placeholder-user.jpg" alt="Chatbot" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <div className="text-lg font-medium">Chatbot</div>
      </header>
      <div className="chat-body">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender === "user" ? "user" : ""}`}>
            <Avatar className={`avatar ${message.sender === "user" ? "order-2" : ""}`}>
              <AvatarImage src="/placeholder-user.jpg" alt={message.sender} />
              <AvatarFallback>{message.sender === "user" ? "YO" : "CB"}</AvatarFallback>
            </Avatar>
            <div className={`message-content ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <Input
          type="text"
          placeholder="Type your message..."
          className="input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage()
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className="send-button"
          onClick={handleSendMessage}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

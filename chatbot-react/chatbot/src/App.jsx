import { useState } from "react";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { id: "1", message: "hello chatbot", sender: "user" },
    { id: "2", message: "hey! how can I help you?", sender: "robot" },
    { id: "3", message: "please tell me the date", sender: "user" },
    {
      id: "4",
      message: "Sure! today is 12 February 2026",
      sender: "robot",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;

import { Chatbot } from "supersimpledev";
import { useState } from "react";
import "./ChatInput.css";

export default function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveChatMessages() {
    /*
          const newChatMessages = [
            ...chatMessages,
            { id: crypto.randomUUID(), message: inputText, sender: "user" },
          ];

          setChatMessages(newChatMessages);*/

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...chatMessages,
      { id: crypto.randomUUID(), message: inputText, sender: "user" },
      { id: crypto.randomUUID(), message: response, sender: "robot" },
    ]);
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size="30"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        className="chat-input"
      />
      <button onClick={saveChatMessages} className="send-button">
        Send
      </button>
    </div>
  );
}

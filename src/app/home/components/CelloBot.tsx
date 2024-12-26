"use client";

import React, { useRef, useEffect } from "react";
import ChatBubble from "./ChatBot/ChatBubble";
import ChatInput from "./ChatBot/ChatInput";
import { useChatLogic } from "@/hooks/useChatLogic";

const CelloBot: React.FC = () => {
  const { messages, userInput, handleInputChange, handleSubmit } = useChatLogic();
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container card w-full h-[75vh] lg:w-3/4 bg-white shadow-xl flex flex-col justify-between mx-auto my-8">
      <div
        ref={bodyRef}
        className="card-body overflow-y-auto flex-grow"
        style={{ paddingBottom: "100px" }}
      >
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg} />
        ))}
      </div>
      <ChatInput
        userInput={userInput}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CelloBot;

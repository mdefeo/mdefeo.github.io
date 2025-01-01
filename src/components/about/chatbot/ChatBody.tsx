"use client";
import React from "react";
import ChatMessage from "./ChatMessage";
import { ChatBodyProps } from "@/types/ChatProps";


const ChatBody: React.FC<ChatBodyProps> = ({ messages, bodyRef }) => {
  return (
    <div
      ref={bodyRef as React.RefObject<HTMLDivElement>}
      className="card-body overflow-y-auto flex-grow p-4"
      aria-live="polite"
    >
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          message={msg.message}
          type={msg.type}
          isError={msg.isError}
        />
      ))}
    </div>
  );
};

export default ChatBody;

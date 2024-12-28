"use client";

import Avatar from "./Avatar";
import { ChatMessageProps } from "@/types/ChatMessageProps";
import { sanitizeHTML } from "@/utils/sanitizeHTML";

const ChatMessage: React.FC<ChatMessageProps> = ({ message, type, isError }) => {
  return (
    <div className={`chat ${type === "user" ? "chat-end" : "chat-start"}`}>
      <Avatar type={type} />
      <div
        className={`chat-bubble ${
          isError ? "bg-red-200 text-red-700" : "bg-gray-200"
        }`}
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(message) }}
        role="alert"
        aria-live={isError ? "assertive" : "polite"}
      ></div>
    </div>
  );
};

export default ChatMessage;

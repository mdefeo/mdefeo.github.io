// /src/components/about/chatbot/ChatMessage.tsx
"use client";

import { sanitizeHTML } from "@/utils/sanitizeHTML";
import Avatar from "./Avatar";
import { ChatMessageProps } from "@/types/ChatMessageProps";

const ChatMessage: React.FC<ChatMessageProps> = ({ message, type, isError }) => {
  const sanitizedMessage = sanitizeHTML(message);

  return (
    <div className={`chat ${type === "user" ? "chat-end" : "chat-start"}`}>
      <Avatar type={type} />
      <div
        className={`chat-bubble ${
          isError ? "bg-red-200 text-red-700" : "bg-gray-200"
        }`}
        dangerouslySetInnerHTML={{ __html: sanitizedMessage }}
        role="alert"
        aria-live={isError ? "assertive" : "polite"}
      ></div>
    </div>
  );
};

export default ChatMessage;
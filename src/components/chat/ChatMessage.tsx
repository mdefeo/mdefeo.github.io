"use client";
import { sanitizeHTML } from "@/utils/sanitizeHTML";
import Avatar from "./Avatar";
import { ChatMessageProps } from "@/types/ChatProps";

const ChatMessage: React.FC<ChatMessageProps> = ({ message, type, isError }) => {
  const sanitizedMessage = sanitizeHTML(message);

  return (
    <div className={`chat ${type === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <Avatar type={type} />
      </div>
      <div
        className={`chat-bubble ${
          isError
            ? "bg-red-200 text-red-700"
            : type === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-100 text-gray-400"
        }`}
        role="alert"
        aria-live={isError ? "assertive" : "polite"}
      >
        {message === "..." ? (
          <span className="loading loading-dots loading-sm">...</span>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: sanitizedMessage }} />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
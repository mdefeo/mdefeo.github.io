import React from "react";
import Image from "next/image";

interface ChatBubbleProps {
  message: { message: React.ReactNode; type: "bot" | "user"; isError: boolean };
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <div className={`chat ${message.type === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar bot-avatar">
        <div className="w-10 rounded-full">
          <Image
            src={message.type === "user" ? "/user-avatar.png" : "/bot-avatar.png"}
            alt="Avatar"
            width={48}
            height={48}
            className="hover:animate-spin"
          />
        </div>
      </div>
      <div className="chat-bubble">{message.message}</div>
    </div>
  );
};

export default ChatBubble;

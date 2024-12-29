// /src/app/about/sections/Chat.tsx
"use client";

import ChatContainer from "@/components/about/chatbot/ChatContainer";

export default function Chat() {
  return (
    <section aria-labelledby="chat-heading" role="contentinfo">
      <h2 id="chat-heading">Chat</h2>
      <ChatContainer />
    </section>
  );
}

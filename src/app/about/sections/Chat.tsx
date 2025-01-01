"use client";
import ChatContainer from "@/components/about/chatbot/ChatContainer";
import SectionHeader from "@/components/SectionHeading";

export default function Chat() {
  return (
    <section
      aria-labelledby="chat-heading"
      role="contentinfo"
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen"
    >
      <div className="lg:w-5/12 p-4 hidden lg:flex lg:flex-col lg:justify-center">
        <SectionHeader id="chat" name="Chat" />
        <p className="mb-4">Welcome to the chat section. Here you can interact with our chatbot.</p>
        <p className="mb-4">Feel free to ask any questions or get more information about our services.</p>
        <p className="mb-4">Our chatbot is here to assist you with any inquiries you may have.</p>
      </div>
      <div className="lg:w-7/12 p-4 w-full flex justify-center items-center">
        <ChatContainer />
      </div>
    </section>
  );
} 
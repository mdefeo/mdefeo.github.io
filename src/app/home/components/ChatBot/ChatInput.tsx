import React from "react";

interface ChatInputProps {
  userInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ userInput, onChange, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className="flex items-center justify-between gap-2 p-4 bg-white border-t"
  >
    <input
      autoFocus
      type="text"
      placeholder="Ask me anything..."
      className="input input-bordered w-full"
      value={userInput}
      onChange={onChange}
    />
    <button
      className="btn btn-neutral"
      type="submit"
      disabled={userInput.length < 3}
    >
      Ask
    </button>
  </form>
);

export default ChatInput;

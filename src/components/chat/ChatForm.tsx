"use client";
import { ChatFormProps } from "@/types/ChatProps";

const ChatForm: React.FC<ChatFormProps> = ({ userInput, setUserInput, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-2 p-4 bg-white border-t border-gray-200"
    >
      <input
        autoFocus
        type="text"
        id="userInput"
        placeholder="Ask me anything..."
        className="input w-full bg-gray-100 text-gray-600"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        aria-label="Type your question"
      />
      <button
        className="btn bg-gray-500 border-none text-white disabled:bg-gray-300  disabled:text-white hover:bg-blue-600 hover:shadow-lg"
        type="submit"
        disabled={userInput.length < 3}
        title={
          userInput.length < 3
            ? "You can only submit a question if three or more characters have been typed."
            : ""
        }
      >
        Ask
      </button>
    </form>
  );
};

export default ChatForm;
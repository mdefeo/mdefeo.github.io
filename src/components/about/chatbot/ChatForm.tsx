"use client";

interface ChatFormProps {
  userInput: string;
  setUserInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

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
        className="input input-bordered w-full"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        aria-label="Type your question"
      />
      <button
        className="btn btn-neutral"
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

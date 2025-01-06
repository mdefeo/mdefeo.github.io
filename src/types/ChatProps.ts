export interface AvatarProps {
  type: "bot" | "user";
}
export interface ChatBodyProps {
  messages: { message: string; type: "bot" | "user"; isError: boolean }[];
  bodyRef: React.RefObject<HTMLDivElement | null>;
}

export interface ChatMessageProps {
  message: string;
  type: "bot" | "user";
  isError: boolean;
}

export interface ChatFormProps {
  userInput: string;
  setUserInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}
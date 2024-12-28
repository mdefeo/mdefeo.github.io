export interface ChatMessageProps {
  message: string;
  type: "bot" | "user";
  isError: boolean;
}

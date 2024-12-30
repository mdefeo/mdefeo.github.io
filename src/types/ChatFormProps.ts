export interface ChatFormProps {
  userInput: string;
  setUserInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}
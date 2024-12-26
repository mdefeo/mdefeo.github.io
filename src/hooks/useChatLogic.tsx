import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import bioData from "@/data/bio.json";
import curseWords from "@/data/cursewords.json";
import keywords from "@/data/keywords.json";
import jokes from "@/data/jokes.json";

export const useChatLogic = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<
    { message: React.ReactNode; type: "bot" | "user"; isError: boolean }[]
  >([
    {
      message:
        "Hello, I'm bot.cello, the virtual Marcello. How can I help you today?",
      type: "bot",
      isError: false,
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      addMessage(
        "Just so you know, I am in the alpha phase of development. So, I am still learning and growing. I may make some mistakes and apologize in advance for them.",
        "bot",
        false
      );
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const addMessage = (
    message: React.ReactNode,
    type: "bot" | "user",
    isError: boolean
  ) => {
    setMessages((prev) => [...prev, { message, type, isError }]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedInput = DOMPurify.sanitize(userInput);
    const normalizedInput = sanitizedInput.toLowerCase().split(/\s+/);

    addMessage(sanitizedInput, "user", false);

    if (normalizedInput.some((word) => curseWords.includes(word))) {
      addMessage(
        "Watch your language! This is a family-friendly bot.",
        "bot",
        true
      );
    } else if (/joke|funny/i.test(sanitizedInput)) {
      const randomJoke =
        jokes[Math.floor(Math.random() * jokes.length)];
      addMessage(randomJoke, "bot", false);
    } else {
      const replyMessage = searchInBioData(sanitizedInput);
      addMessage(replyMessage.message, replyMessage.type, false);
    }

    setUserInput("");
  };

  const searchInBioData = (
    query: string
  ): { message: React.ReactNode; type: "bot" | "user" } => {
    const bioDataKey = Object.entries(keywords).find(([keyword]) =>
      query.toLowerCase().includes(keyword.toLowerCase())
    )?.[1];

    if (bioDataKey) {
      const bioDataValue = bioData[bioDataKey as keyof typeof bioData];
      return {
        message: formatBioDataValue(bioDataValue),
        type: "bot",
      };
    }

    return {
      message: `I'm sorry, but I do not know how to respond to "${query}" yet. I am still learning, though!`,
      type: "bot",
    };
  };

  const formatBioDataValue = (value: unknown): React.ReactNode => {
    if (Array.isArray(value)) {
      return value.map((item, index) => <p key={index}>{String(item)}</p>);
    }
    if (typeof value === "object" && value !== null) {
      return Object.entries(value).map(([key, val], index) => (
        <p key={index}>
          <strong>{key}:</strong> {String(val)}
        </p>
      ));
    }
    return <p>{String(value)}</p>;
  };

  return {
    messages,
    userInput,
    handleInputChange,
    handleSubmit,
  };
};

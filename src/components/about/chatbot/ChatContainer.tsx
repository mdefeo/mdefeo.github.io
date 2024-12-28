"use client";

import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";
import { useState, useRef, useEffect } from "react";
import DOMPurify from "dompurify";
import bioDataJson from "@/data/json/bio.json";
import curseWordsJson from "@/data/json/cursewords.json";
import keywordsJson from "@/data/json/keywords.json";
import jokesJson from "@/data/json/jokes.json";
import { KeywordMap } from "@/interfaces/KeywordMap";
import { BioDataType } from "@/interfaces/BioDataType";

const curseWords: string[] = curseWordsJson;
const keywordMap: KeywordMap = keywordsJson;
const bioData: BioDataType = bioDataJson;

const ChatContainer: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<
    { message: string; type: "bot" | "user"; isError: boolean }[]
  >([
    {
      message: "Hello, I'm bot.cello, the virtual Marcello. How can I help you today?",
      type: "bot",
      isError: false,
    },
  ]);

  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (message: string, type: "bot" | "user", isError: boolean) => {
    setMessages((prev) => [...prev, { message, type, isError }]);
  };

  const handleSubmit = (sanitizedInput: string) => {
    const normalizedInput = sanitizedInput.toLowerCase().split(/\s+/);

    addMessage(sanitizedInput, "user", false);

    if (normalizedInput.some((word) => curseWords.includes(word))) {
      addMessage(
        "Watch your language! This is a family-friendly bot.",
        "bot",
        true
      );
    } else if (/joke|funny/i.test(sanitizedInput)) {
      const randomJoke = jokesJson[Math.floor(Math.random() * jokesJson.length)];
      addMessage(randomJoke, "bot", false);
    } else {
      const replyMessage = searchInBioData(sanitizedInput);
      addMessage(replyMessage.message, replyMessage.type, false);
    }

    setUserInput("");
  };

  const searchInBioData = (
    query: string
  ): { message: string; type: "bot" | "user" } => {
    const bioDataKey = Object.entries(keywordMap).find(([keyword]) =>
      query.toLowerCase().includes(keyword.toLowerCase())
    )?.[1];

    if (bioDataKey) {
      const bioDataValue = bioData[bioDataKey as keyof BioDataType];
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

  const formatBioDataValue = (value: unknown): string => {
    if (Array.isArray(value)) {
      return value
        .map((item) => `<p class="mb-3">${JSON.stringify(item)}</p>`)
        .join("");
    } else if (typeof value === "object" && value !== null) {
      return Object.entries(value as Record<string, unknown>)
        .map(([key, val]) => `<p class="mb-3">${key}: ${val}</p>`)
        .join("");
    }
    return `<p class="mb-3">${String(value)}</p>`;
  };

  return (
    <div className="chat-container card w-full h-[75vh] min-h-3.5 lg:w-3/4 bg-white shadow-xl flex flex-col justify-between mx-auto my-8">
      <ChatBody messages={messages} bodyRef={bodyRef} />
      <ChatForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={(e) => {
          e.preventDefault();
          const sanitizedInput = DOMPurify.sanitize(userInput);
          handleSubmit(sanitizedInput);
        }}
      />
    </div>
  );
};

export default ChatContainer;

import React, { useState, useRef, useEffect } from "react";
import { Img } from 'react-image';
import DOMPurify from "dompurify";
import bioDataJson from "../../data/bio.json";
import curseWordsJson from "../../data/cursewords.json";
import keywordsJson from "../../data/keywords.json";
import jokesJson from "../../data/jokes.json";
import { KeywordMap } from "../../interfaces/KeywordMap";
import { BioDataType } from "../../interfaces/BioData";

const curseWords: string[] = curseWordsJson;
const keywordMap: KeywordMap = keywordsJson;
const bioData: BioDataType = bioDataJson;

const CelloBot: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<
    { message: string; type: "bot" | "user"; isError: boolean }[]
  >([
    {
      message:
        "Hello, I'm bot.cello, the virtual Marcello. How can I help you today?",
      type: "bot",
      isError: false,
    },
  ]);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the latest message
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Initial bot greeting
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
    message: string,
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
        jokesJson[Math.floor(Math.random() * jokesJson.length)];
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

  const formatBioDataValue = (value: any): string => {
    if (Array.isArray(value)) {
      return value
        .map((item) => `<p class="mb-3">${JSON.stringify(item)}</p>`)
        .join("");
    } else if (typeof value === "object" && value !== null) {
      return Object.entries(value)
        .map(([key, val]) => `<p class="mb-3">${key}: ${val}</p>`)
        .join("");
    }
    return `<p class="mb-3">${value}</p>`;
  };

  return (
    <div className="chat-container card w-full h-[75vh] min-h-3.5 lg:w-3/4 bg-white shadow-xl flex flex-col justify-between mx-auto my-8">
      <div
        ref={bodyRef}
        className="card-body overflow-y-auto flex-grow"
        style={{ paddingBottom: "100px" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat ${
              msg.type === "user" ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar bot-avatar">
              <div className="w-10 rounded-full hover:animate-spin">
                <Img
                  src={
                    msg.type === "user" ? "/user-avatar.png" : "/bot-avatar.png"
                  }
                  alt="Avatar"
                  style={{ width: 48, height: 48 }}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className="chat-bubble"
              dangerouslySetInnerHTML={{ __html: msg.message }}
            ></div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
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
            onChange={handleInputChange}
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
      </div>
    </div>
  );

};

export default CelloBot;

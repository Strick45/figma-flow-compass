
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";

interface Message {
  id: number;
  text: string;
  isSent: boolean;
  timestamp: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to FigmaFlow Compass! How can I help you today?",
      isSent: false,
      timestamp: "9:00 AM",
    },
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isSent: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex h-screen flex-col bg-chatbg">
      <header className="border-b border-white/10 bg-bubble p-4">
        <h1 className="text-center text-lg font-semibold text-white">
          FigmaFlow Compass
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isSent={message.isSent}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </main>

      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default Index;

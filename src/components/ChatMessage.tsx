
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isSent: boolean;
  timestamp?: string;
}

export const ChatMessage = ({ message, isSent, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-message-appear",
        isSent ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 text-white",
          isSent ? "bg-accent" : "bg-bubble"
        )}
      >
        <p className="text-sm md:text-base">{message}</p>
        {timestamp && (
          <p className="mt-1 text-right text-xs text-white/70">{timestamp}</p>
        )}
      </div>
    </div>
  );
};

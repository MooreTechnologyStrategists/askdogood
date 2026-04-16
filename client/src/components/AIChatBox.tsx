import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

type AIChatBoxProps = {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  height?: string;
  emptyStateMessage?: string;
  suggestedPrompts?: string[];
  className?: string;
};

export function AIChatBox({
  messages,
  onSendMessage,
  isLoading = false,
  placeholder = "Type a message...",
  height = "420px",
  emptyStateMessage = "Start a conversation",
  suggestedPrompts = [],
  className,
}: AIChatBoxProps) {
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const visibleMessages = messages.filter((m) => m.role !== "system");

  const submit = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSendMessage(trimmed);
    setInput("");
  };

  return (
    <div className={cn("rounded-xl border bg-card", className)}>
      <ScrollArea className="p-4" style={{ height }}>
        {visibleMessages.length === 0 ? (
          <div className="space-y-4 text-center">
            <p className="text-sm text-muted-foreground">{emptyStateMessage}</p>
            {suggestedPrompts.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {suggestedPrompts.map((prompt) => (
                  <Button
                    key={prompt}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onSendMessage(prompt)}
                    disabled={isLoading}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {visibleMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={cn(
                  "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="max-w-[85%] rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
                Thinking...
              </div>
            )}
            <div ref={endRef} />
          </div>
        )}
      </ScrollArea>
      <div className="flex gap-2 border-t p-3">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          placeholder={placeholder}
          disabled={isLoading}
        />
        <Button type="button" onClick={submit} disabled={isLoading || !input.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default AIChatBox;

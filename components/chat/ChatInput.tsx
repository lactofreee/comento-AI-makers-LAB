import { useState, KeyboardEvent, useRef, useEffect } from "react"
import { SendHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatInputProps {
  onSendMessage: (content: string) => void
  isLoading: boolean
}

export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input automatically on mount
  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus()
    }
  }, [isLoading])

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input)
      setInput("")
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex w-full items-center space-x-2 bg-background p-4">
      <Input
        ref={inputRef}
        placeholder={isLoading ? "Waiting for response..." : "Type a message..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        className="flex-1"
      />
      <Button 
        onClick={handleSend} 
        disabled={!input.trim() || isLoading}
        size="icon"
      >
        <SendHorizontal className="h-4 w-4" />
        <span className="sr-only">Send</span>
      </Button>
    </div>
  )
}

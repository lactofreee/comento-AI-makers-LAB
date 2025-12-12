"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { useChat } from "@/hooks/useChat"
import { MessageBubble } from "@/components/chat/MessageBubble"
import { ChatInput } from "@/components/chat/ChatInput"
import { Button } from "@/components/ui/button"
import { useRef, useEffect } from "react"

export default function ChatPage() {
  const { messages, sendMessage, isLoading } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom directly on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex h-screen flex-col bg-muted/10">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center border-b bg-background/95 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Button variant="ghost" size="icon" asChild className="mr-4 hover:bg-muted">
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Home</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-lg font-semibold leading-tight">ChatBot</h1>
          <p className="text-xs text-muted-foreground">Always online</p>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-3xl space-y-4">
          {messages.length === 0 ? (
            <div className="flex h-[50vh] flex-col items-center justify-center text-muted-foreground">
              <p className="mb-2 text-lg font-medium">No messages yet</p>
              <p className="text-sm">Start the conversation by typing a message below.</p>
            </div>
          ) : (
            messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))
          )}
          {isLoading && (
            <div className="flex w-full justify-start">
              <div className="flex max-w-[70%] items-center space-x-2 rounded-lg bg-gray-100 px-4 py-3 text-sm dark:bg-gray-800">
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-75"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-150"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 border-t bg-background p-4 shadow-top">
        <div className="mx-auto max-w-3xl">
          <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { MessageSquareText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md text-center border-none shadow-xl bg-background/50 backdrop-blur-sm">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <MessageSquareText className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">AI Chat Assistant</CardTitle>
          <CardDescription className="text-base mt-2">
            Experience the future of conversation. Simple, fast, and intelligent.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <Button asChild size="lg" className="w-full text-base font-semibold h-12 shadow-md transition-all hover:scale-105 active:scale-95">
            <Link href="/chat">
              Start Chatting
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            Powered by Next.js 14 & Tailwind CSS
          </p>
        </CardContent>
      </Card>
    </main>
  )
}

"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  SendIcon,
  Moon,
  Sun,
  Settings,
  User,
  MessageSquare,
  HelpCircle,
  Sparkles,
  History,
  Bookmark,
} from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!input.trim() || isLoading) return

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: input.trim(),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      try {
        const response = await fetch("/api/ai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: [...messages, userMessage] }),
        })

        if (!response.ok) {
          throw new Error("AI response error")
        }

        const data = await response.json()

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.response,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiMessage])
      } catch (error) {
        console.error("Error fetching AI response:", error)
        // Handle error (e.g., show error message to user)
      } finally {
        setIsLoading(false)
      }
    },
    [input, isLoading, messages],
  )

  // Example saved conversations
  const savedConversations = [
    { id: 1, title: "Project Ideas", date: "2 days ago" },
    { id: 2, title: "Code Review Help", date: "1 week ago" },
    { id: 3, title: "Learning Resources", date: "2 weeks ago" },
  ]

  return (
    <div className={`min-h-screen bg-background`}>
      {/* Header */}
      <header className="border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h1 className="font-bold text-lg">
            <Link href='/' style={{textDecoration:"none",}}>
            dunamisAI
            </Link>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} id="dark-mode" />
            <Moon className="h-4 w-4" />
          </div>

          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex h-[calc(100vh-57px)]">
        {/* Sidebar */}
        {showSidebar && (
          <aside className="w-64 border-r p-4 flex flex-col">
            <Button variant="outline" className="mb-4 justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              New Chat
            </Button>

            <Tabs defaultValue="history" className="flex-1">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>

              <TabsContent value="history" className="mt-4 space-y-2">
                <div className="text-sm font-medium">Recent Conversations</div>
                {savedConversations.map((convo) => (
                  <div key={convo.id} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
                    <History className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1 truncate">
                      <div className="text-sm">{convo.title}</div>
                      <div className="text-xs text-muted-foreground">{convo.date}</div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="saved" className="mt-4 space-y-2">
                <div className="text-sm font-medium">Bookmarked Chats</div>
                {savedConversations.slice(0, 2).map((convo) => (
                  <div key={convo.id} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
                    <Bookmark className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1 truncate">
                      <div className="text-sm">{convo.title}</div>
                      <div className="text-xs text-muted-foreground">{convo.date}</div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>

            <div className="mt-auto space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help & FAQ
              </Button>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <div className="p-4 flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setShowSidebar(!showSidebar)} className="mr-2">
              {showSidebar ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </Button>
            <div>
              <h2 className="text-lg font-medium">Current Chat</h2>
              <p className="text-sm text-muted-foreground">Started {format(new Date(), "MMM d, yyyy")}</p>
            </div>
          
          </div>

          <Separator />

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 max-w-3xl mx-auto">
              {/* Welcome message */}
              {messages.length === 0 && (
                <div className="bg-muted/50 rounded-lg p-6 text-center space-y-4">
                  <Sparkles className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-xl font-medium">Welcome to AngolaAI</h3>
                  <p className="text-muted-foreground">
                    I'm here to help with your questions, provide information, and assist with various tasks. What would
                    you like to talk about today?
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Button variant="outline" onClick={() => setInput("What can you help me with?")}>
                      What can you help me with?
                    </Button>
                    <Button variant="outline" onClick={() => setInput("Tell me about yourself")}>
                      Tell me about yourself
                    </Button>
                    <Button variant="outline" onClick={() => setInput("How do I use this chat?")}>
                      How do I use this chat?
                    </Button>
                    <Button variant="outline" onClick={() => setInput("What's new in AI?")}>
                      What's new in AI?
                    </Button>
                  </div>
                </div>
              )}

              {/* Chat messages */}
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="flex items-start gap-3 max-w-[80%]">
                    {message.role !== "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <div
                        className={`text-xs mt-1 ${message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                      >
                        {format(message.timestamp, "h:mm a")}
                      </div>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-slate-200">U</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-3 max-w-[80%]">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-2 bg-muted">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse"></div>
                        <div
                          className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input area */}
          <div className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-3xl mx-auto">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <SendIcon className="h-4 w-4" />
              </Button>
            </form>
            <div className="text-xs text-center text-muted-foreground mt-2 max-w-3xl mx-auto">
              AngolaAI may produce inaccurate information about people, places, or facts.
              <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                Learn more
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


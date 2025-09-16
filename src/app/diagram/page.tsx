"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, X, Home, FileText, FolderOpen, Settings, Plus, Save, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactFlowCanvas from "@/components/ui/ReactFlow"
import axios from "axios"

interface ChatMessage {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

export default function SystemDesigner() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [chatOpen, setChatOpen] = useState(true)
  const [chatInput, setChatInput] = useState("")
  const [node, setNode] = useState(null)
  const [edge, setEdge] = useState(null)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Welcome to AI System Designer! I can help you create architecture diagrams. What would you like to build?",
      timestamp: new Date(),
    },
  ])

  // Load initial prompt from localStorage
  useEffect(() => {
    const savedPrompt = localStorage.getItem("systemPrompt")
    if (savedPrompt) {
      const promptMessage: ChatMessage = {
        id: Date.now().toString(),
        type: "user",
        content: savedPrompt,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, promptMessage])

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content:
            "Perfect! I've analyzed your requirements and generated a system architecture diagram. You can see it in the canvas and modify it as needed.",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiResponse])
      }, 1500)

      localStorage.removeItem("systemPrompt")
    }
  }, [])

  const handleSendMessage = async() => {
    if (!chatInput.trim()) return

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: chatInput,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setChatInput("")

    const res = await axios.post("/api/ai", { prompt: chatInput });
    
    const data = JSON.parse(`${res.data.result}`)
    setNode(data.nodes);
    setEdge(data.edges);

    const aiResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content:
        "Got it! I've updated the architecture diagram based on your input. Check out the changes in the canvas.",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, aiResponse])
  }

  return (
    <div className="h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
      {/* Top Navbar */}
      <div className="h-16 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 relative z-50">
        <div className="flex items-center gap-4">
          {!sidebarOpen && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white hover:bg-white/10"
            >
              <Menu className="h-4 w-4" />
            </Button>
          )}
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI System Designer
          </h1>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </div>

      <div className="flex h-[calc(100vh-4rem)] relative">
        {/* Left Sidebar */}
        <div
          className={cn(
            "bg-black/40 backdrop-blur-xl border-r border-white/10 transition-all duration-300 flex flex-col relative z-40",
            sidebarOpen ? "w-80" : "w-0 overflow-hidden",
            "lg:relative absolute inset-y-0 left-0",
          )}
        >
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">AI</span>
                </div>
                <span className="font-semibold text-white">AItecture</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-white/10 hover:text-white">
                <Home className="h-4 w-4 mr-3" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
              >
                <FileText className="h-4 w-4 mr-3" />
                Designs
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-white/10 hover:text-white">
                <FolderOpen className="h-4 w-4 mr-3" />
                Saved Projects
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-white/10 hover:text-white">
                <Settings className="h-4 w-4 mr-3" />
                Settings
              </Button>
            </nav>
          </div>

          <div className="flex-1" />

          <div className="p-6 border-t border-white/10">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25">
              <Plus className="h-4 w-4 mr-2" />
              New Design
            </Button>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className={cn("flex-1 flex flex-col transition-all duration-300", chatOpen ? "mr-96" : "mr-0")}>
          <div className="flex-1 p-6">
            <div className="h-full bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 relative overflow-hidden">
              {/* ReactFlow Canvas */}
              <div className="absolute inset-0">
                <ReactFlowCanvas node={node} edge={edge}/>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chat Panel */}
        <div
          className={cn(
            "w-96 bg-black/40 backdrop-blur-xl border-l border-white/10 flex flex-col transition-all duration-300 absolute right-0 top-0 bottom-0 z-30",
            chatOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="font-semibold text-white">AI Assistant</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "p-3 rounded-lg max-w-[85%] transition-all duration-200 hover:scale-[1.02]",
                    message.type === "user"
                      ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 ml-auto shadow-lg shadow-green-500/10"
                      : "bg-gray-800/50 border border-gray-600/30 shadow-lg",
                  )}
                >
                  <p className="text-sm text-white">{message.content}</p>
                  <span className="text-xs text-gray-400 mt-1 block">{message.timestamp.toLocaleTimeString()}</span>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Describe changes to your architecture..."
                className="flex-1 bg-black/20 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Toggle Button (when chat is closed) */}
        {!chatOpen && (
          <Button
            onClick={() => setChatOpen(true)}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg"
            size="sm"
          >
            <Menu className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

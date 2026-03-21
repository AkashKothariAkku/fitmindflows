import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Ensure the API key exists
const API_KEY = (import.meta as any).env?.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_INSTRUCTION = `You are the official AI Wellness Assistant for "FitMindFlow", a premium health and fitness company. 
Your tone should be professional, encouraging, empathetic, and highly knowledgeable.
CRITICAL RULES:
1. You may ONLY answer questions related to health, fitness, nutrition, wellness, exercise, and mental well-being.
2. If a user asks a question completely unrelated to these topics (e.g., coding, politics, history, math, random facts), you MUST politely decline and steer the conversation back to fitness. (Example: "As the FitMindFlow wellness assistant, I specialize in health and fitness. How can I support your fitness journey today?")
3. Provide concise, clear, and safe advice. Always recommend consulting a doctor for injuries or severe pain.
4. Keep responses relatively short, suitable for a chat interface (max 2-3 short paragraphs). Add emojis sparingly.`;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your FitMindFlow wellness assistant. How can I help you reach your goals today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Maintain the Gemini ChatSession history format separately
  const [chatHistory, setChatHistory] = useState<{role: 'user'|'model', parts: {text: string}[]}[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    if (questionCount >= 20) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setIsTyping(true);
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "If you need a proper guide or a tailored plan, I'll connect you to our human experts ASAP! Please fill out the consultation form on our website to continue.",
          sender: "bot",
          timestamp: new Date(),
        };
        setIsTyping(false);
        setMessages((prev) => [...prev, botMessage]);
      }, 1500);
      return;
    }

    const currentInput = inputValue;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentInput,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setQuestionCount((prev) => prev + 1);

    // AI Logic
    try {
      if (!API_KEY) {
        throw new Error("MISSING_API_KEY");
      }

      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }], role: "model" }
      });

      const chat = model.startChat({
        history: chatHistory,
      });

      const result = await chat.sendMessage(currentInput);
      const responseText = result.response.text();

      // Update history for context awareness
      setChatHistory((prev) => [
        ...prev,
        { role: 'user', parts: [{ text: currentInput }] },
        { role: 'model', parts: [{ text: responseText }] }
      ]);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      let errorMessage = "I'm having a little trouble connecting to my neural network right now. What were you saying?";
      
      if (error.message === "MISSING_API_KEY") {
        errorMessage = "It looks like the AI has not been fully configured! We need a Gemini API Key to activate my brain.\n\n1. Go to Google AI Studio to get a free API Key.\n2. Create a file named `.env` in the root folder.\n3. Add this line: `VITE_GEMINI_API_KEY=your_key_here`\n4. Restart your preview server!";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorMessage,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-120px)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-border bg-muted/30">
              <h3 className="font-semibold">Wellness Assistant</h3>
              <p className="text-xs text-muted-foreground mt-1">
                We typically reply in a few minutes
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-hidden relative">
              <ScrollArea className="absolute inset-0 p-4 overflow-y-auto">
                <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 whitespace-pre-wrap ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-muted text-foreground flex space-x-1 items-center h-[36px]">
                      <motion.div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                      <motion.div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                      <motion.div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                    </div>
                  </div>
                )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-3 flex space-x-2 overflow-x-auto hide-scrollbar bg-card">
              <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>
              {["Weight loss", "Gain muscle", "Diet plan", "Consultation"].map((action) => (
                <button
                  key={action}
                  onClick={() => {
                    if (inputValue.length === 0) {
                        setInputValue(action);
                    }
                  }}
                  className="whitespace-nowrap flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background shrink-0">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";

type Message = {
    role: "user" | "assistant";
    text: string;
};

// Typing indicator component
const TypingIndicator = () => (
    <div className="flex space-x-1 p-2">
        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
);

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            const res = await fetch("http://localhost:5001/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            const botMsg: Message = { role: "assistant", text: data.reply };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMsg: Message = {
                role: "assistant",
                text: "Sorry, I encountered an error. Please try again."
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    const toggleChat = () => {
        if (isOpen) {
            setIsMinimized(!isMinimized);
        } else {
            setIsOpen(true);
            setIsMinimized(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
            {isOpen && !isMinimized && (
                <div className="w-80 h-[500px] bg-white dark:bg-zinc-900 shadow-2xl rounded-xl flex flex-col overflow-hidden border border-gray-200 dark:border-zinc-700 transform transition-all duration-300 ease-in-out">
                    {/* Header */}
                    <div className="bg-black text-white p-4 flex justify-between items-center">
                        <h3 className="font-semibold text-lg">MyTherapy Assistant</h3>
                        <div className="flex space-x-2">
                            <button 
                                onClick={() => setIsMinimized(true)}
                                className="text-white hover:bg-white hover:text-black p-1 rounded-full transition-colors"
                                aria-label="Minimize"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white hover:text-black p-1 rounded-full transition-colors"
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div 
                        className="flex-1 overflow-y-auto p-4 space-y-3 text-sm bg-white dark:bg-zinc-900"
                        ref={chatRef}
                    >
                        {messages.length === 0 ? (
                            <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400 text-center p-4">
                                <div>
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <p className="mt-2">How can I help you today?</p>
                                </div>
                            </div>
                        ) : (
                            messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                                            msg.role === "user"
                                                ? "bg-black text-white rounded-br-none"
                                                : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-100 rounded-bl-none"
                                        }`}
                                    >
                                        <p className="whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                </div>
                            ))
                        )}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="max-w-[85%] rounded-2xl px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-100 rounded-bl-none">
                                    <TypingIndicator />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input area */}
                    <div className="p-3 border-t border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                        <div className="flex items-end space-x-2">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    className="w-full pl-4 pr-10 py-2.5 text-sm rounded-full border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 disabled:opacity-70"
                                    disabled={isTyping}
                                    placeholder="Type your message..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={!input.trim() || isTyping}
                                    className="absolute right-2 bottom-1.5 p-1.5 text-black hover:text-black dark:text-white dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Send message"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat toggle button */}
            <button
                onClick={toggleChat}
                className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                    isOpen && !isMinimized 
                        ? 'transform scale-0 opacity-0' 
                        : 'scale-100 opacity-100 bg-gradient-to-b from-black to-gray-500 hover:bg-gray-700 text-white'
                }`}
                aria-label={isOpen ? "Minimize chat" : "Open chat"}
            >
                {isMinimized ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </button>
        </div>
    );
}

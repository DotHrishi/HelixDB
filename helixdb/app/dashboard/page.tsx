"use client";

import {useState, useEffect, useRef} from "react";
import ChatBox from "@/components/ChatBox";

export default function Dashboard() {
    const [messages, setMessages] = useState<{role: 'user' | 'bot', content: any}[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const addMessage = (role: 'user' | 'bot', content: any) => {
        setMessages(prev => [...prev, { role, content }]);
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return(
        <div className="h-screen flex bg-black font-mono">
            <div className="w-1/5 bg-[#252222] border-r border-white text-gray-300 p-4 shadow-[5px_0_15px_rgba(37,99,235,0.05)] z-10">
                <h2 className="font-bold mb-4 text-2xl uppercase tracking-widest border-b border-white pb-2">Tables</h2>
            </div>

            <div className="flex-1 flex flex-col relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none"></div>
                
                <div className="flex-1 overflow-hidden flex flex-col p-6 z-10 w-full">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200 tracking-wider shrink-0">WORKSPACE</h2>

                    <div className="flex-1 overflow-y-auto flex flex-col gap-6 pb-4 pr-2">
                        {messages.length === 0 && (
                            <div className="text-gray-500 text-sm italic">No messages yet. Start asking your database!</div>
                        )}
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-lg p-4 ${
                                    msg.role === 'user' 
                                      ? 'bg-[#252222] text-white' 
                                      : 'bg-[#252222] text-white'
                                }`}>
                                    <div className={`text-xs mb-2 font-bold uppercase tracking-wider ${msg.role === 'user' ? 'text-red-500' : 'text-yellow-500'}`}>
                                        {msg.role === 'user' ? 'You' : 'Database'}
                                    </div>
                                    {msg.role === 'user' ? (
                                        <div className="text-sm">{msg.content}</div>
                                    ) : (
                                        <div className="flex flex-col gap-3">
                                            {typeof msg.content === 'string' ? (
                                                <div className="text-sm">{msg.content}</div>
                                            ) : (
                                                <>
                                                    {msg.content.explanation && (
                                                        <div className="text-sm text-white leading-relaxed">
                                                            {msg.content.explanation}
                                                        </div>
                                                    )}
                                                    {msg.content.data && (
                                                        <pre className="text-white overflow-x-auto text-xs max-h-72 overflow-y-auto p-3 bg-black border border-blue-900/30 rounded scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                                                            {JSON.stringify(msg.content.data, null, 2)}
                                                        </pre>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                <div className="z-10 bg-black border-t border-white">
                    <ChatBox addMessage={addMessage}/>
                </div>
            </div>
        </div>
    )
}
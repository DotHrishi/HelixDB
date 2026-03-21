"use client";

import {useState} from "react";

export default function ChatBox({addMessage}: any) {
    const [input, setInput]=useState("");
    const [loading, setLoading]=useState(false);

    const handleSend = async () => {
        if(!input) return;
        setLoading(true);
        addMessage('user', input);
        const currentInput = input;
        setInput("");

        try {
            const res=await fetch("/api/query", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({prompt: currentInput}),
            });
            const data=await res.json();
            addMessage('bot', { data: data.data, explanation: data.explanation });
        } catch (error) {
            addMessage('bot', "Error fetching from database.");
        } finally {
            setLoading(false);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    }

    return(
        <div className="p-4 bg-[#000000] flex gap-2 w-full">
            <input 
                className="flex-1 bg-gray-900 shadow-[inset_0_0_10px_rgba(37,99,235,0.1)] border border-red-900 text-white p-2 px-4 rounded-full outline-none focus:ring-1 focus:ring-red-500 transition-all placeholder-gray-500"
                placeholder="Ask your database......."
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                onKeyDown={handleKeyDown}
             />

             <button onClick={handleSend} disabled={loading} className={`bg-red-500 hover:bg-red-800 transition-all text-white px-6 rounded-full font-medium tracking-wide ${loading ? 'opacity-70' : ''}`}>
                {loading ? "..." : "Send"}
             </button>
        </div>
    )
}
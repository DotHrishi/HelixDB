"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { 
    Bell, Settings, User, Database, Table, LayoutGrid, Terminal, 
    Bot, BookOpen, HelpCircle, Hand, MousePointer2, Navigation, Search, Download, 
    Maximize2, X, Send, Zap, Plus, Sparkles, Key, Loader2, Moon, Sun
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavItem = ({ icon: Icon, label, active, onClick }: any) => (
    <div 
        onClick={onClick}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#2a1114] text-[#e5484d] border border-[#e5484d]/20 shadow-[0_0_15px_rgba(229,72,77,0.1)]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'}`}
    >
        <Icon size={18} />
        <span className="font-bold tracking-wider text-[11px] uppercase">{label}</span>
    </div>
);

// Sidebar Component
const Sidebar = ({ isChatOpen, onToggleChat }: any) => (
    <div className="w-64 bg-gray-50 dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-[#1a1a1a] flex flex-col h-full shrink-0 text-sm transition-colors">
        <div className="p-6 pb-4 border-b border-gray-200 dark:border-[#1a1a1a]">
            <h2 className="text-[10px] font-bold text-gray-500 dark:text-gray-400 tracking-widest mb-1">HELIX WORKSPACE</h2>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">Production Cluster</p>
            <button className="w-full bg-green-500 text-black font-semibold rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
                <Plus size={16} /> New Connection
            </button>
        </div>
        <div className="flex-1 px-4 py-4 space-y-1">
            <NavItem icon={Database} label="DATABASES" active />
            <NavItem icon={Table} label="TABLES" />
            <NavItem icon={LayoutGrid} label="VIEWS" />
            <NavItem icon={Terminal} label="FUNCTIONS" />
            <NavItem 
                icon={Bot} 
                label="AI ASSISTANT" 
                active={isChatOpen} 
                onClick={onToggleChat}
            />
        </div>
        <div className="p-4 space-y-1 border-t border-gray-200 dark:border-[#1a1a1a]">
            <NavItem icon={BookOpen} label="DOCUMENTATION" />
            <NavItem icon={HelpCircle} label="SUPPORT" />
        </div>
    </div>
);

// TopNavbar Component
const TopNavbar = () => (
    <div className="h-14 bg-white dark:bg-black border-b border-gray-200 dark:border-[#1a1a1a] flex items-center justify-between px-6 shrink-0 z-10 relative transition-colors">
        <div className="flex items-center gap-10 h-full">
            <div className="font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1 text-lg">
                HELIX<span className="text-[#e5484d]">DB</span>
            </div>
            <div className="flex gap-6 text-[13px] h-full">
                <span className="text-gray-900 dark:text-white border-b-2 border-yellow-500 h-full flex items-center font-bold px-1 pt-1">Explorer</span>
                <span className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 flex items-center cursor-pointer font-medium px-1">Query Editor</span>
                <span className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 flex items-center cursor-pointer font-medium px-1">Settings</span>
            </div>
        </div>
        <div className="flex items-center gap-4 text-yellow-500">
            <ThemeToggle />
            <Bell size={16} className="cursor-pointer hover:text-yellow-600 dark:hover:text-yellow-400" />
            <Settings size={16} className="cursor-pointer hover:text-yellow-600 dark:hover:text-yellow-400" />
            <div className="w-7 h-7 rounded-full border border-yellow-500/50 flex items-center justify-center cursor-pointer hover:bg-yellow-500/10 text-yellow-500">
                <User size={14} />
            </div>
        </div>
    </div>
);

// Canvas Component
const Canvas = ({ cards, removeCard }: { cards: any[], removeCard: (id: string) => void }) => {
    const [canvasMode, setCanvasMode] = useState<'hand' | 'pointer'>('hand');
    const [scale, setScale] = useState(1);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                // Smooth scaling based on scroll direction
                const zoomFactor = e.deltaY > 0 ? -0.1 : 0.1;
                setScale(prev => Math.min(Math.max(0.2, prev + zoomFactor), 4));
            }
        };

        canvas.addEventListener('wheel', handleWheel, { passive: false });
        return () => canvas.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="flex-1 bg-[var(--canvas-bg)] relative overflow-hidden transition-colors" ref={canvasRef}>
            {/* Top Toolbar (fixed) */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 h-[42px] bg-white dark:bg-[#3a3b4c] rounded-full shadow-xl dark:shadow-2xl flex items-center px-1.5 pr-5 text-gray-600 dark:text-gray-300 text-xs border border-gray-200 dark:border-white/5 z-20 gap-4 transition-colors">
                <div className="flex gap-1 h-full py-1">
                    <button 
                        onClick={() => setCanvasMode('hand')}
                        className={`p-1.5 px-3 rounded-lg flex items-center justify-center transition-colors ${canvasMode === 'hand' ? 'bg-gray-100 dark:bg-[#5b5c6b] text-gray-900 dark:text-white shadow-inner' : 'text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                    >
                        <Hand size={16} />
                    </button>
                    <button 
                        onClick={() => setCanvasMode('pointer')}
                        className={`p-1.5 px-3 rounded-lg flex items-center justify-center transition-colors ${canvasMode === 'pointer' ? 'bg-gray-100 dark:bg-[#5b5c6b] text-gray-900 dark:text-white shadow-inner' : 'text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                    >
                        <Navigation size={16} className="rotate-[75deg]" />
                    </button>
                    <button className="p-1.5 px-3 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <Search size={16} />
                    </button>
                </div>
                <div className="w-px h-5 bg-gray-200 dark:bg-gray-500/50" />
                <div className="flex items-center gap-2 font-bold tracking-[0.15em] text-[11px] text-gray-600 dark:text-gray-300">
                    <LayoutGrid size={14} /> CANVAS VIEW
                </div>
            </div>

            <motion.div 
                className={`absolute w-[10000px] h-[10000px] ${canvasMode === 'hand' ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
                style={{
                    x: -4500,
                    y: -4500,
                    scale,
                    backgroundImage: 'radial-gradient(circle, var(--grid-dot) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    transformOrigin: '5000px 5000px'
                }}
                drag={canvasMode === 'hand'}
                dragConstraints={{ left: -8000, right: 0, top: -8000, bottom: 0 }}
                dragElastic={0}
                dragMomentum={false}
            >
                {/* Users Table */}
                <div className="absolute top-[4600px] left-[4800px] w-80 bg-white dark:bg-[#161a29] border border-gray-200 dark:border-blue-500/10 rounded-xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 cursor-default selection:bg-blue-500/30 transition-colors" onPointerDownCapture={e=>e.stopPropagation()}>
                    <div className="flex items-center justify-between mb-4 pb-2">
                        <div className="flex items-center gap-2">
                            <LayoutGrid size={14} className="text-gray-400 dark:text-gray-400" />
                            <span className="text-xs font-bold text-gray-900 dark:text-gray-200 tracking-wider">USERS TABLE</span>
                        </div>
                        <span className="text-gray-400 dark:text-gray-500">•••</span>
                    </div>
                    <div className="space-y-4 text-[11px] font-mono">
                        <div className="flex justify-between"><div className="flex items-center gap-1.5"><Key size={12} className="text-blue-600 dark:text-blue-500"/><span className="text-blue-700 dark:text-blue-400">id</span></div><span className="text-gray-500 dark:text-gray-500">UUID</span></div>
                        <div className="flex justify-between pl-4"><span className="text-gray-700 dark:text-gray-300">full_name</span><span className="text-gray-500 dark:text-gray-500">VARCHAR(255)</span></div>
                        <div className="flex justify-between pl-4"><span className="text-gray-700 dark:text-gray-300">email</span><span className="text-gray-500 dark:text-gray-500">VARCHAR(255)</span></div>
                        <div className="flex justify-between pl-4"><span className="text-gray-700 dark:text-gray-300">created_at</span><span className="text-gray-500 dark:text-gray-500">TIMESTAMP</span></div>
                        <div className="flex justify-between pl-4"><span className="text-gray-700 dark:text-gray-300">is_active</span><span className="text-gray-500 dark:text-gray-500">BOOLEAN</span></div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-[10px] text-gray-500 dark:text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        Last indexed 2m ago
                    </div>
                </div>

                {/* Monthly Growth Chart */}
                <div className="absolute top-[4600px] left-[5200px] w-[350px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 pb-4 cursor-default selection:bg-blue-500/30" onPointerDownCapture={e=>e.stopPropagation()}>
                    <div className="flex items-center justify-between mb-8 text-xs font-bold text-gray-400">
                        <span className="tracking-wider">MONTHLY GROWTH</span>
                        <div className="flex gap-2">
                            <Download size={14} className="hover:text-gray-600 cursor-pointer" />
                            <Maximize2 size={14} className="hover:text-gray-600 cursor-pointer" />
                        </div>
                    </div>
                    <div className="h-40 flex items-end justify-between gap-1.5">
                        <div className="w-full rounded-sm bg-[#e0e7ff]" style={{ height: '40px' }} />
                        <div className="w-full rounded-sm bg-[#c7d2fe]" style={{ height: '70px' }} />
                        <div className="w-full rounded-sm bg-[#a5b4fc]" style={{ height: '90px' }} />
                        <div className="w-full rounded-sm bg-[#818cf8]" style={{ height: '140px' }} />
                        <div className="w-full rounded-sm bg-[#4f46e5]" style={{ height: '120px' }} />
                        <div className="w-full rounded-sm bg-[#a5b4fc]" style={{ height: '150px' }} />
                    </div>
                    <div className="flex justify-between mt-3 text-[10px] font-bold text-gray-800">
                        <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
                    </div>
                </div>

                {/* Query Results */}
                <div className="absolute top-[4940px] left-[4800px] w-[620px] bg-white dark:bg-[#1a1f2e] border border-gray-200 dark:border-blue-500/20 rounded-xl shadow-xl dark:shadow-2xl overflow-hidden cursor-default selection:bg-blue-500/30 transition-colors" onPointerDownCapture={e=>e.stopPropagation()}>
                    <div className="bg-gray-50 dark:bg-[#1f2638] px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-white/5 transition-colors">
                        <div className="flex items-center gap-2">
                            <LayoutGrid size={14} className="text-gray-500 dark:text-gray-400" />
                            <span className="text-[11px] font-bold tracking-wider text-gray-900 dark:text-gray-200">QUERY RESULTS: RECENT TRANSACTIONS</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-teal-600 dark:text-teal-400 text-[10px] font-bold">0.024s</span>
                            <X size={14} className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" />
                        </div>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead className="text-gray-500 dark:text-gray-400 font-bold tracking-wider border-b border-gray-200 dark:border-[#2a3441] uppercase text-[10px] bg-gray-50 dark:bg-[#1a1f2e] transition-colors">
                            <tr>
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">AMOUNT</th>
                                <th className="px-4 py-3">STATUS</th>
                                <th className="px-4 py-3">DATE</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 dark:text-gray-300 font-mono text-[11px]">
                            <tr className="border-b border-gray-100 dark:border-[#2a3441]/50 transition-colors">
                                <td className="px-4 py-3 text-blue-700 dark:text-[#7a8cbf]">TXN_9982</td>
                                <td className="px-4 py-3 font-semibold">$1,240.00</td>
                                <td className="px-4 py-3"><span className="text-[#3b8c6a] border border-[#2b5946] bg-[#1a382c] px-2 py-[2px] rounded-full text-[9px] font-sans font-bold tracking-wider">COMPLETED</span></td>
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-500">2023-11-20</td>
                            </tr>
                            <tr className="border-b border-gray-100 dark:border-[#2a3441]/50 transition-colors">
                                <td className="px-4 py-3 text-blue-700 dark:text-[#7a8cbf]">TXN_9981</td>
                                <td className="px-4 py-3 font-semibold">$45.12</td>
                                <td className="px-4 py-3"><span className="text-[#3b8c6a] border border-[#2b5946] bg-[#1a382c] px-2 py-[2px] rounded-full text-[9px] font-sans font-bold tracking-wider">COMPLETED</span></td>
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-500">2023-11-20</td>
                            </tr>
                            <tr className="transition-colors">
                                <td className="px-4 py-3 text-blue-700 dark:text-[#7a8cbf]">TXN_9980</td>
                                <td className="px-4 py-3 font-semibold">$2,900.00</td>
                                <td className="px-4 py-3"><span className="text-[#a87f32] border border-[#6b5220] bg-[#3d2f14] px-2 py-[2px] rounded-full text-[9px] font-sans font-bold tracking-wider">PENDING</span></td>
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-500">2023-11-19</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Dynamically generated Insights from Chat */}
                {cards.map(card => (
                    <div key={card.id} className="absolute w-[360px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 cursor-default selection:bg-blue-500/30" 
                        style={{ top: card.y, left: card.x, zIndex: 10 }}
                        onPointerDownCapture={e=>e.stopPropagation()}>
                        <div className="flex items-center gap-2 mb-3 text-[#392b8d] font-black text-xs tracking-wider">
                            <Sparkles size={14} className="text-[#392b8d]" /> INSIGHT
                        </div>
                        
                        <div className="border-l-2 border-indigo-200 pl-3 mb-4 text-[11px] text-gray-400 font-medium italic">
                            "{card.question}"
                        </div>

                        <div className="text-gray-700 text-[13px] font-medium leading-relaxed mb-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            {card.content.explanation && (
                                <p className="mb-3 whitespace-pre-wrap">{card.content.explanation}</p>
                            )}
                            
                            {card.content.data && (
                                <div className="mt-2 text-[10px] font-mono bg-[#f4f4f8] border border-gray-200 p-3 rounded-lg text-gray-700 overflow-x-auto">
                                    <pre>{JSON.stringify(card.content.data, null, 2)}</pre>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4 text-[10px] font-bold pt-2 border-t border-gray-100">
                            <span className="text-gray-400 cursor-pointer hover:text-black hover:underline transition-colors" onClick={() => removeCard(card.id)}>DISMISS</span>
                        </div>
                    </div>
                ))}

            </motion.div>

            {/* Minimap (bottom right, fixed) */}
            <div className="absolute bottom-6 right-6 w-32 h-[85px] bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-[#1a1c23] rounded-lg p-2 opacity-90 backdrop-blur pointer-events-none hidden md:block z-20 transition-colors">
                <div className="w-5 h-6 rounded-[2px] absolute top-3 left-4 bg-gray-200 dark:bg-[#2f375e]"></div>
                <div className="w-[22px] h-[22px] rounded-[2px] absolute top-[43px] left-[35px] bg-gray-300 dark:bg-[#434b8c]"></div>
                <div className="w-[30px] h-[16px] rounded-[2px] absolute top-3 left-[65px] bg-gray-200 dark:bg-[#383d6a]"></div>
                {/* Dynamically show dots for new cards if needed */}
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                    height: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
            `}</style>
        </div>
    );
};

// ChatSection Component
const ChatSection = ({ input, setInput, handleSend, loading, messages, width }: any) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div 
            className="border-l border-gray-200 dark:border-[#1a1a1a] bg-white dark:bg-[#0a0a0a] flex flex-col h-full shrink-0 relative transition-all duration-75"
            style={{ width: `${width}px` }}
        >
            <div className="p-4 border-b border-gray-200 dark:border-[#1a1a1a] flex items-center justify-between transition-colors">
                <div className="flex items-center gap-2">
                    <Bot size={18} className="text-[#e5484d]" />
                    <span className="font-bold text-[11px] tracking-wider uppercase text-gray-900 dark:text-gray-200">AI ASSISTANT</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-500 tracking-wider">LIVE</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                {messages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center px-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e5484d]/20 to-[#e5484d]/5 flex items-center justify-center mb-4 border border-[#e5484d]/10">
                            <Sparkles size={24} className="text-[#e5484d]" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-200 mb-2 uppercase tracking-tight">Ready to analyze</h3>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                            Ask questions about your data in natural language. I'll search your database and generate insights on the canvas.
                        </p>
                    </div>
                )}
                {messages.map((m: any, idx: number) => (
                    <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs font-medium leading-relaxed whitespace-pre-wrap transition-colors ${
                            m.role === 'user' 
                            ? 'bg-[#e5484d] text-white rounded-tr-none' 
                            : 'bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/5 rounded-tl-none shadow-sm'
                        }`}>
                            {m.content}
                        </div>
                        <span className="text-[9px] font-bold text-gray-500 dark:text-gray-600 mt-2 uppercase tracking-widest">{m.role === 'user' ? 'You' : 'Helix AI'}</span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-[#1a1a1a] bg-gray-50/80 dark:bg-black/50 backdrop-blur-xl transition-colors">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e5484d]/20 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-500" />
                    <div className="relative flex items-center gap-2 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/5 p-1.5 pl-3 rounded-xl transition-all group-focus-within:border-[#e5484d]/30 group-focus-within:bg-gray-50 dark:group-focus-within:bg-[#1f1f1f]">
                        <input 
                            type="text" 
                            placeholder="Ask something..." 
                            className="flex-1 bg-transparent border-none text-gray-900 dark:text-gray-200 text-xs focus:ring-0 px-1 placeholder:text-gray-500 dark:placeholder:text-gray-600 font-medium"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                        />
                        <button 
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="w-8 h-8 bg-[#e5484d] hover:bg-red-500 disabled:bg-gray-200 dark:disabled:bg-gray-800 disabled:text-gray-400 dark:disabled:text-gray-600 text-white rounded-lg flex items-center justify-center transition-all shadow-lg shadow-[#e5484d]/10"
                        >
                            {loading ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                        </button>
                    </div>
                </div>
                <div className="mt-3 flex items-center justify-between px-1">
                    <div className="flex items-center gap-3">
                        <Zap size={12} className="text-yellow-600 dark:text-yellow-500/50" />
                        <span className="text-[9px] font-bold text-gray-500 dark:text-gray-600 uppercase tracking-widest">Helix-v1 Model</span>
                    </div>
                    <span className="text-[9px] font-bold text-gray-500 dark:text-gray-600 uppercase tracking-widest">800 Context</span>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #2a2a2a;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }
            `}</style>
        </div>
    );
};

export default function Dashboard() {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState<any[]>([]);
    const [messages, setMessages] = useState<any[]>([]);
    
    // Resizing State
    const [chatWidth, setChatWidth] = useState(400);
    const [isResizing, setIsResizing] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(true);

    useEffect(() => {
        if (!isResizing) return;

        const handleMouseMove = (e: MouseEvent) => {
            const newWidth = window.innerWidth - e.clientX;
            // Boundaries
            if (newWidth > 250 && newWidth < 800) {
                setChatWidth(newWidth);
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            document.body.style.cursor = 'default';
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'col-resize';

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    const handleSend = async () => {
        if(!input.trim() || loading) return;
        
        const userMessage = input;
        setInput("");
        setLoading(true);
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

        try {
            const res = await fetch("/api/query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: userMessage }),
            });
            const data = await res.json();
            
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: data.explanation || "I've analyzed the data and generated a visualization on the canvas." 
            }]);

            // setCards(prev => [...prev, {
            //     id: Date.now().toString(),
            //     question: userMessage,
            //     content: { data: data.data, explanation: data.explanation || (typeof data === 'string' ? data : "Insight generated successfully.") },
            //     x: 5490 + (prev.length * 60),
            //     y: 4970 + (prev.length * 40)
            // }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error connecting to the database." }]);
        } finally {
            setLoading(false);
        }
    };

    const removeCard = (id: string) => {
        setCards(prev => prev.filter(c => c.id !== id));
    };

    return (
        <div className="h-screen flex flex-col font-sans bg-white dark:bg-[#050505] text-gray-900 dark:text-white selection:bg-red-500/30 overflow-hidden transition-colors">
            <TopNavbar />
            <div className="flex-1 flex overflow-hidden relative">
                <Sidebar isChatOpen={isChatOpen} onToggleChat={() => setIsChatOpen(!isChatOpen)} />
                <Canvas cards={cards} removeCard={removeCard} />
                
                {isChatOpen && (
                    <>
                        {/* Resize Handle */}
                        <div 
                            className={`absolute top-0 bottom-0 w-1.5 cursor-col-resize z-50 transition-colors hover:bg-[#e5484d]/30 ${isResizing ? 'bg-[#e5484d]/50' : 'bg-transparent'}`}
                            style={{ right: `${chatWidth - 3}px` }}
                            onMouseDown={() => setIsResizing(true)}
                        >
                            <div className={`absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] ${isResizing ? 'bg-[#e5484d]' : 'bg-white/5'}`} />
                        </div>

                        <div>
                            <ChatSection 
                                input={input} 
                                setInput={setInput} 
                                handleSend={handleSend} 
                                loading={loading} 
                                messages={messages}
                                width={chatWidth}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
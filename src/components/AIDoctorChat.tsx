import React, { useState, useEffect, useRef } from 'react';
import { Stethoscope, X, Send, Bot, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const AIDoctorChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hello! I am your AI Doctor assistant. How can I help you today? Please remember I am an AI and for real medical emergencies, you should contact a professional.',
            timestamp: new Date(),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "Based on what you've described, it's important to monitor these symptoms. Have you experienced any fever or persistent pain?",
                "I understand. While I can't provide a clinical diagnosis, these symptoms could be related to several common conditions. I recommend keeping a log of when they occur.",
                "It sounds like you're taking the right steps by seeking more information. Would you like me to explain more about how lifestyle changes might help with this?",
                "Health is a journey! For the most accurate assessment, a physical examination would be necessary. Is there anything else specific you'd like to know?",
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: randomResponse,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-tr from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-110 flex items-center justify-center group relative border border-white/20"
                >
                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-25 group-hover:opacity-0 transition-opacity"></div>
                    <Stethoscope size={28} className="drop-shadow-sm" />
                    <span className="absolute -top-12 right-0 bg-background/90 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-md text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                        CONSULT AI DOCTOR
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <Card className="w-[350px] md:w-[400px] h-[500px] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-in slide-in-from-bottom-5 duration-300 border-primary/20 bg-background overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-700 p-4 text-white flex flex-row items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar className="border-2 border-primary-foreground/20">
                                <AvatarImage src="/ai_doctor_avatar.png" alt="AI Doctor" />
                                <AvatarFallback>AD</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-lg">AI Doctor</CardTitle>
                                <p className="text-xs text-primary-foreground/70 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Online Assistant
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-primary-foreground/10 text-primary-foreground"
                        >
                            <X size={20} />
                        </Button>
                    </CardHeader>

                    <CardContent className="flex-1 overflow-hidden p-4">
                        <ScrollArea className="h-full pr-4" ref={scrollRef}>
                            <div className="space-y-4">
                                {messages.map((m) => (
                                    <div
                                        key={m.id}
                                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl ${m.role === 'user'
                                                ? 'bg-primary text-primary-foreground rounded-tr-none'
                                                : 'bg-muted text-muted-foreground rounded-tl-none border border-border'
                                                } text-sm`}
                                        >
                                            {m.content}
                                            <p className="text-[10px] mt-1 opacity-50 text-right">
                                                {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-border flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce delay-150"></span>
                                            <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce delay-300"></span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </CardContent>

                    <CardFooter className="p-4 pt-0">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="flex w-full gap-2"
                        >
                            <Input
                                placeholder="Describe your symptoms..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1"
                            />
                            <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                                <Send size={18} />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default AIDoctorChat;

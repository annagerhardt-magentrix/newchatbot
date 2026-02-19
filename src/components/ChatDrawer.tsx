import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import type { PromptRequestEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import { useState, useRef } from 'react';

interface ChatDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ChatFooterProps {
    onSend: (text: string) => void;
    onAttach: () => void;
}

const ChatFooter = ({ onSend, onAttach }: ChatFooterProps) => {
    const [value, setValue] = useState('');

    const handleSendClick = () => {
        if (value.trim()) {
            onSend(value);
            setValue('');
        }
    };

    return (
        <div className="px-2 pb-1 pt-2 bg-white flex justify-center">
            <div className="w-full max-w-[950px] e-input-group e-outline flex items-center pr-1 !rounded-2xl overflow-hidden border-gray-200 focus-within:border-[#4f46e5] focus-within:ring-1 focus-within:ring-[#4f46e5]/20 bg-gray-50/30 transition-all">
                <input
                    className="e-input pl-4 !border-none !shadow-none bg-transparent py-3"
                    type="text"
                    placeholder="Type your message here..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && value.trim()) handleSendClick(); }}
                />
                <button
                    className="e-input-group-icon e-icons e-attachment text-gray-400 hover:text-[#4f46e5] !border-none bg-transparent h-10 w-10 flex items-center justify-center cursor-pointer transition-colors"
                    onClick={onAttach}
                    type="button"
                    title="Attach file"
                />
                <button
                    className={`e-input-group-icon e-icons e-send !border-none bg-transparent h-10 w-10 flex items-center justify-center transition-all duration-300 ${value.trim()
                        ? 'text-[#4f46e5] cursor-pointer scale-110 active:scale-95'
                        : 'text-gray-200 cursor-not-allowed opacity-50'
                        }`}
                    onClick={handleSendClick}
                    disabled={!value.trim()}
                    type="button"
                    title="Send message"
                />
            </div>
        </div>
    );
};

export const ChatDrawer = ({ isOpen, onClose }: ChatDrawerProps) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const aiAssistRef = useRef<any>(null);
    const [prompts, setPrompts] = useState<any[]>([
        {
            prompt: "Can you help me log my work for today?",
            response: "I can certainly help you log your work. To create a new Work Log, please provide details.",
            author: "Magentrix Wizard"
        }
    ]);

    const fileInputRef = useRef<HTMLInputElement>(null);


    const historyData = [
        { text: 'Logging Work Details', id: '1' },
        { text: 'Exploring Wiki Contents', id: '2' },
        { text: 'Password Management', id: '3' },
        { text: 'Resetting Password', id: '4' },
    ];

    const toggleMaximize = () => {
        const newMax = !isMaximized;
        setIsMaximized(newMax);
        if (newMax) setIsHistoryOpen(true);
        else setIsHistoryOpen(false);
    };

    const toggleHistory = () => setIsHistoryOpen(!isHistoryOpen);

    const handleSend = (text: string) => {
        const newPrompt = {
            prompt: text,
            response: "...",
            author: "Magentrix Wizard"
        };

        setPrompts(prev => [...prev, newPrompt]);

        setTimeout(() => {
            setPrompts(prev => {
                const updated = [...prev];
                const lastItem = updated[updated.length - 1];
                if (lastItem) {
                    lastItem.response = "I've processed your request. Is there anything else you'd like to do with your work log?";
                }
                return [...updated];
            });
        }, 2000);
    };

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        const newPrompt = {
            prompt: args.prompt,
            response: "...",
            author: "Magentrix Wizard"
        };

        setPrompts(prev => [...prev, newPrompt]);

        setTimeout(() => {
            setPrompts(prev => {
                const updated = [...prev];
                const lastItem = updated[updated.length - 1];
                if (lastItem) {
                    lastItem.response = "I've processed your request. Is there anything else you'd like to do with your work log?";
                }
                return [...updated];
            });
        }, 2000);
    };

    const promptSuggestions = [
        "How do I reset my password?",
        "Show me my recent work logs",
        "Search the wiki for 'API'"
    ];



    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const filePrompt = {
                prompt: `Attached file: ${file.name}`,
                response: `I've received your file. I'm analyzing the content now...`,
                author: "Magentrix Wizard"
            };
            setPrompts(prev => [...prev, filePrompt]);
        }
    };

    const footerTemplate = () => (
        <ChatFooter
            onSend={handleSend}
            onAttach={() => fileInputRef.current?.click()}
        />
    );

    const showHistorySideBySide = isMaximized;
    const showHistoryOverlay = !isMaximized && isHistoryOpen;

    return (
        <SidebarComponent
            width={isMaximized ? "100%" : "450px"}
            position="Right"
            id="chat-drawer"
            isOpen={isOpen}
            type="Over"
            showBackdrop={true}
            closeOnDocumentClick={!isMaximized && !isHistoryOpen}
            close={onClose}
            style={{ zIndex: 1000 }}
        >
            <div
                id="chat-drawer-content"
                className="flex flex-col h-full bg-white shadow-2xl overflow-hidden"
                style={{
                    borderTopLeftRadius: isMaximized ? 0 : '24px',
                    borderBottomLeftRadius: isMaximized ? 0 : '24px',
                    transition: 'border-radius 0.4s ease'
                }}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />

                <div className="h-14 flex items-center justify-between px-4 border-b border-gray-100 bg-[#4f46e5] text-white shrink-0">
                    <div className="flex items-center gap-1 w-24">
                        {!isMaximized && (
                            <button
                                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors"
                                onClick={toggleHistory}
                            >
                                <span className="e-icons e-menu text-lg"></span>
                            </button>
                        )}

                        <button
                            className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors hover:scale-110"
                            title={isMaximized ? "Restore" : "Maximize"}
                            onClick={toggleMaximize}
                        >
                            {isMaximized ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="4 14 10 14 10 20"></polyline>
                                    <polyline points="20 10 14 10 14 4"></polyline>
                                    <line x1="14" y1="10" x2="21" y2="3"></line>
                                    <line x1="3" y1="21" x2="10" y2="14"></line>
                                </svg>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <polyline points="9 21 3 21 3 15"></polyline>
                                    <line x1="21" y1="3" x2="14" y2="10"></line>
                                    <line x1="3" y1="21" x2="10" y2="14"></line>
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="flex-1 text-center font-bold tracking-tight truncate px-2">
                        Magentrix AI Assistant
                    </div>

                    <div className="flex items-center justify-end w-24">
                        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors">
                            <span className="e-icons e-close text-lg"></span>
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex overflow-hidden relative">
                    <div
                        className={`bg-gray-50 border-r border-gray-100 flex flex-col transition-all duration-300 ease-in-out z-20 
                            ${showHistorySideBySide ? 'w-96 relative' : showHistoryOverlay ? 'w-64 absolute inset-y-0 left-0 shadow-xl' : 'w-0 overflow-hidden'}`}
                    >
                        <div className="p-4 shrink-0">
                            <button className="w-full bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-[#4f46e5] font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 group text-sm">
                                <span className="e-icons e-plus text-lg group-hover:scale-110 transition-transform"></span>
                                New Chat
                            </button>
                        </div>
                        <div className="px-5 py-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recent</span>
                        </div>
                        <div className="flex-1 overflow-y-auto px-3 pb-4">
                            {historyData.map(item => (
                                <div
                                    key={item.id}
                                    className="p-3 mb-1 hover:bg-white hover:shadow-sm rounded-lg cursor-pointer text-xs text-gray-600 transition-all border border-transparent hover:border-gray-100 flex items-center gap-2 group"
                                >
                                    <span className="e-icons e-comment text-gray-400 group-hover:text-[#4f46e5]"></span>
                                    <span className="truncate">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 overflow-hidden flex flex-col items-center bg-white relative">
                        {showHistoryOverlay && (
                            <div
                                className="absolute inset-0 bg-black/20 z-10 animate-in fade-in duration-300"
                                onClick={toggleHistory}
                            ></div>
                        )}

                        <div
                            className="h-full w-full transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
                            style={{ maxWidth: isMaximized ? '1050px' : '100%' }}
                        >
                            <AIAssistViewComponent
                                id="aiAssistView"
                                ref={aiAssistRef}
                                promptRequest={onPromptRequest}
                                promptSuggestions={promptSuggestions}
                                prompts={prompts}
                                footerTemplate={footerTemplate}
                                height="100%"
                                width="100%"
                            >
                            </AIAssistViewComponent>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarComponent>
    );
};

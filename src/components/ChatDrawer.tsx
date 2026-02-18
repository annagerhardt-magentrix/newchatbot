import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import type { PromptRequestEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import { useState } from 'react';

interface ChatDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChatDrawer = ({ isOpen, onClose }: ChatDrawerProps) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [prompts, setPrompts] = useState<any[]>([
        {
            prompt: "Can you help me log my work for today?",
            response: "I can certainly help you log your work. To create a new Work Log, please provide details.",
            author: "Magentrix Wizard"
        }
    ]);

    const toggleMaximize = () => setIsMaximized(!isMaximized);

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        // Add the user's prompt and a placeholder response immediately
        const newPrompt = {
            prompt: args.prompt,
            response: "...",
            author: "Magentrix Wizard"
        };

        setPrompts(prev => [...prev, newPrompt]);

        // Simulate AI processing
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

    return (
        <SidebarComponent
            width={isMaximized ? "100%" : "450px"}
            position="Right"
            id="chat-drawer"
            isOpen={isOpen}
            type={isMaximized ? "Over" : "Push"}
            showBackdrop={true}
            closeOnDocumentClick={!isMaximized}
            close={onClose}
            style={{ zIndex: 1000, transition: 'width 0.3s ease' }}
        >
            <div id="chat-drawer-content" className="flex flex-col h-full bg-white shadow-2xl">
                {/* Header built into the drawer to maintain consistency */}
                <div className="h-14 flex items-center justify-between px-6 border-b border-gray-100 bg-[#4f46e5] text-white">
                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={onClose}>
                        <span className="e-icons e-chevron-left text-sm font-bold"></span>
                        <span className="text-sm font-bold uppercase tracking-wider">Back</span>
                    </div>
                    <div className="font-bold tracking-tight">Magentrix AI Assistant</div>
                    <div className="flex items-center gap-4">
                        <span
                            className={`e-icons ${isMaximized ? 'e-minimize' : 'e-maximize'} text-lg cursor-pointer hover:scale-110 transition-transform`}
                            title={isMaximized ? "Restore" : "Maximize"}
                            onClick={toggleMaximize}
                        ></span>
                        <span className="e-icons e-close text-lg cursor-pointer hover:scale-110 transition-transform" onClick={onClose}></span>
                    </div>
                </div>

                <div className="flex-1 overflow-hidden flex flex-col items-center">
                    <div className={`h-full transition-all duration-300 ${isMaximized ? 'w-full max-w-4xl' : 'w-full'}`}>
                        <AIAssistViewComponent
                            id="aiAssistView"
                            promptRequest={onPromptRequest}
                            promptSuggestions={promptSuggestions}
                            prompts={prompts}
                            promptPlaceholder="Type your message here..."
                            height="100%"
                            width="100%"
                        >
                        </AIAssistViewComponent>
                    </div>
                </div>
            </div>
        </SidebarComponent>
    );
};

import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useState } from 'react';

interface ChatDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChatDrawer = ({ isOpen, onClose }: ChatDrawerProps) => {
    // Mock Data for History
    const historyData = [
        { text: 'Logging Work Details', id: '1' },
        { text: 'Exploring Wiki Contents', id: '2' },
        { text: 'Password Management', id: '3' },
        { text: 'Resetting Password', id: '4' },
    ];

    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'I can certainly help you log your work. To create a new Work Log, please provide details.' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;
        setMessages([...messages, { sender: 'user', text: inputValue }]);
        setInputValue('');
        // Mock bot response
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'bot', text: 'Thank you for that information. I am processing your request.' }]);
        }, 1000);
    };

    return (
        <SidebarComponent
            width="800px"
            position="Right"
            id="chat-drawer"
            isOpen={isOpen}
            type="Over"
            showBackdrop={true}
            closeOnDocumentClick={true}
            close={onClose}
            className="bg-transparent" // Let ID styling take over
            style={{ zIndex: 1000 }}
        >
            <div id="chat-drawer-content" className="flex flex-col h-full">
                {/* Header */}
                <div className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                            <span className="e-icons e-ai-sparkle text-lg"></span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 tracking-tight">Magentrix Wizard</h2>
                            <p className="text-xs text-indigo-600 font-medium uppercase tracking-wider">AI Assistant</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors">
                        <span className="e-icons e-close text-xl"></span>
                    </button>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Left Panel: History */}
                    <div className="w-80 border-r border-gray-100 bg-gray-50/50 flex flex-col">
                        <div className="p-6 pb-2">
                            <button className="w-full bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-indigo-600 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 group">
                                <span className="e-icons e-plus text-lg group-hover:scale-110 transition-transform"></span>
                                New Chat
                            </button>
                        </div>
                        <div className="px-6 py-4">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Recent</span>
                        </div>
                        <div className="flex-1 overflow-auto px-4 pb-4">
                            <ListViewComponent
                                dataSource={historyData}
                                cssClass="e-list-template"
                                template={(data: any) => (
                                    <div className="p-3 mb-2 hover:bg-white hover:shadow-sm rounded-lg cursor-pointer text-sm text-gray-600 transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <span className="e-icons e-comment-show text-gray-400 text-xs"></span>
                                            <span className="truncate">{data.text}</span>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                    </div>

                    {/* Right Panel: Chat */}
                    <div className="flex-1 flex flex-col bg-white/80">
                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
                            {/* Initial Bot Greeting */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white shadow-md">
                                    <span className="e-icons e-ai-sparkle"></span>
                                </div>
                                <div className="flex-1 max-w-2xl">
                                    <div className="font-bold text-sm text-gray-900 mb-1">Magentrix Wizard</div>
                                    <div className="text-gray-700 bg-gray-50 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 leading-relaxed">
                                        Hello! I'm here to help you log work, search the wiki, or manage your account. How can I assist you today?
                                    </div>
                                </div>
                            </div>

                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex gap-4 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        {/* Avatar */}
                                        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-md ${msg.sender === 'bot' ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gray-800'}`}>
                                            {msg.sender === 'bot' ? <span className="e-icons e-ai-sparkle"></span> : 'U'}
                                        </div>

                                        {/* Content */}
                                        <div className={`flex-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                            <div className="font-bold text-sm text-gray-900 mb-1">
                                                {msg.sender === 'bot' ? 'Magentrix Wizard' : 'You'}
                                            </div>
                                            <div className={`inline-block p-4 rounded-2xl shadow-sm border ${msg.sender === 'bot'
                                                ? 'bg-gray-50 border-gray-100 rounded-tl-none text-gray-700'
                                                : 'bg-indigo-600 border-indigo-600 rounded-tr-none text-white'
                                                } text-left leading-relaxed`}>
                                                {msg.text}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-6 bg-white border-t border-gray-100">
                            <div className="relative flex items-center gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-200 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all shadow-inner">
                                <div className="flex-1">
                                    <TextBoxComponent
                                        placeholder="Message Magentrix Wizard..."
                                        value={inputValue}
                                        input={(e: any) => setInputValue(e.value)}
                                        cssClass="e-no-border" // Assuming we can remove border via class or need override
                                        style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}
                                    />
                                </div>
                                <ButtonComponent
                                    cssClass="e-primary e-round"
                                    style={{ width: '40px', height: '40px', padding: 0 }}
                                    iconCss="e-icons e-send"
                                    onClick={handleSend}
                                ></ButtonComponent>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-xs text-gray-400">AI can make mistakes. Please verify important information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarComponent>
    );
};

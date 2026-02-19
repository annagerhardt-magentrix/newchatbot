import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { useState } from 'react';

export const Sidebar = () => {
    const [isOpen] = useState(true);

    return (
        <div className="w-64 h-full relative" id="sidebar-wrapper">
            <SidebarComponent
                id="default-sidebar"
                width="260px"
                isOpen={isOpen}
                type="Push"
                target=".main-content"
                className="bg-gray-900 text-white h-screen border-r border-white/10"
            >
                <div className="flex flex-col h-full">
                    {/* Brand Area */}
                    <div className="h-16 flex items-center px-6 border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                <span className="e-icons e-ai-sparkle text-white"></span>
                            </div>
                            <span className="font-bold tracking-tight text-white">MAGENTRIX</span>
                        </div>
                    </div>

                    <div className="p-4 flex flex-col gap-1 overflow-y-auto flex-1">
                        <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Main Menu</div>
                        <nav className="flex flex-col gap-1">
                            {/* Nav Items following Syncfusion styles but custom for premium feel */}
                            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 font-medium cursor-pointer transition-all">
                                <span className="e-icons e-dashboard"></span>
                                <span className="text-sm">Dashboard</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                                <span className="e-icons e-charts"></span>
                                <span className="text-sm">Statistics</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                                <span className="e-icons e-comment"></span>
                                <span className="text-sm">Assistance</span>
                            </div>
                        </nav>
                    </div>

                    {/* Footer Info */}
                    <div className="p-6 border-t border-white/5 text-[10px] text-gray-500">
                        © 2026 MAGENTRIX INC.
                    </div>
                </div>
            </SidebarComponent>
        </div>
    );
};

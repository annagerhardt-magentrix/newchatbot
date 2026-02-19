import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { useState } from 'react';

export const Sidebar = () => {
    const [isOpen] = useState(true);

    return (
        <div className="w-64 h-full relative" id="sidebar-wrapper">
            <SidebarComponent
                id="default-sidebar"
                width="250px"
                isOpen={isOpen}
                type="Push"
                target=".main-content"
                className="bg-surface text-on-surface h-screen border-r border-border"
            >

                <div className="p-4 flex flex-col gap-4">
                    {/* Navigation items removed as per request */}
                </div>
            </SidebarComponent>
        </div>
    );
};

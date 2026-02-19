import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export const Header = () => {
    return (
        <div className="h-16 w-full px-6 flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold text-gray-800">Operational Dashboard</h2>
                <div className="h-4 w-[1px] bg-gray-200"></div>
                <span className="text-sm text-gray-500">Magentrix wizard v2.4</span>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative mr-2">
                    <span className="e-icons e-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></span>
                    <input
                        type="text"
                        placeholder="Quick search..."
                        className="pl-10 pr-4 py-1.5 bg-gray-50 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-indigo-100 transition-all outline-none"
                    />
                </div>
                <ButtonComponent cssClass="e-flat e-round" iconCss="e-icons e-notification" />
                <ButtonComponent cssClass="e-flat e-round" iconCss="e-icons e-user" />
            </div>
        </div>
    );
};

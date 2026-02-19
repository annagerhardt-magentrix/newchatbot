export const Dashboard = () => {
    return (
        <div className="p-8 max-w-[1600px] mx-auto min-h-full">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Overview</h1>
                <p className="text-gray-500 mt-1 font-medium">Here's what's happening with your projects today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Revenue', value: '$24,500', trend: '+12.5%', icon: 'e-revenue' },
                    { label: 'Active Users', value: '1,284', trend: '+5.2%', icon: 'e-user' },
                    { label: 'Engagement Rate', value: '64.2%', trend: '-2.4%', icon: 'e-selection' },
                    { label: 'Cloud Storage', value: '85%', trend: 'Steady', icon: 'e-cloud' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover-lift flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                                <span className={`e-icons ${stat.icon} text-gray-600`}></span>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : stat.trend.startsWith('-') ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            <div className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm min-h-[400px]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-800">Growth Analysis</h3>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 text-xs font-bold rounded-lg bg-gray-100 text-gray-600">Weekly</button>
                            <button className="px-3 py-1 text-xs font-bold rounded-lg bg-indigo-50 text-indigo-600">Monthly</button>
                        </div>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
                        <span className="text-gray-400 text-sm italic font-medium">Chart visualization placeholder (Syncfusion Charts)</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-6 font-bold">Recent Activity</h3>
                    <div className="flex flex-col gap-6">
                        {[1, 2, 3, 4].map(j => (
                            <div key={j} className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                                <div>
                                    <div className="text-sm font-bold text-gray-800 leading-none">New work log created</div>
                                    <div className="text-[11px] text-gray-400 mt-1">2 hours ago by System</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

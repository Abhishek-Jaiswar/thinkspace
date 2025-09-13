import React from 'react'
import { BarChart3, BookOpen, DollarSign, TrendingUp,} from 'lucide-react';

const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'posts', label: 'Posts', icon: BookOpen },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'earnings', label: 'Earnings', icon: DollarSign }
];

const Sidebar = ({setActiveTab, activeTab}) => {
    
    return (
        <div className=" ">
            <div className=" p-6 ">
                <nav className="space-y-2">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${activeTab === tab.id
                                    ? 'bg-orange-100 text-orange-700 font-semibold'
                                    : 'text-neutral-600 hover:bg-neutral-100'
                                    }`}
                            >
                                <IconComponent className="w-5 h-5" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
import React from 'react'
import { BarChart3, BookOpen, DollarSign, TrendingUp, } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navigations = [
    { id: 'overview', label: 'Overview', icon: BarChart3, path: "/dashboard" },
    { id: 'articles', label: 'Manage Articles', icon: BookOpen, path: "/dashboard/manage-articles" },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp, path: "/dashboard/analytics" },
    { id: 'earnings', label: 'Earnings', icon: DollarSign, path: "/dashboard/earnings" }
];

const Sidebar = () => {

    return (
        <div className="  ">
            <div className=" p-6 py-2 space-y-6">
                <div className="flex items-center gap-2">
                    <img className="w-8" src="/globe.svg" alt="logo" />
                    <h1 className="text-lg font-bold text-orange-500">
                        Think<span className="text-neutral-950">Space</span>
                    </h1>
                </div>
                <nav className="space-y-2">
                    {navigations.map((link) => {
                        const IconComponent = link.icon;
                        return (
                            <NavLink
                                to={link.path}
                                key={link.id}
                                className={({ isActive }) =>
                                    `w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${isActive
                                        ? "bg-orange-100 text-orange-700 font-semibold"
                                        : "text-neutral-600 hover:bg-neutral-100"
                                    }`
                                }
                            >
                                <IconComponent className="w-5 h-5" />
                                <span>{link.label}</span>
                            </NavLink>
                        );
                    })}
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
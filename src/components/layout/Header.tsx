'use client'

import { usePathname } from 'next/navigation';
import routes from '../sidebar-routes';
import { Search, Bell, User, ChevronDown } from 'lucide-react';
import React from 'react';

// Helper function to find the route details
const findRoute = (routes, pathname) => {
    for (const route of routes) {
        if (route.href === pathname) {
            return route;
        }
        if (route.children) {
            const found = findRoute(route.children, pathname);
            if (found) return found;
        }
    }
    return null;
};

export default function Header() {
    const pathname = usePathname();
    const route = findRoute(routes, pathname);

    // Default title if route not found
    const title = route ? route.label : 'Dashboard';
    const description = route ? `Detailed history of all ${route.label.toLowerCase()} interactions.` : '';

    return (
        <header className="flex items-center justify-between p-6 bg-zinc-950 border-b border-zinc-800">
            <div>
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                {route && <p className="text-zinc-400 mt-1">{description}</p>}
            </div>
            <div className="flex items-center gap-6">
                <button className="text-zinc-400 hover:text-white transition-colors">
                    <Search className="h-5 w-5" />
                </button>
                <button className="text-zinc-400 hover:text-white transition-colors">
                    <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                        <User className="h-4 w-4 text-zinc-400" />
                    </div>
                    <span className="text-sm font-medium text-white">Private Varrior</span>
                    <ChevronDown className="h-4 w-4 text-zinc-500" />
                </div>
            </div>
        </header>
    );
}

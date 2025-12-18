'use client';

import { Filter, Search, FileDown } from 'lucide-react';

export default function CallsHeader({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, handleExport }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="relative w-full max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                    type="text"
                    placeholder="Search by phone, agent, or ID..."
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-white placeholder-zinc-500 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <select
                        className="appearance-none w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-4 pr-10 text-sm font-medium hover:bg-zinc-700 transition cursor-pointer"
                        value={statusFilter}
                        onChange={e => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Completed">Completed</option>
                        <option value="Failed">Failed</option>
                    </select>
                    <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm font-medium hover:bg-zinc-700 transition"
                >
                    <FileDown className="w-4 h-4" />
                    <span>Export</span>
                </button>
            </div>
        </div>
    );
}

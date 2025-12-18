"use client";

import { Search } from "lucide-react";

export default function ExploreAgentsPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white flex items-center">
                    <Search className="w-8 h-8 mr-4" />
                    Explore Agents
                </h2>
                <p className="text-zinc-400 mt-1">Discover and clone pre-built AI voice agents.</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-zinc-400">Coming soon: A marketplace of pre-built agents to clone and deploy instantly.</p>
            </div>
        </div>
    );
}

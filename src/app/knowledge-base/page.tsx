"use client";

import { BookOpen } from "lucide-react";

export default function KnowledgeBasePage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white flex items-center">
                    <BookOpen className="w-8 h-8 mr-4" />
                    Knowledge Base
                </h2>
                <p className="text-zinc-400 mt-1">Manage the knowledge base for your AI agents.</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-zinc-400">No knowledge base articles found.</p>
            </div>
        </div>
    );
}

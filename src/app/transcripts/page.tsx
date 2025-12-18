"use client";

import { FileText } from "lucide-react";

export default function TranscriptsPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white flex items-center">
                    <FileText className="w-8 h-8 mr-4" />
                    Transcripts
                </h2>
                <p className="text-zinc-400 mt-1">Review and analyze call transcripts.</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-zinc-400">No transcripts available.</p>
            </div>
        </div>
    );
}

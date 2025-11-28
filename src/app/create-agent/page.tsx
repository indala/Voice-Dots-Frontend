"use client";

import { ArrowLeft, Mic, Save, Sparkles, Upload, FileSpreadsheet } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

export default function CreateAgentPage() {
    const [prompt, setPrompt] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [agentType, setAgentType] = useState("Inbound");
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleBrowseClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8">
                <Link href="/agents" className="inline-flex items-center text-zinc-400 hover:text-white mb-4 transition">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Agents
                </Link>
                <h2 className="text-3xl font-bold tracking-tight text-white">Create New Agent</h2>
                <p className="text-zinc-400 mt-1">Configure your AI voice agent's personality and capabilities.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Configuration */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">General Info</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-1">Agent Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Support Assistant"
                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all placeholder:text-zinc-600"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1">Type</label>
                                    <div className="flex bg-zinc-950/50 p-1 rounded-lg border border-zinc-800">
                                        <button
                                            onClick={() => setAgentType("Inbound")}
                                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${agentType === 'Inbound'
                                                ? 'bg-zinc-800 text-white shadow-sm'
                                                : 'text-zinc-500 hover:text-zinc-300'
                                                }`}
                                        >
                                            Inbound
                                        </button>
                                        <button
                                            onClick={() => setAgentType("Outbound")}
                                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${agentType === 'Outbound'
                                                ? 'bg-zinc-800 text-white shadow-sm'
                                                : 'text-zinc-500 hover:text-zinc-300'
                                                }`}
                                        >
                                            Outbound
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1">Model</label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <Sparkles className="w-4 h-4 text-violet-500" />
                                        </div>
                                        <select className="w-full appearance-none bg-zinc-950/50 border border-zinc-800 rounded-lg pl-10 pr-10 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all cursor-pointer hover:bg-zinc-900/50 hover:border-zinc-700">
                                            <option>GPT-4o</option>
                                            <option>Claude 3.5 Sonnet</option>
                                            <option>Llama 3</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">System Prompt</h3>
                            <button className="text-xs flex items-center px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 transition-colors border border-violet-500/20">
                                <Sparkles className="w-3 h-3 mr-1.5" />
                                Generate with AI
                            </button>
                        </div>
                        <textarea
                            rows={8}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="You are a helpful assistant..."
                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 font-mono text-sm transition-all resize-none"
                        />
                    </div>

                    {/* File Upload Section */}
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Contact List</h3>
                        <div
                            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${isDragging
                                ? "border-violet-500 bg-violet-500/5"
                                : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50"
                                }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                                    <FileSpreadsheet className="w-6 h-6 text-emerald-500" />
                                </div>
                                <p className="text-white font-medium mb-1">
                                    {file ? file.name : "Upload Excel or CSV"}
                                </p>
                                <p className="text-sm text-zinc-500 mb-4">
                                    {file ? "File selected" : "Drag and drop your contact list here, or click to browse"}
                                </p>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileSelect}
                                    className="hidden"
                                    accept=".csv,.xlsx,.xls"
                                />
                                <button
                                    onClick={handleBrowseClick}
                                    className="px-4 py-2 rounded-lg bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
                                >
                                    {file ? "Change File" : "Browse Files"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Configuration */}
                <div className="space-y-6">
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Voice Settings</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800 cursor-pointer hover:border-violet-500/50 transition-all group">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-medium text-white group-hover:text-violet-400 transition-colors">Sarah (US)</span>
                                    <Mic className="w-4 h-4 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                                </div>
                                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-2/3 h-full" />
                                </div>
                            </div>

                            <button className="w-full py-2.5 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all font-medium">
                                Select Voice
                            </button>
                        </div>
                    </div>

                    <button className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-px focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        <span className="relative flex items-center justify-center w-full rounded-xl bg-zinc-950 px-4 py-3.5 text-sm font-bold text-white transition-all group-hover:bg-transparent group-hover:shadow-lg">
                            <Save className="w-4 h-4 mr-2" />
                            Create Agent
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

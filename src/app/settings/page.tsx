"use client";

import { Settings } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white flex items-center">
                    <Settings className="w-8 h-8 mr-4" />
                    Settings
                </h2>
                <p className="text-zinc-400 mt-1">Manage your account and application settings.</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <p className="text-zinc-400">No settings available yet.</p>
            </div>
        </div>
    );
}

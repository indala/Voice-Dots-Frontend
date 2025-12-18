"use client";

import { Bell } from "lucide-react";

export default function NotificationsPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white flex items-center">
                    <Bell className="w-8 h-8 mr-4" />
                    Notifications
                </h2>
                <p className="text-zinc-400 mt-1">Manage and view your recent notifications.</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-zinc-400">No new notifications.</p>
            </div>
        </div>
    );
}

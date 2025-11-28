"use client";

import { Activity, ArrowUpRight, Clock, DollarSign, Phone, Users } from "lucide-react";
import { CallVolumeChart, OutcomeChart } from "@/components/charts/DashboardCharts";

const stats = [
    {
        label: "Total Calls",
        value: "12,450",
        change: "+12%",
        icon: Phone,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        label: "Minutes Used",
        value: "45,200",
        change: "+8%",
        icon: Clock,
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20"
    },
    {
        label: "Active Agents",
        value: "8",
        change: "0%",
        icon: Users,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        label: "Total Cost",
        value: "$1,240",
        change: "+4%",
        icon: DollarSign,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    },
];

export default function DashboardPage() {
    return (
        <div className="p-8 space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
                <p className="text-zinc-400 mt-1">Overview of your voice agent performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 group">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2.5 rounded-lg border ${stat.bg} ${stat.border} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-medium text-emerald-500 flex items-center bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                                {stat.change}
                                <ArrowUpRight className="w-3 h-3 ml-1" />
                            </span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-zinc-500">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Call Volume & Success</h3>
                            <p className="text-sm text-zinc-500">Daily call metrics over the last 7 days</p>
                        </div>
                        <select className="bg-zinc-950 border border-zinc-800 rounded-md px-3 py-1.5 text-sm text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                        </select>
                    </div>
                    <CallVolumeChart />
                </div>

                {/* Secondary Chart / Activity */}
                <div className="space-y-8">
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Call Outcomes</h3>
                        <p className="text-sm text-zinc-500 mb-6">Answered vs Missed by Category</p>
                        <OutcomeChart />
                    </div>

                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-violet-500 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-shadow" />
                                    <div>
                                        <p className="text-sm text-white font-medium group-hover:text-violet-400 transition-colors">Call completed</p>
                                        <p className="text-xs text-zinc-500">Agent "Sales Bot" • 2 mins ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Bot, MoreHorizontal, Phone, Play, Settings } from "lucide-react";
import Link from "next/link";

const agents = [
    {
        id: 1,
        name: "Customer Support Bot",
        status: "Active",
        type: "Inbound",
        calls: 1240,
        avatar: "bg-blue-500",
    },
    {
        id: 2,
        name: "Sales Outreach",
        status: "Paused",
        type: "Outbound",
        calls: 85,
        avatar: "bg-purple-500",
    },
    {
        id: 3,
        name: "Appointment Setter",
        status: "Active",
        type: "Outbound",
        calls: 432,
        avatar: "bg-emerald-500",
    },
];

export default function AgentsPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">Agents</h2>
                    <p className="text-zinc-400 mt-1">Manage your voice agents and their configurations.</p>
                </div>
                <Link href="/create-agent">
                    <button className="bg-white text-zinc-950 px-4 py-2 rounded-md font-medium hover:bg-zinc-200 transition">
                        + New Agent
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agents.map((agent) => (
                    <div
                        key={agent.id}
                        className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-violet-500/10"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className={`w-12 h-12 rounded-lg ${agent.avatar} flex items-center justify-center text-white`}>
                                <Bot className="w-6 h-6" />
                            </div>
                            <button className="text-zinc-500 hover:text-white transition">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>

                        <div className="flex items-center gap-2 mb-6">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${agent.status === 'Active'
                                ? 'bg-emerald-500/10 text-emerald-500'
                                : 'bg-yellow-500/10 text-yellow-500'
                                }`}>
                                {agent.status}
                            </span>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400">
                                {agent.type}
                            </span>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                            <div className="flex items-center text-zinc-400 text-sm">
                                <Phone className="w-4 h-4 mr-2" />
                                {agent.calls} calls
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition">
                                    <Settings className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition">
                                    <Play className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

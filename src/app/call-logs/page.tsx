"use client";

import { Download, Filter, Play, Search } from "lucide-react";

const calls = [
    {
        id: "CALL-1023",
        agent: "Customer Support",
        customer: "+1 (555) 123-4567",
        duration: "4m 12s",
        status: "Completed",
        date: "Oct 24, 2023",
        cost: "$0.42",
    },
    {
        id: "CALL-1022",
        agent: "Sales Outreach",
        customer: "+1 (555) 987-6543",
        duration: "1m 05s",
        status: "No Answer",
        date: "Oct 24, 2023",
        cost: "$0.11",
    },
    {
        id: "CALL-1021",
        agent: "Appointment Setter",
        customer: "+1 (555) 456-7890",
        duration: "8m 30s",
        status: "Completed",
        date: "Oct 23, 2023",
        cost: "$0.85",
    },
    {
        id: "CALL-1020",
        agent: "Customer Support",
        customer: "+1 (555) 222-3333",
        duration: "2m 15s",
        status: "Failed",
        date: "Oct 23, 2023",
        cost: "$0.00",
    },
];

export default function CallLogsPage() {
    const handleExport = () => {
        const headers = ["ID", "Agent", "Customer", "Duration", "Status", "Date", "Cost"];
        const csvContent = [
            headers.join(","),
            ...calls.map(call => [call.id, call.agent, call.customer, call.duration, call.status, call.date, call.cost].join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "call_logs.csv";
        link.click();
    };

    return (
        <div className="p-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">Call Logs</h2>
                <p className="text-zinc-400 mt-1">Detailed history of all voice interactions.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-zinc-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search by phone, agent, or ID..."
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-md pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => alert("Filter feature coming soon!")}
                            className="flex items-center px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:text-white transition"
                        >
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                        </button>
                        <button
                            onClick={handleExport}
                            className="flex items-center px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:text-white transition"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-zinc-950/50 text-zinc-400 font-medium">
                            <tr>
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3">Agent</th>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Duration</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Cost</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800">
                            {calls.map((call) => (
                                <tr key={call.id} className="hover:bg-zinc-800/50 transition">
                                    <td className="px-6 py-4 font-mono text-zinc-500">{call.id}</td>
                                    <td className="px-6 py-4 text-white">{call.agent}</td>
                                    <td className="px-6 py-4 text-zinc-300">{call.customer}</td>
                                    <td className="px-6 py-4 text-zinc-400">{call.duration}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${call.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' :
                                            call.status === 'Failed' ? 'bg-red-500/10 text-red-500' :
                                                'bg-zinc-500/10 text-zinc-500'
                                            }`}>
                                            {call.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-zinc-400">{call.date}</td>
                                    <td className="px-6 py-4 text-zinc-300">{call.cost}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition">
                                            <Play className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

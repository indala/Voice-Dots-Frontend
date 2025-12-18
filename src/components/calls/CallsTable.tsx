'use client';

import { Play } from 'lucide-react';

const TableHeader = ({ children, className }) => (
    <th className={`px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider ${className}`}>
        {children}
    </th>
);

const TableCell = ({ children, className }) => (
    <td className={`px-6 py-4 whitespace-nowrap text-sm text-zinc-300 ${className}`}>
        {children}
    </td>
);

const StatusBadge = ({ status }) => (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
        {status}
    </span>
);

export default function CallsTable({ calls }) {
    return (
        <div className="overflow-x-auto bg-zinc-900 border border-zinc-800 rounded-lg">
            <table className="min-w-full divide-y divide-zinc-800">
                <thead className="bg-zinc-900">
                    <tr>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Agent</TableHeader>
                        <TableHeader>Customer</TableHeader>
                        <TableHeader>Duration</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Date</TableHeader>
                        <TableHeader>Cost</TableHeader>
                        <TableHeader>Actions</TableHeader>
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                    {calls.map((call) => (
                        <tr key={call.id} className="hover:bg-zinc-800/50 transition-colors">
                            <TableCell>{call.id}</TableCell>
                            <TableCell>{call.agent}</TableCell>
                            <TableCell>{call.customer}</TableCell>
                            <TableCell>{call.duration}</TableCell>
                            <TableCell><StatusBadge status={call.status} /></TableCell>
                            <TableCell>{call.date}</TableCell>
                            <TableCell>{call.cost}</TableCell>
                            <TableCell>
                                <button className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-700 transition">
                                    <Play className="w-4 h-4" />
                                </button>
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

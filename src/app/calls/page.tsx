'use client';

import { useState, useMemo } from 'react';
import { callsData } from '@/data/callsData';
import CallsHeader from '@/components/calls/CallsHeader';
import CallsTable from '@/components/calls/CallsTable';
import { exportToCsv } from '@/utils/export';

export default function CallsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const filteredCalls = useMemo(() => {
        return callsData
            .filter(call => {
                if (statusFilter === 'All') return true;
                return call.status === statusFilter;
            })
            .filter(call => {
                const term = searchTerm.toLowerCase();
                return (
                    call.id.toLowerCase().includes(term) ||
                    call.agent.toLowerCase().includes(term) ||
                    call.customer.toLowerCase().includes(term)
                );
            });
    }, [searchTerm, statusFilter]);

    const handleExport = () => {
        exportToCsv(filteredCalls, 'call_logs.csv');
    };

    return (
        <div className="bg-zinc-950 text-white">
            <CallsHeader
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                handleExport={handleExport}
            />
            <CallsTable calls={filteredCalls} />
            <div className="flex justify-end mt-6">
                 <button className="text-sm text-zinc-400 hover:text-white transition">More </button>
            </div>
        </div>
    );
}

"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from 'recharts';

const data = [
    { name: 'Mon', calls: 400, success: 240, amt: 2400 },
    { name: 'Tue', calls: 300, success: 139, amt: 2210 },
    { name: 'Wed', calls: 200, success: 980, amt: 2290 },
    { name: 'Thu', calls: 278, success: 390, amt: 2000 },
    { name: 'Fri', calls: 189, success: 480, amt: 2181 },
    { name: 'Sat', calls: 239, success: 380, amt: 2500 },
    { name: 'Sun', calls: 349, success: 430, amt: 2100 },
];

const barData = [
    { name: 'Sales', answered: 4000, missed: 2400 },
    { name: 'Support', answered: 3000, missed: 1398 },
    { name: 'Survey', answered: 2000, missed: 9800 },
];

export function CallVolumeChart() {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="calls" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorCalls)" />
                    <Area type="monotone" dataKey="success" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorSuccess)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export function OutcomeChart() {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={barData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                        cursor={{ fill: '#27272a', opacity: 0.4 }}
                        contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Bar dataKey="answered" stackId="a" fill="#8b5cf6" radius={[0, 0, 4, 4]} />
                    <Bar dataKey="missed" stackId="a" fill="#3f3f46" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

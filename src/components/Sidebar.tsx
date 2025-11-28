"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Bot,
    PlusCircle,
    LayoutDashboard,
    Phone,
    CreditCard,
    Mail,
    Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
    {
        label: "Home",
        icon: Home,
        href: "/",
        color: "text-sky-500",
    },
    {
        label: "Agents",
        icon: Bot,
        href: "/agents",
        color: "text-violet-500",
    },
    {
        label: "Create Agent",
        icon: PlusCircle,
        href: "/create-agent",
        color: "text-pink-700",
    },
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-orange-700",
    },
    {
        label: "Call Logs",
        icon: Phone,
        href: "/call-logs",
        color: "text-emerald-500",
    },
    {
        label: "Pricing",
        icon: CreditCard,
        href: "/pricing",
        color: "text-green-700",
    },
    {
        label: "Contact",
        icon: Mail,
        href: "/contact",
        color: "text-gray-500",
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-zinc-950/50 backdrop-blur-xl text-sidebar-foreground border-r border-white/5">
            <div className="px-3 py-2 flex-1">
                <Link href="/" className="flex items-center pl-3 mb-14 group">
                    <div className="relative w-8 h-8 mr-4 transition-transform group-hover:scale-110">
                        {/* Logo placeholder - simple gradient circle */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-lg animate-pulse shadow-lg shadow-violet-500/20" />
                    </div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all">
                        Voice Dots
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition-all duration-200",
                                pathname === route.href
                                    ? "text-white bg-white/10 shadow-inner shadow-white/5"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3 transition-colors", route.color, pathname !== route.href && "opacity-70 group-hover:opacity-100")} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-3 py-2">
                <Link
                    href="/settings"
                    className={cn(
                        "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition-all duration-200",
                        pathname === "/settings"
                            ? "text-white bg-white/10 shadow-inner shadow-white/5"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )}
                >
                    <div className="flex items-center flex-1">
                        <Settings className="h-5 w-5 mr-3 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                        Settings
                    </div>
                </Link>
            </div>
        </div>
    );
}

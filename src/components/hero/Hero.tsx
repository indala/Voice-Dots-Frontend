"use client";

import FloatingLines from "@/components/ui/FloatingLines";
import { ArrowRight, Mic, Phone, Play, Upload, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen flex flex-col bg-background overflow-x-hidden">

            {/* Hero Section */}
            <div className="relative w-full min-h-[800px] flex flex-col items-center justify-center overflow-hidden pt-20">

                {/* Background Container with FloatingLines */}


                <div className="absolute inset-0 w-full h-full z-0">
                    <FloatingLines
                        enabledWaves={['top', 'middle', 'bottom']}
                        // Array - specify line count per wave; Number - same count for all waves
                        lineCount={[0, 9, 0]}
                        // Array - specify line distance per wave; Number - same distance for all waves
                        lineDistance={[8, 6, 4]}
                        bendRadius={5.0}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                    />
                </div>
                <div className="container relative z-10 mx-auto px-6 text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                    >
                        Create AI Voice Agents <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white">
                            That Make Real Calls.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Add prompt → Select voice → Start calling instantly. <br />
                        Automate support, sales, and surveys with human-like AI.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/create-agent"
                            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 font-bold text-zinc-950 shadow-lg shadow-white/10 transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
                        >
                            <span className="mr-2">Get Started</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* How It Works Section - Moved Down */}
            <div className="relative z-10 w-full py-24 bg-zinc-900/30 backdrop-blur-sm border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">Deploying your first voice agent takes less than 5 minutes.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Mic, title: "Add Prompt", desc: "Define persona & goals", color: "text-blue-400", bg: "bg-blue-500/10" },
                            { icon: Phone, title: "Select Voice", desc: "Choose from premium clones", color: "text-violet-400", bg: "bg-violet-500/10" },
                            { icon: Upload, title: "Upload Excel", desc: "Import contacts instantly", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                            { icon: Play, title: "Start Calling", desc: "Launch automated campaigns", color: "text-pink-400", bg: "bg-pink-500/10" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-zinc-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

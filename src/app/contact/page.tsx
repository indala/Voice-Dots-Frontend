"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-6">Get in Touch</h2>
                    <p className="text-zinc-400 text-lg mb-12">
                        Have questions about Voice Dots? We're here to help. Fill out the form or reach out directly.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 mr-4">
                                <Mail className="w-6 h-6 text-violet-500" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Email</h3>
                                <p className="text-zinc-400">support@macenza.com</p>
                                <p className="text-zinc-400">sales@macenza.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 mr-4">
                                <Phone className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Phone</h3>
                                <p className="text-zinc-400">+91 9509528612</p>
                                <p className="text-zinc-500 text-sm">Mon-Fri from 10am to 6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 mr-4">
                                <MapPin className="w-6 h-6 text-pink-500" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Office</h3>
                                <p className="text-zinc-400">Macenza</p>
                                <p className="text-zinc-400">Ajmer, Rajasthan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <button type="submit" className="w-full bg-white text-zinc-950 py-3 rounded-lg font-bold hover:bg-zinc-200 transition flex items-center justify-center">
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

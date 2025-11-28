import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voice Dots",
  description: "Advanced Voice Agent Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <div className="h-full relative flex overflow-hidden bg-background">
          {/* Sidebar */}
          <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="md:pl-72 flex-1 h-full overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

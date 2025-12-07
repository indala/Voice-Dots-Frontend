import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar"
import { Sidebar1 } from "@/components/AppSidebar";


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

export async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        
          <SidebarProvider >
             
            <Sidebar1></Sidebar1>
            

          
        

          {/* Main Content */}
          
          <main className=" overflow-y-auto w-full relative">
            <SidebarTrigger className="block sm:hidden absolute z-50 " size="lg"  />
            {children}
          </main>
          
          </SidebarProvider>
          
       
      </body>
    </html>
  );
}
export default RootLayout

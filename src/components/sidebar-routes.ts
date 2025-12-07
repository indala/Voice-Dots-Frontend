// sidebar-routes.ts
import {
  Home,
  LayoutDashboard,
  Phone,
  Bell,
  Bot,
  PlusCircle,
  Search,
  FileText,
  BookOpen,
  Users,
  Settings,
} from "lucide-react";



const routes= [
  { label: "Home", icon: Home, href: "/", color: "text-sky-500" },
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard", color: "text-orange-700" },
  { label: "Calls", icon: Phone, href: "/calls", color: "text-emerald-500", badge: 3 },
  { label: "Notifications", icon: Bell, href: "/notifications", color: "text-red-500", badge: 3 },

  {
    label: "Voice Agents",
    children: [
      { label: "My Agents", icon: Bot, href: "/agents", color: "text-violet-500" },
      { label: "Create Agents", icon: PlusCircle, href: "/create-agent", color: "text-pink-700" },
      { label: "Explore Agents", icon: Search, href: "/explore-agents", color: "text-indigo-500" },
    ],
  },
  {
    label: "Advanced",
    children: [
      { label: "Transcripts", icon: FileText, href: "/transcripts", color: "text-yellow-600" },
      { label: "Knowledge Base", icon: BookOpen, href: "/knowledge-base", color: "text-blue-600" },
      { label: "Contacts", icon: Users, href: "/contacts", color: "text-teal-600" },
    ],
  },

  { label: "Settings", icon: Settings, href: "/settings", color: "text-gray-500" },
];

export default routes;
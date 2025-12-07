'use client'

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter
} from "./ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible";

import { ChevronDown, ChevronRight,Crown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import routes from "./sidebar-routes";

type RouteItem = (typeof routes)[number];

// 🔹 A clean reusable single component for rendering routes (recursion-ready)
function RenderRouteItem({ route, pathname }: { route: RouteItem; pathname: string }) {
  const isActive = pathname === route.href;

  // -------------------
  // GROUP ITEM
  // -------------------
  const isDefaultOpen = true;
  const [open, setOpen] = useState(isDefaultOpen);

  if (route.children && route.children.length > 0) {
    return (
      <Collapsible key={route.href ?? route.label} open={open} onOpenChange={setOpen} defaultOpen>
        <SidebarGroup>
          <CollapsibleTrigger asChild>
            <SidebarGroupLabel className="flex items-center justify-between cursor-pointer">
              <span>{route.label}</span>
              {open ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </SidebarGroupLabel>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu className="pl-2 border-l border-muted/30 ml-2">
                {route.children.map((child) => (
                  <RenderRouteItem
                    key={child.href ?? child.label}
                    route={child}
                    pathname={pathname}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    );
  }

  // -------------------
  // SIMPLE MENU ITEM
  // -------------------
  return (
    <SidebarMenuItem key={route.href ?? route.label}>
      <SidebarMenuButton 
        asChild
        isActive={isActive}
        className="sidebar-active-gradient text-1xl"
      >
        <Link href={route.href!} className="flex items-center gap-2">
          {route.icon &&
            React.createElement(route.icon, {
              className: `${route.color ?? ""} h-4 w-4`,
            })}

          <span>{route.label}</span>

          {route.badge && (
            <SidebarMenuBadge className="bg-blue-950">
              {route.badge}
            </SidebarMenuBadge>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

// ----------------------------------------------------
// MAIN SIDEBAR COMPONENT — ultra clean
// ----------------------------------------------------
export function Sidebar1() {
  const pathname = usePathname();

  return (
    <Sidebar  variant="floating" className="m-1">
      <SidebarHeader className="text-center text-2xl bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent font-bold     [text-shadow:2px_2px_0_#0003,4px_4px_0_#0002,6px_6px_0_#0001]">
        Voice Dots 
      </SidebarHeader>
      

      <SidebarContent className="p-2">
        <SidebarMenu >
          {routes.map((route) => (
            <RenderRouteItem
              key={route.href ?? route.label}
              route={route}
              pathname={pathname}
            />
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuButton className="text-center bg-linear-to-r from-violet-500 via-pink-600 to-red-600 ">Upgrade to pro <Crown className="ms-auto me-3"/></SidebarMenuButton>
            
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

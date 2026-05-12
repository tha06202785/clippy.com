import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Home, MessageSquare, Settings, LogOut, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const DashboardSidebar = () => {
  const links = [
    { name: 'Overview', icon: LayoutDashboard, href: '/dashboard', active: true },
    { name: 'My Listings', icon: Home, href: '#' },
    { name: 'Enquiries', icon: MessageSquare, href: '#' },
    { name: 'Performance', icon: BarChart3, href: '#' },
    { name: 'Settings', icon: Settings, href: '#' },
  ];

  return (
    <div className="w-64 border-r border-slate-200 bg-white h-[calc(100vh-64px)] hidden lg:flex flex-col p-4">
      <div className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              link.active
                ? "bg-slate-100 text-slate-900"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <link.icon className={cn("h-5 w-5", link.active ? "text-emerald-600" : "text-slate-400")} />
            {link.name}
          </Link>
        ))}
      </div>

      <div className="mt-auto border-t border-slate-100 pt-4">
        <button className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

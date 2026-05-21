'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Sparkles, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Buy', href: '/buy' },
    { name: 'Sell', href: '/sell' },
    { name: 'New Developments', href: '/projects' },
    { name: 'Agents', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold tracking-tight text-slate-900">NestAI</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" className="text-slate-600">
              Log In
            </Button>
            <Button asChild className="bg-violet-600 hover:bg-violet-700 text-white">
              <Link href="/sell">
                <Sparkles className="mr-2 h-4 w-4" />
                List with AI
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden",
          isOpen ? "block animate-in slide-in-from-top-5 fade-in duration-200" : "hidden"
        )}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-background border-b">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t pt-4 pb-2">
            <Button variant="ghost" className="w-full justify-start text-slate-600 mb-2">
              Log In
            </Button>
            <Button asChild className="w-full bg-violet-600 hover:bg-violet-700 text-white">
              <Link href="/sell">
                <Sparkles className="mr-2 h-4 w-4" />
                List with AI
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mb-6 inline-flex animate-bounce items-center gap-2 rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
          <Sparkles className="h-4 w-4" />
          <span>New: AI-Powered Price Valuation</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
          The Smarter Way to <span className="text-emerald-600">Buy & Sell</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
          Let AI handle your listing descriptions, photo analysis, and pricing strategies.
          Connect directly with verified buyers and list your property for <span className="font-bold text-slate-900">FREE</span>.
        </p>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                className="h-14 pl-10 text-lg shadow-lg border-slate-200"
                placeholder="Search by city, neighborhood, or address..."
              />
            </div>
            <Button size="lg" className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white shadow-lg">
              Search
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="h-14 bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 text-white shadow-xl">
              <Link href="/sell">
                <Sparkles className="mr-2 h-5 w-5" />
                Sell with AI
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-slate-200 pt-10">
          <div className="flex items-center gap-2 text-slate-600">
            <Zap className="h-5 w-5 text-emerald-600" />
            <span className="font-medium text-sm">Free Listing</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Sparkles className="h-5 w-5 text-violet-600" />
            <span className="font-medium text-sm">AI Descriptions</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <BarChart3 className="h-5 w-5 text-emerald-600" />
            <span className="font-medium text-sm">Real-time Stats</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="h-5 w-5 text-violet-600" />
            <span className="font-medium text-sm">Verified Buyers</span>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-0 h-[600px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-violet-100/50 to-transparent blur-3xl opacity-50" />
    </div>
  );
};

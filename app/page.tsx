import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ListingGrid } from "@/components/listings/listing-grid";
import { MOCK_LISTINGS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Featured Listings */}
        <section className="py-20 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Featured Listings</h2>
              <p className="text-slate-500 mt-2">Discover hand-picked premium properties analyzed by our AI.</p>
            </div>
            <Button variant="ghost" asChild className="text-emerald-600 hover:text-emerald-700">
              <Link href="/buy">
                View all listings <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ListingGrid listings={MOCK_LISTINGS} />
        </section>

        {/* How it Works */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How NestAI Simplifies Selling</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Skip the traditional stress. Our AI-driven process gets your home listed in minutes, not days.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-emerald-600/20 border border-emerald-600/30 flex items-center justify-center text-2xl font-bold text-emerald-400">1</div>
                <h3 className="text-xl font-bold">Upload Photos</h3>
                <p className="text-slate-400">Simply upload 5+ high-quality photos of your property and enter the basic address details.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-violet-600/20 border border-violet-600/30 flex items-center justify-center text-2xl font-bold text-violet-400">2</div>
                <h3 className="text-xl font-bold">AI Magic</h3>
                <p className="text-slate-400">Our Vision AI analyzes your photos to extract features and generate a high-converting description instantly.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-emerald-600/20 border border-emerald-600/30 flex items-center justify-center text-2xl font-bold text-emerald-400">3</div>
                <h3 className="text-xl font-bold">Launch Free</h3>
                <p className="text-slate-400">Review the AI content, make adjustments, and publish your listing to thousands of buyers for zero cost.</p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-600/10 blur-[120px] rounded-full" />
        </section>

        {/* Final CTA */}
        <section className="py-24 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-violet-600 to-indigo-700 rounded-3xl p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to find your next home?</h2>
              <p className="text-violet-100 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of homeowners and buyers using the smartest real estate platform in the market.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-violet-600 hover:bg-slate-50 px-10 h-14 text-lg font-bold">
                  Browse Listings
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-14 text-lg font-bold">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Try AI Wizard
                </Button>
              </div>
            </div>
            {/* Decoration */}
            <Sparkles className="absolute -top-10 -left-10 h-64 w-64 text-white/5 rotate-12" />
            <Sparkles className="absolute -bottom-10 -right-10 h-64 w-64 text-white/5 -rotate-12" />
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2024 NestAI Real Estate Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import { Navbar } from "@/components/navbar";
import { ListingGrid } from "@/components/listings/listing-grid";
import { MOCK_LISTINGS } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

export default function BuyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 space-y-6 shrink-0">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-slate-900">Filters</h3>
                  <Filter className="h-5 w-5 text-slate-400" />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Price Range</label>
                    <div className="flex gap-2">
                      <Input placeholder="Min" />
                      <Input placeholder="Max" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Property Type</label>
                    <div className="space-y-2">
                      {['Residential', 'Commercial', 'Land'].map((type) => (
                        <div key={type} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                          <span className="text-sm text-slate-600">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Bedrooms</label>
                    <div className="flex gap-2">
                      {['1+', '2+', '3+', '4+'].map((bed) => (
                        <Button key={bed} variant="outline" className="flex-1 h-10 px-0">
                          {bed}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white mt-4">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input className="h-12 pl-10 bg-white border-slate-200 shadow-sm" placeholder="Search address, zip, city..." />
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 w-full sm:w-auto justify-end">
                  <span>Sort by:</span>
                  <select className="bg-transparent font-bold text-slate-900 focus:outline-none">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between lg:hidden">
                <span className="text-sm font-medium text-slate-600">3 Listings Found</span>
                <Button variant="ghost" size="sm" className="text-emerald-600">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Show Filters
                </Button>
              </div>

              <ListingGrid listings={MOCK_LISTINGS} />

              {/* Pagination */}
              <div className="flex justify-center gap-2 py-10">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="outline" className="bg-slate-900 text-white hover:bg-slate-800 hover:text-white border-slate-900">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

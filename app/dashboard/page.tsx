import { Navbar } from "@/components/navbar";
import { DashboardStats } from "@/components/dashboard/stats";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { ListingCard } from "@/components/listings/listing-card";
import { MOCK_LISTINGS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 lg:p-10">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Seller Dashboard</h1>
                <p className="text-slate-500 mt-1">Welcome back, Nesting Owner.</p>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-none px-4 py-1">
                Verified Seller
              </Badge>
            </div>

            <DashboardStats />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">
              {/* My Listings */}
              <div className="xl:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Active Listings</h2>
                  <button className="text-sm font-bold text-emerald-600 hover:underline">Manage All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MOCK_LISTINGS.slice(0, 2).map(l => (
                    <ListingCard key={l.id} listing={l} />
                  ))}
                </div>
              </div>

              {/* Recent Enquiries */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900">Recent Enquiries</h2>
                <Card className="border-slate-200 shadow-sm">
                  <CardContent className="p-0">
                    <div className="divide-y divide-slate-100">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4">
                          <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                            {['JD', 'AS', 'MK', 'LW'][i-1]}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">
                              {['John Doe', 'Alice Smith', 'Mark Kent', 'Lisa Wong'][i-1]}
                            </p>
                            <p className="text-xs text-slate-500 line-clamp-1 italic mt-0.5">
                              &quot;Is this property still available for viewing this weekend?&quot;
                            </p>
                            <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

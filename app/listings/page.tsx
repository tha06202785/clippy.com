import { ListingCard } from "@/components/ListingCard";
import { fetchListings } from "@/app/actions/listings";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default async function ListingsPage() {
  const listings = await fetchListings();
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Property Listings</h1>
        <div className="flex gap-2">
          <Input placeholder="Search..." className="w-80" />
          <Button variant="secondary"><Search className="h-4 w-4 mr-2" />Search</Button>
        </div>
      </div>
      {listings.length === 0 ? (
        <div className="text-center py-20 bg-muted">No listings found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (<ListingCard key={listing.id} listing={listing} />))}
        </div>
      )}
    </div>
  );
}

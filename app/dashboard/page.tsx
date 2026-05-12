import { SellerDashboard } from "@/components/SellerDashboard";
import { fetchListings } from "@/app/actions/listings";

export default async function DashboardPage() {
  const listings = await fetchListings();
  return (
    <div className="container mx-auto py-10 px-4">
      <SellerDashboard initialListings={listings} />
    </div>
  );
}

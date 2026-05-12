import { realEstateApi } from "@/lib/realestate";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home } from "lucide-react";
import { notFound } from "next/navigation";
export default async function ListingDetailsPage({ params }: { params: { id: string } }) {
  let listing;
  try { listing = await realEstateApi.getListingDetails(params.id); } catch { notFound(); }
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold">{listing.title}</h1>
            <Badge variant="outline">{listing.status}</Badge>
          </div>
          <div className="flex gap-4 text-muted-foreground">
            <div className="flex items-center"><MapPin className="w-5 h-5 mr-1" />{listing.address}</div>
            <div className="flex items-center"><Home className="w-5 h-5 mr-1" />{listing.type}</div>
          </div>
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center"><Home className="w-20 h-20" /></div>
          <p className="text-lg text-muted-foreground">{listing.description}</p>
        </div>
        <div className="space-y-6">
          <div className="bg-card border rounded-xl p-6">
            <div className="text-4xl font-bold text-primary mb-6">${listing.price.toLocaleString()}</div>
            <EnquiryForm listingId={listing.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

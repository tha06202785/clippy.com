import React from 'react';
import { ListingCard } from './listing-card';

interface ListingGridProps {
  listings: Array<{
    id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
    tags: string[];
    isOffMarket?: boolean;
  }>;
}

export const ListingGrid: React.FC<ListingGridProps> = ({ listings }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

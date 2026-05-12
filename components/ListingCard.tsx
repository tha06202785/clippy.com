import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Listing } from '@/types/realestate';
import { MapPin, Home, Briefcase, Building2 } from 'lucide-react';
import Link from 'next/link';

interface ListingCardProps { listing: Listing; }

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const Icon = listing.type === 'residential' ? Home : listing.type === 'business' ? Briefcase : Building2;
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted relative flex items-center justify-center">
        <Icon className="w-12 h-12 text-muted-foreground" />
        <Badge className="absolute top-2 right-2" variant={listing.status === 'active' ? 'default' : 'secondary'}>
          {listing.status}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{listing.title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{listing.address}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">${listing.price.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{listing.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/listings/${listing.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Car, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface ListingCardProps {
  listing: {
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
  };
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Card className="group overflow-hidden border-slate-200 bg-white transition-all hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-700">
            ${listing.price.toLocaleString()}
          </Badge>
          {listing.isOffMarket && (
            <Badge className="bg-slate-900 text-white">
              Off-Market
            </Badge>
          )}
        </div>
        {/* AI Tag */}
        <div className="absolute bottom-3 right-3">
          <Badge className="bg-white/90 backdrop-blur-sm text-violet-600 border-violet-100 flex gap-1 items-center">
            <Sparkles className="h-3 w-3" />
            AI Verified
          </Badge>
        </div>
      </div>

      <CardHeader className="p-4 pb-0">
        <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
          {listing.title}
        </h3>
        <div className="flex items-center text-sm text-slate-500">
          <MapPin className="h-4 w-4 mr-1 text-slate-400" />
          <span className="line-clamp-1">{listing.address}</span>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-4 border-b border-slate-100">
        <div className="flex justify-between items-center text-slate-600">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-semibold">{listing.beds} <span className="font-normal text-xs uppercase">Beds</span></span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-semibold">{listing.baths} <span className="font-normal text-xs uppercase">Baths</span></span>
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-semibold">2 <span className="font-normal text-xs uppercase">Cars</span></span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4">
        <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white">
          <Link href={`/buy/${listing.id}`}>Contact Agent</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

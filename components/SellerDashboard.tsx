'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { AIMagicButton } from '@/components/AIMagicButton';
import { FeatureTags } from '@/components/FeatureTags';
import { Listing } from '@/types/realestate';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
interface MagicResult { title: string; description: string; tags: string[]; }
export const SellerDashboard: React.FC<{ initialListings: Listing[] }> = ({ initialListings }) => {
  const [listings] = useState(initialListings);
  const [formData, setFormData] = useState({ title: '', description: '', address: '', price: '', tags: [] as string[] });
  const [isVerified, setIsVerified] = useState(false);
  const handleAIGenerated = (data: MagicResult) => { setFormData(prev => ({ ...prev, title: data.title, description: data.description, tags: data.tags })); };
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Seller Dashboard</h1>
      <Tabs defaultValue="listings">
        <TabsList><TabsTrigger value="listings">My Listings</TabsTrigger><TabsTrigger value="create">Create New</TabsTrigger></TabsList>
        <TabsContent value="listings">
          <Card>
            <CardHeader><CardTitle>Your Properties</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Price</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {listings.map(l => (
                    <TableRow key={l.id}><TableCell>{l.title}</TableCell><TableCell>${l.price}</TableCell><TableCell><Badge>{l.status}</Badge></TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="create">
          <Card>
            <CardHeader><CardTitle>Create Listing</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Address</Label><Input value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} /></div>
                <div className="space-y-2"><Label>Price</Label><Input type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} /></div>
              </div>
              <AIMagicButton onGenerated={handleAIGenerated} address={formData.address} price={formData.price} images={[]} />
              <div className="space-y-2"><Label>Title</Label><Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} /></div>
              <div className="space-y-2"><Label>Description</Label><Textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} /></div>
              <FeatureTags tags={formData.tags} />
              <div className="flex items-center space-x-2"><Checkbox id="v" checked={isVerified} onCheckedChange={c => setIsVerified(!!c)} /><Label htmlFor="v">I verify accuracy</Label></div>
              <Button className="w-full" disabled={!isVerified}>Publish</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
interface MagicResult { title: string; description: string; tags: string[]; }
export const AIMagicButton: React.FC<{ onGenerated: (data: MagicResult) => void; address: string; price: string; images: string[] }> = ({ onGenerated, address, price, images }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleMagic = async () => {
    if (!address || !price) { alert('Please enter address and price first.'); return; }
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai/magic', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ address, price, images }), });
      const data = await response.json();
      onGenerated(data);
    } catch { alert('AI generation failed.'); } finally { setIsLoading(false); }
  };
  return (
    <Button onClick={handleMagic} type="button" variant="outline" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white" disabled={isLoading}>
      {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
      AI Magic Listing
    </Button>
  );
};

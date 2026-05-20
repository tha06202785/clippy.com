'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Upload, Sparkles, Loader2, CheckCircle2, AlertTriangle, X, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const AIWizard = () => {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [description, setDescription] = useState('');
  const [copied, setCopied] = useState(false);
  const [tags] = useState(['Renovated Kitchen', 'Ocean View', 'Smart Home', 'Private Pool']);

  const handleCopy = () => {
    navigator.clipboard.writeText(description);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setDescription("This stunning beachfront property offers the perfect blend of luxury and comfort. Featuring a recently renovated gourmet kitchen with top-of-the-line appliances, the home boasts breathtaking ocean views from every room. The integrated smart home system provides effortless control over lighting and security. Step outside to your own private infinity pool, a true oasis for relaxation.");
      setIsGenerating(false);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-center gap-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors",
              step >= s ? "bg-violet-600 text-white" : "bg-slate-200 text-slate-500"
            )}>
              {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
            </div>
            {s < 3 && <div className={cn("h-1 w-12 rounded-full", step > s ? "bg-violet-600" : "bg-slate-200")} />}
          </div>
        ))}
      </div>

      <Card className="border-slate-200 shadow-xl">
        <CardHeader className="text-center border-b border-slate-100 bg-slate-50/50">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            {step === 1 ? 'Property Details' : step === 2 ? 'Review AI Content' : 'Listing Published'}
            {step < 3 && <Sparkles className="h-5 w-5 text-violet-600" />}
          </CardTitle>
          <CardDescription>
            {step === 1 ? 'Upload photos and enter basic info to get started.' : step === 2 ? 'Our AI has generated a description for you.' : 'Your property is now live on NestAI!'}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-10 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="rounded-full bg-white p-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Upload className="h-8 w-8 text-violet-600" />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900">Click or drag photos to upload</p>
                <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 10MB (min 5 photos recommended)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input id="address" placeholder="123 Ocean Drive, Miami, FL" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Asking Price</Label>
                  <Input id="price" type="number" placeholder="4,500,000" className="h-12" />
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full h-14 bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 text-white shadow-lg text-lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    ✨ Generate Magic Description
                  </>
                )}
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="ai-description" className="flex items-center gap-2">
                    AI Generated Description
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-violet-600 border-violet-200 bg-violet-50">Experimental</Badge>
                  </Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs text-slate-500 hover:text-slate-900"
                    onClick={handleCopy}
                    aria-label="Copy description to clipboard"
                  >
                    <div aria-live="polite" className="flex items-center gap-1">
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600 animate-in fade-in zoom-in" />
                          <span className="text-emerald-600 animate-in fade-in zoom-in">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </div>
                  </Button>
                </div>
                <Textarea
                  id="ai-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[200px] text-slate-700 leading-relaxed border-violet-100 focus:border-violet-300"
                />
              </div>

              <div className="space-y-2">
                <Label>Auto-Detected Features</Label>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1 flex gap-1 items-center bg-slate-100 text-slate-700">
                      {tag}
                      <X className="h-3 w-3 cursor-pointer hover:text-red-500" />
                    </Badge>
                  ))}
                  <Badge variant="outline" className="px-3 py-1 border-dashed cursor-pointer hover:bg-slate-50">+ Add</Badge>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                <p className="text-sm text-amber-800">
                  <span className="font-bold">Human-in-the-loop:</span> Please verify all AI-generated details before publishing.
                </p>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 h-12" onClick={() => setStep(1)}>Back</Button>
                <Button className="flex-[2] h-12 bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setStep(3)}>
                  Publish Listing
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-10 animate-in zoom-in duration-500">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Successfully Listed!</h3>
              <p className="text-slate-600 mt-2 mb-8">Your property is now live.</p>
              <div className="flex flex-col gap-3 max-w-xs mx-auto">
                <Button asChild className="bg-slate-900 text-white">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/buy">Browse Listings</Link>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

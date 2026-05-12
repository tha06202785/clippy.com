import { Navbar } from "@/components/navbar";
import { AIWizard } from "@/components/sell/ai-wizard";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function SellPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-1 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              List Your Property with <span className="text-violet-600">AI Magic</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Our vision models analyze your photos to highlight the best features of your home automatically.
            </p>
          </div>

          <AIWizard />

          {/* Benefits Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-slate-900">Zero Commission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Keep your equity. We connect you directly with buyers for free.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <Sparkles className="h-8 w-8 text-violet-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-slate-900">AI Vision Analysis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Our AI detects granite countertops, hardwood floors, and pool features automatically.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-slate-900">High Conversion</h3>
              <p className="text-slate-600 text-sm leading-relaxed">AI-optimized descriptions are designed to trigger emotional responses in buyers.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

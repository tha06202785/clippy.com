import { Navbar } from "@/components/navbar";
import { ProjectGrid } from "@/components/projects/project-grid";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import { Building } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-1 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">
              <Building className="h-3 w-3" />
              New Developments
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-6">
              Exclusive Luxury Projects
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore upcoming residential and commercial developments from the world&apos;s leading agencies.
              Register your interest early for priority unit selection.
            </p>
          </div>

          <ProjectGrid projects={MOCK_PROJECTS} />

          {/* Note Section */}
          <div className="mt-24 p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4 italic">Are you a Developer?</h3>
            <p className="text-slate-600 max-w-xl mx-auto mb-8">
              Want to showcase your project to our elite community of buyers and investors?
              Contact our partnership team to manage your development listings.
            </p>
            <button className="text-emerald-600 font-bold border-b-2 border-emerald-600 hover:text-emerald-700 transition-colors">
              Contact Partnerships
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

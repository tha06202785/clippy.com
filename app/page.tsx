import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Home, Building, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Home className="h-6 w-6 mr-2" />
          <span className="font-bold">RealEstate OpenPlatform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/listings">
            Search
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
            Developments
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Seller Portal
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The Future of Real Estate is Open
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  List for free, search instantly, and let AI handle the heavy lifting. The primary checkpoint for Buyers and Sellers.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/listings">Start Searching</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/dashboard">List Property</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Search className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>AI-Powered Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Find off-market opportunities and analyzed listings with our advanced search engine.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>New Developments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Browse the latest commercial and residential projects directly from agencies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Zero Commission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Direct connection between buyers and sellers with no hidden platform fees.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 RealEstate OpenPlatform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

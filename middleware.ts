import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect the dashboard route
  if (pathname.startsWith('/dashboard')) {
    // In a real production app with Supabase Auth or NextAuth,
    // we would check for a session cookie here.
    // For this scaffold, we assume authentication is handled via the Real Estate API key
    // and session management in a real-world integration.

    // Example: Redirect to home if no auth cookie is present (placeholder)
    const authCookie = request.cookies.get('auth_session');
    if (!authCookie && process.env.NODE_ENV === 'production') {
      // return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};

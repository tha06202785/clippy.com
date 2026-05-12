import { processMagicListing } from '@/app/actions/ai';
import { NextResponse } from 'next/server';
import { isRateLimited } from '@/lib/ratelimit';
import { realEstateApi } from '@/lib/realestate';
export async function POST(request: Request) {
  let user;
  try { user = await realEstateApi.getCurrentUser() as { id: string }; } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }); }
  const limited = await isRateLimited(user.id, 2, 60000);
  if (limited) return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  const { address, price, images } = await request.json();
  if (!address || !price) return NextResponse.json({ error: 'Missing address or price' }, { status: 400 });
  const result = await processMagicListing(address, price, images || []);
  if (result.success) return NextResponse.json(result.data);
  else return NextResponse.json({ error: result.error }, { status: 500 });
}

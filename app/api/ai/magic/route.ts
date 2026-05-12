import { processMagicListing } from '@/app/actions/ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { address, price, images } = await request.json();
  if (!address || !price) {
    return NextResponse.json({ error: 'Missing address or price' }, { status: 400 });
  }
  const result = await processMagicListing(address, price, images || []);
  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}

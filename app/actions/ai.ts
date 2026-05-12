'use server';
import { analyzePropertyPhotos, generateListingContent } from '@/lib/ai';
export async function processMagicListing(address: string, price: string, images: string[]) {
  try {
    let tags: string[] = [];
    if (images.length > 0) { tags = await analyzePropertyPhotos(images); }
    else { tags = ['modern', 'spacious', 'quiet neighborhood']; }
    const content = await generateListingContent(address, price, tags);
    return { success: true, data: { title: content.title, description: content.description, tags: tags, } };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    return { success: false, error: message };
  }
}

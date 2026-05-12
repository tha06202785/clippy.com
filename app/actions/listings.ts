'use server';
import { realEstateApi } from '@/lib/realestate';
import { Listing } from '@/types/realestate';
import { revalidatePath } from 'next/cache';
export async function createListing(data: Partial<Listing>, type: 'residential' | 'business' | 'commercial' = 'residential') {
  try {
    let response;
    if (type === 'residential') response = await realEstateApi.createUpdateResidential(data);
    else if (type === 'business') response = await realEstateApi.createUpdateBusiness(data);
    else response = await realEstateApi.createUpdateCommercial(data);
    revalidatePath('/dashboard'); revalidatePath('/listings');
    return { success: true, data: response };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    return { success: false, error: message };
  }
}
export async function fetchListings() {
  try {
    const agencies = await realEstateApi.getMyAgencies();
    if (agencies.length > 0) return await realEstateApi.getAgencyListings(agencies[0].id);
    return [];
  } catch { return []; }
}

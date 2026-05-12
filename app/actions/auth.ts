'use server';
import { realEstateApi } from '@/lib/realestate';
import { supabase } from '@/lib/supabase';
export async function syncUserProfile() {
  try {
    const userContext = await realEstateApi.getCurrentUser() as { id: string; email: string };
    if (!userContext || !userContext.id) return { success: false, error: 'Failed context' };
    const { data: profile, error } = await supabase.from('profiles').upsert({ id: userContext.id, email: userContext.email, role: 'seller' }, { onConflict: 'id' }).select().single();
    if (error) throw error;
    return { success: true, profile };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    return { success: false, error: message };
  }
}

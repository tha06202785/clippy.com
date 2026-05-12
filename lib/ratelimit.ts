import { supabase } from '@/lib/supabase';

/**
 * Basic rate limiting using Supabase
 * Returns true if the request should be limited
 */
export async function isRateLimited(userId: string, limit = 5, timeframeMs = 60000) {
  const now = Date.now();
  const windowStart = new Date(now - timeframeMs).toISOString();

  // We use a simple table to track requests.
  // In a real production app, Redis/Upstash is preferred for low latency.
  const { count, error } = await supabase
    .from('api_requests_log')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .gte('timestamp', windowStart);

  if (error) {
    console.error('Rate limit check error:', error);
    return false; // Fail open to not block users on DB error
  }

  if (count !== null && count >= limit) {
    return true;
  }

  // Log the current request
  await supabase.from('api_requests_log').insert({
    user_id: userId,
    timestamp: new Date().toISOString(),
  });

  return false;
}

import { Agency, Listing, Project, Enquiry, Statistics } from '@/types/realestate';
import { supabase } from '@/lib/supabase';

const BASE_URL = process.env.REAL_ESTATE_API_BASE_URL;
const API_KEY = process.env.REAL_ESTATE_API_KEY;

async function request<T>(endpoint: string, options: RequestInit = {}, useCache = false): Promise<T> {
  const cacheKey = `${options.method || 'GET'}:${endpoint}`;

  // 1. Check Cache if requested
  if (useCache && (options.method === 'GET' || !options.method)) {
    const { data: cached } = await supabase
      .from('api_cache')
      .select('response, timestamp')
      .eq('endpoint', cacheKey)
      .single();

    if (cached && (Date.now() - new Date(cached.timestamp).getTime() < 3600000)) { // 1 hour TTL
      return cached.response as T;
    }
  }

  // 2. Perform Request
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const result = await response.json();

  // 3. Update Cache if requested
  if (useCache && (options.method === 'GET' || !options.method)) {
    await supabase.from('api_cache').upsert({
      endpoint: cacheKey,
      response: result,
      timestamp: new Date().toISOString(),
    }, { onConflict: 'endpoint' });
  }

  return result;
}

export const realEstateApi = {
  testAgency: () => request<Agency>('/v1/agencies/_testAgency', { method: 'POST' }),
  getAgencyListings: (id: string) => request<Listing[]>(`/v1/agencies/${id}/listings`, {}, true),
  getAgencyStatistics: (id: string) => request<Statistics>(`/v1/agencies/${id}/statistics`, {}, true),
  getAgentStatistics: (id: string) => request<Statistics>(`/v1/agents/${id}/statistics`, {}, true),
  searchEnquiries: () => request<Enquiry[]>('/v1/enquiries'),
  sendEnquiry: (enquiry: Partial<Enquiry>) => request<Enquiry>('/v1/enquiries', { method: 'POST', body: JSON.stringify(enquiry) }),
  getEnquiryDetails: (id: string) => request<Enquiry>(`/v1/enquiries/${id}`),
  getListingDetails: (id: string) => request<Listing>(`/v1/listings/${id}`, {}, true),
  getListingEnquiries: (id: string) => request<Enquiry[]>(`/v1/listings/${id}/enquiries`),
  getListingStatistics: (id: string) => request<Statistics>(`/v1/listings/${id}/statistics`, {}, true),
  createUpdateResidential: (data: Partial<Listing>) => request<Listing>('/v1/listings/residential', { method: 'PUT', body: JSON.stringify(data) }),
  createUpdateBusiness: (data: Partial<Listing>) => request<Listing>('/v1/listings/business', { method: 'PUT', body: JSON.stringify(data) }),
  createUpdateCommercial: (data: Partial<Listing>) => request<Listing>('/v2/listings/commercial', { method: 'PUT', body: JSON.stringify(data) }),
  offMarketResidential: (data: { id: string }) => request<void>('/v2/listings/residential/offmarket', { method: 'POST', body: JSON.stringify(data) }),
  offMarketCommercial: (data: { id: string }) => request<void>('/v2/listings/commercial/offmarket', { method: 'POST', body: JSON.stringify(data) }),
  offMarketBusiness: (data: { id: string }) => request<void>('/v2/listings/business/offmarket', { method: 'POST', body: JSON.stringify(data) }),
  getProcessingReports: () => request<unknown>('/v1/listings/processingReports'),
  getCurrentUser: () => request<unknown>('/v1/me'),
  getMyAgencies: () => request<Agency[]>('/v1/me/agencies', {}, true),
  getMyProviders: () => request<unknown[]>('/v1/me/providers', {}, true),
  searchProjects: () => request<Project[]>('/v1/projects', {}, true),
  getProjectDetails: (id: string) => request<Project>(`/v1/projects/${id}`, {}, true),
  getProjectListings: (id: string) => request<Listing[]>(`/v1/projects/${id}/listings`, {}, true),
  getProjectStatistics: (id: string) => request<Statistics>(`/v1/projects/${id}/statistics`, {}, true),
};

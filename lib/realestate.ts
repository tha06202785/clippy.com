import { Agency, Listing, Project, Enquiry, Statistics } from '@/types/realestate';
const BASE_URL = process.env.REAL_ESTATE_API_BASE_URL;
const API_KEY = process.env.REAL_ESTATE_API_KEY;
async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, { ...options, headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}`, ...options.headers }, });
  if (!response.ok) { throw new Error(`API request failed with status ${response.status}`); }
  return response.json();
}
export const realEstateApi = {
  testAgency: () => request<Agency>('/v1/agencies/_testAgency', { method: 'POST' }),
  getAgencyListings: (id: string) => request<Listing[]>(`/v1/agencies/${id}/listings`),
  getAgencyStatistics: (id: string) => request<Statistics>(`/v1/agencies/${id}/statistics`),
  getAgentStatistics: (id: string) => request<Statistics>(`/v1/agents/${id}/statistics`),
  searchEnquiries: () => request<Enquiry[]>('/v1/enquiries'),
  sendEnquiry: (enquiry: Partial<Enquiry>) => request<Enquiry>('/v1/enquiries', { method: 'POST', body: JSON.stringify(enquiry) }),
  getEnquiryDetails: (id: string) => request<Enquiry>(`/v1/enquiries/${id}`),
  getListingDetails: (id: string) => request<Listing>(`/v1/listings/${id}`),
  getListingEnquiries: (id: string) => request<Enquiry[]>(`/v1/listings/${id}/enquiries`),
  getListingStatistics: (id: string) => request<Statistics>(`/v1/listings/${id}/statistics`),
  createUpdateResidential: (data: Partial<Listing>) => request<Listing>('/v1/listings/residential', { method: 'PUT', body: JSON.stringify(data) }),
  createUpdateBusiness: (data: Partial<Listing>) => request<Listing>('/v1/listings/business', { method: 'PUT', body: JSON.stringify(data) }),
  createUpdateCommercial: (data: Partial<Listing>) => request<Listing>('/v2/listings/commercial', { method: 'PUT', body: JSON.stringify(data) }),
  offMarketResidential: (data: { id: string }) => request<void>('/v2/listings/residential/offmarket', { method: 'POST', body: JSON.stringify(data) }),
  offMarketCommercial: (data: { id: string }) => request<void>('/v2/listings/commercial/offmarket', { method: 'POST', body: JSON.stringify(data) }),
  offMarketBusiness: (data: { id: string }) => request<void>('/v2/listings/business/offmarket', { method: 'POST', body: JSON.stringify(data) }),
  getProcessingReports: () => request<unknown>('/v1/listings/processingReports'),
  getCurrentUser: () => request<unknown>('/v1/me'),
  getMyAgencies: () => request<Agency[]>('/v1/me/agencies'),
  getMyProviders: () => request<unknown[]>('/v1/me/providers'),
  searchProjects: () => request<Project[]>('/v1/projects'),
  getProjectDetails: (id: string) => request<Project>(`/v1/projects/${id}`),
  getProjectListings: (id: string) => request<Listing[]>(`/v1/projects/${id}/listings`),
  getProjectStatistics: (id: string) => request<Statistics>(`/v1/projects/${id}/statistics`),
};

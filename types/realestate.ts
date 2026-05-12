export interface Agency { id: string; name: string; }
export interface Agent { id: string; name: string; }
export interface Listing { id: string; title: string; description: string; price: number; address: string; type: 'residential' | 'commercial' | 'business'; status: 'active' | 'off-market'; }
export interface Project { id: string; name: string; description: string; }
export interface Enquiry { id: string; listingId: string; name: string; email: string; message: string; }
export interface Statistics { views: number; enquiries: number; }

# Production-Ready Checklist: NestAI

To transition this scaffolded platform into a production-ready environment, the following actions must be completed across infrastructure, security, feature refinement, and compliance.

## 1. Infrastructure & Deployment
- [ ] **Database Migration:** Move from the Supabase Free Tier to a Pro Tier if high traffic or large data volumes are expected.
- [ ] **CDN Configuration:** Ensure Vercel's Edge Network is properly configured for static asset delivery.
- [ ] **Custom Domain & SSL:** Link a custom domain (e.g., `nestai.com`) and ensure HTTPS is strictly enforced.
- [ ] **AI Infrastructure:**
    - [ ] Move Ollama from a local/test environment to a dedicated GPU-optimized cloud instance (e.g., Lambda Labs or Azure ND-series).
    - [ ] Set up a Load Balancer if serving multiple concurrent AI generation requests.

## 2. Security & Data Protection
- [ ] **Environment Variable Audit:** Ensure all secrets (`API_KEY`, `SUPABASE_SERVICE_ROLE`) are stored in Vercel's encrypted production environment, not in `.env.local` files pushed to Git.
- [ ] **Supabase RLS Policies:** Harden Row Level Security (RLS) policies to ensure users can *only* access their own profiles and listing drafts.
- [ ] **Rate Limiting:**
    - [ ] Implement global rate limiting on API routes to prevent DDoS.
    - [ ] Implement stricter per-user quotas for AI generation to control costs.
- [ ] **Input Sanitization:** Add deep validation for address and price inputs using Zod or a similar library before sending data to the Real Estate API.

## 3. AI Refinement (Ollama)
- [ ] **Prompt Engineering:** Fine-tune system prompts for `llama3` to ensure 100% adherence to Fair Housing laws (Fairness, Accessibility, Inclusion).
- [ ] **Vision Guardrails:** Implement a check to ensure uploaded photos are actual property photos (e.g., filtering out personal photos or inappropriate content).
- [ ] **Fallback Mechanism:** Develop a robust "Offline Mode" if the Ollama service is down, allowing users to enter all data manually without friction.

## 4. Frontend & User Experience
- [ ] **Error Boundaries:** Add React Error Boundaries to catch and handle API failures gracefully without crashing the UI.
- [ ] **Loading States:** Implement Skeleton loaders for Listing cards and search results to improve perceived performance.
- [ ] **Image Optimization:** Integrate a dedicated Image CDN or use Next.js `next/image` with an optimized loader to handle high-resolution property photos efficiently.
- [ ] **Analytics:** Integrate Google Analytics 4 (GA4) or Vercel Analytics to track user conversion and search behavior.

## 5. Compliance & Legal
- [ ] **Privacy Policy:** Draft and display a Privacy Policy detailing how property data and user info are stored.
- [ ] **Terms of Service:** Include a TOS specifically mentioning that AI-generated content must be verified by the user.
- [ ] **Accessibility Audit:** Run a full WCAG 2.1 AA audit to ensure the platform is usable by everyone, including those with screen readers.
- [ ] **Fair Housing Disclaimer:** Add a permanent footer link explaining the platform's commitment to Fair Housing.

## 6. Testing & QA
- [ ] **End-to-End (E2E) Tests:** Write Playwright tests for the critical "Listing Creation" and "Enquiry Submission" paths.
- [ ] **Load Testing:** Simulate high traffic to verify that the Supabase `api_cache` system prevents overloading the Real Estate API.
- [ ] **Unit Tests:** Increase test coverage for `lib/realestate.ts` and `lib/ai.ts`.

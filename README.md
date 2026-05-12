# NestAI - Free Open-Source Real Estate Platform

NestAI is a modern real estate platform designed for Buyers, Sellers, and Agencies, leveraging AI to simplify listing creation and property discovery.

## 🚀 Key Features

- **AI Magic Listing:** Sellers can generate professional property listings from photos and addresses using Ollama (Llava & Llama3).
- **Buyer Dashboard:** Search for listings and off-market opportunities with instant enquiry tracking.
- **Agency Management:** View listing statistics and agent performance.
- **Off-Market Listings:** Support for private listings across residential, commercial, and business sectors.
- **Real Estate API Integration:** Strict adherence to industry-standard API endpoints.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), Tailwind CSS, Shadcn UI
- **Database:** Supabase (Auth, Profiles, API Cache)
- **AI:** Ollama (Local/Cloud instance)
- **Hosting:** Vercel

## ⚙️ Setup

### Environment Variables

Create a `.env.local` file with the following:

```env
# Real Estate API
REAL_ESTATE_API_BASE_URL=https://api.example.com
REAL_ESTATE_API_KEY=your_api_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Ollama
OLLAMA_BASE_URL=http://your-ollama-host:11434
```

### Installation

```bash
npm install
npm run dev
```

## 🔒 Security & Compliance

- **Fair Housing:** AI system prompts are configured to strictly forbid discriminatory language.
- **Human-in-the-Loop:** All AI-generated content requires manual review and confirmation by the seller before publishing.
- **API Constraints:** No `POST /v1/projects` endpoint is used (Projects are Read-Only).

## 📄 License

Open-source under the MIT License.

# Deployment Guide: NestAI

Follow these steps to deploy NestAI to Vercel and Supabase.

## 1. Supabase Setup (Database & Auth)

1.  **Create a New Project:** Go to [Supabase Dashboard](https://app.supabase.com/) and create a new project.
2.  **Database Schema:** Run the following SQL in the SQL Editor to set up the required tables:

```sql
-- Profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE,
  role TEXT DEFAULT 'seller',
  ai_credits_remaining INTEGER DEFAULT 50,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- API Cache table
CREATE TABLE api_cache (
  id BIGSERIAL PRIMARY KEY,
  endpoint TEXT UNIQUE,
  response JSONB,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Listing Drafts table
CREATE TABLE listing_drafts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  ai_generated_content JSONB,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE listing_drafts ENABLE ROW LEVEL SECURITY;

-- Create Policies (Simplified)
CREATE POLICY "Users can view their own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can manage their own drafts" ON listing_drafts FOR ALL USING (auth.uid() = user_id);
```

3.  **Authentication:** Enable Email/Password or Social providers in the **Authentication** tab.
4.  **Get Credentials:** Go to **Project Settings > API** and copy the `Project URL` and `anon public` key.

## 2. Ollama Cloud Setup

1.  **Deploy Ollama:** Host Ollama on a GPU-enabled instance (e.g., RunPod, Lambda Labs, or a dedicated VPS).
2.  **Pull Models:** Ensure the instance has the required models:
    ```bash
    ollama pull llama3
    ollama pull llava
    ```
3.  **Expose API:** Ensure the Ollama API (default port 11434) is accessible via a public URL (or secured via a proxy/VPN if connecting via Vercel).
4.  **Note the URL:** You will need the `OLLAMA_BASE_URL`.

## 3. Vercel Deployment

1.  **Push to GitHub:** Push your local repository to a private or public GitHub repo.
2.  **Import to Vercel:** Go to [Vercel](https://vercel.com/new) and import your repository.
3.  **Configure Environment Variables:** In the Vercel project settings, add the following:

| Key | Value |
| :--- | :--- |
| `REAL_ESTATE_API_BASE_URL` | The base URL for the Real Estate API |
| `REAL_ESTATE_API_KEY` | Your secret API key |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase Anon Key |
| `OLLAMA_BASE_URL` | The URL of your Ollama instance |

4.  **Deploy:** Click **Deploy**. Vercel will build the Next.js app and provide a live URL.

## 4. Post-Deployment Verification

1.  **Auth:** Sign up as a new user and ensure the profile is created in Supabase.
2.  **AI Wizard:** Go to the "Sell" page, upload photos, and verify that Ollama generates listing content.
3.  **Search:** Verify that listings are being fetched from the Real Estate API and cached in Supabase.

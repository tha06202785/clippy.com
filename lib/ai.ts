import { Ollama } from 'ollama';
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
const TEXT_MODEL = process.env.OLLAMA_TEXT_MODEL || 'llama3';
const VISION_MODEL = process.env.OLLAMA_VISION_MODEL || 'llava';
const client = new Ollama({ host: OLLAMA_BASE_URL });
const FAIR_HOUSING_PROMPT = `Do not use discriminatory language. Adhere to Fair Housing guidelines. Do not hallucinate features. Keep tone professional.`;
export async function analyzePropertyPhotos(images: string[]) {
  try {
    const response = await client.generate({ model: VISION_MODEL, prompt: 'Identify features of this property from photos. Return comma-separated list.', images: images, });
    return response.response.split(',').map(tag => tag.trim());
  } catch { return []; }
}
export async function generateListingContent(address: string, price: string, features: string[]) {
  const systemPrompt = `You are a real estate assistant. ${FAIR_HOUSING_PROMPT}`;
  const userPrompt = `Generate Title and Description for property at ${address} priced at ${price}. Features: ${features.join(', ')}. Format as JSON: {"title": "...", "description": "..."}`;
  try {
    const response = await client.generate({ model: TEXT_MODEL, system: systemPrompt, prompt: userPrompt, format: 'json', });
    return JSON.parse(response.response);
  } catch { return { title: `Listing for ${address}`, description: `A beautiful property at ${address} priced at ${price}.` }; }
}

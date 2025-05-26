
import {genkit} from 'genkit';
// import {googleAI} from '@genkit-ai/googleai'; // Removed

export const ai = genkit({
  plugins: [/* googleAI() */], // Removed googleAI plugin
  // model: 'googleai/gemini-2.0-flash', // Removed default model
});

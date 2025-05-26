'use server';
/**
 * @fileOverview AI-powered photo caption suggestions.
 *
 * - suggestPhotoCaptions - A function that suggests captions for a given photo.
 * - SuggestPhotoCaptionsInput - The input type for the suggestPhotoCaptions function.
 * - SuggestPhotoCaptionsOutput - The return type for the suggestPhotoCaptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPhotoCaptionsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  category: z.string().describe('The category of the photo.'),
});
export type SuggestPhotoCaptionsInput = z.infer<typeof SuggestPhotoCaptionsInputSchema>;

const SuggestPhotoCaptionsOutputSchema = z.object({
  captions: z.array(z.string()).describe('Suggested captions for the photo.'),
});
export type SuggestPhotoCaptionsOutput = z.infer<typeof SuggestPhotoCaptionsOutputSchema>;

export async function suggestPhotoCaptions(input: SuggestPhotoCaptionsInput): Promise<SuggestPhotoCaptionsOutput> {
  return suggestPhotoCaptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPhotoCaptionsPrompt',
  input: {schema: SuggestPhotoCaptionsInputSchema},
  output: {schema: SuggestPhotoCaptionsOutputSchema},
  prompt: `You are a creative social media manager who suggests captions for photos.

  Suggest captions for the following photo, which belongs to the '{{category}}' category.
  Photo: {{media url=photoDataUri}}

  Return 3 different captions.  Make them fun and engaging.
  `,
});

const suggestPhotoCaptionsFlow = ai.defineFlow(
  {
    name: 'suggestPhotoCaptionsFlow',
    inputSchema: SuggestPhotoCaptionsInputSchema,
    outputSchema: SuggestPhotoCaptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

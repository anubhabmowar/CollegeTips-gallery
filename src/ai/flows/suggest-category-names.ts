// Use server directive.
'use server';

/**
 * @fileOverview AI-powered category name suggestion agent.
 *
 * - suggestAlternativeCategoryNames - A function that suggests alternative category names.
 * - SuggestCategoryNamesInput - The input type for the suggestAlternativeCategoryNames function.
 * - SuggestCategoryNamesOutput - The return type for the suggestAlternativeCategoryNames function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCategoryNamesInputSchema = z.object({
  categoryNames: z
    .array(z.string())
    .describe('An array of category names to improve.'),
});
export type SuggestCategoryNamesInput = z.infer<typeof SuggestCategoryNamesInputSchema>;

const SuggestCategoryNamesOutputSchema = z.object({
  suggestedNames: z
    .array(z.string())
    .describe('An array of suggested category names.'),
});
export type SuggestCategoryNamesOutput = z.infer<typeof SuggestCategoryNamesOutputSchema>;

export async function suggestAlternativeCategoryNames(
  input: SuggestCategoryNamesInput
): Promise<SuggestCategoryNamesOutput> {
  return suggestCategoryNamesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCategoryNamesPrompt',
  input: {schema: SuggestCategoryNamesInputSchema},
  output: {schema: SuggestCategoryNamesOutputSchema},
  prompt: `You are a creative marketing assistant helping to improve category names for a photo gallery.

  Given the following category names:
  {{#each categoryNames}}
  - "{{this}}"
  {{/each}}

  Suggest alternative names which are short and catchy:
  `,}
);

const suggestCategoryNamesFlow = ai.defineFlow(
  {
    name: 'suggestCategoryNamesFlow',
    inputSchema: SuggestCategoryNamesInputSchema,
    outputSchema: SuggestCategoryNamesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

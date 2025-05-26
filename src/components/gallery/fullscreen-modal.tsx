'use client';

import type { Photo } from '@/types';
import { PLACEHOLDER_IMAGE_DATA_URI } from '@/types';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { suggestPhotoCaptions, type SuggestPhotoCaptionsInput } from '@/ai/flows/suggest-photo-captions';
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  photo: Photo | null;
}

export function FullscreenModal({ isOpen, onClose, photo }: FullscreenModalProps) {
  const [suggestedCaptions, setSuggestedCaptions] = useState<string[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const { toast } = useToast();

  const handleSuggestCaptions = async () => {
    if (!photo) return;

    setIsLoadingSuggestions(true);
    setSuggestedCaptions([]);
    try {
      // NOTE: Using a placeholder data URI as actual image data conversion is complex for this scaffold.
      // In a real app, you'd convert photo.src (URL) to a data URI or use a backend to fetch and process.
      const input: SuggestPhotoCaptionsInput = {
        photoDataUri: PLACEHOLDER_IMAGE_DATA_URI, 
        category: photo.category,
      };
      const result = await suggestPhotoCaptions(input);
      setSuggestedCaptions(result.captions);
    } catch (error) {
      console.error('Error suggesting captions:', error);
      toast({
        title: 'Error',
        description: 'Could not suggest captions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  if (!photo) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">{photo.category}</DialogTitle>
          <DialogDescription>{photo.caption}</DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden p-6 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="relative w-full h-[300px] md:h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-contain"
                data-ai-hint={photo.aiHint}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button onClick={handleSuggestCaptions} disabled={isLoadingSuggestions} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoadingSuggestions ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Suggest Fun Captions
              </Button>
              {suggestedCaptions.length > 0 && (
                <ScrollArea className="h-[200px] md:flex-grow p-4 border rounded-md bg-muted/50">
                  <h4 className="font-semibold mb-2 text-sm">AI Suggested Captions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {suggestedCaptions.map((caption, index) => (
                      <li key={index}>{caption}</li>
                    ))}
                  </ul>
                </ScrollArea>
              )}
               {isLoadingSuggestions && !suggestedCaptions.length && (
                 <div className="flex items-center justify-center h-[200px] md:flex-grow p-4 border rounded-md bg-muted/50">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                 </div>
               )}
            </div>
          </div>
        </div>
        <DialogFooter className="p-6 pt-0">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

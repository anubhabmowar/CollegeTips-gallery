
'use client';

import type { Photo } from '@/types';
// import { PLACEHOLDER_IMAGE_DATA_URI } from '@/types'; // Removed
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area'; // Removed
// import { suggestPhotoCaptions, type SuggestPhotoCaptionsInput } from '@/ai/flows/suggest-photo-captions'; // Removed
// import React, { useState } from 'react'; // Removed useState as it's no longer used
// import { useToast } from '@/hooks/use-toast'; // Removed
// import { Loader2, Wand2 } from 'lucide-react'; // Removed

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  photo: Photo | null;
}

export function FullscreenModal({ isOpen, onClose, photo }: FullscreenModalProps) {
  // const [suggestedCaptions, setSuggestedCaptions] = useState<string[]>([]); // Removed
  // const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false); // Removed
  // const { toast } = useToast(); // Removed

  // const handleSuggestCaptions = async () => { // Removed
  //   if (!photo) return;

  //   setIsLoadingSuggestions(true);
  //   setSuggestedCaptions([]);
  //   try {
  //     const input: SuggestPhotoCaptionsInput = {
  //       photoDataUri: PLACEHOLDER_IMAGE_DATA_URI, 
  //       category: photo.category,
  //     };
  //     const result = await suggestPhotoCaptions(input);
  //     setSuggestedCaptions(result.captions);
  //   } catch (error) {
  //     console.error('Error suggesting captions:', error);
  //     toast({
  //       title: 'Error',
  //       description: 'Could not suggest captions. Please try again.',
  //       variant: 'destructive',
  //     });
  //   } finally {
  //     setIsLoadingSuggestions(false);
  //   }
  // };

  if (!photo) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] flex flex-col p-0"> {/* Adjusted max-width slightly as right panel is removed */}
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">{photo.category}</DialogTitle>
          <DialogDescription>{photo.caption}</DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden p-6 pt-2">
          {/* Removed grid layout, now single column for image */}
          <div className="relative w-full h-[calc(80vh-150px)] md:h-full rounded-lg overflow-hidden shadow-lg"> {/* Adjusted height calculation */}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              data-ai-hint={photo.aiHint}
            />
          </div>
          {/* Removed AI suggestions part */}
        </div>
        <DialogFooter className="p-6 pt-0">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

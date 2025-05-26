
'use client';

import type { Photo } from '@/types';

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';


interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  photo: Photo | null;
}

export function FullscreenModal({ isOpen, onClose, photo }: FullscreenModalProps) {
  

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

'use client';

import { INITIAL_PHOTOS } from '@/lib/constants';
import type { Photo } from '@/types';

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  photo?: Photo | null;
}

export function FullscreenModal({ isOpen, onClose, photo }: FullscreenModalProps) {
  const currentPhoto = INITIAL_PHOTOS.find((p) => p.id === photo?.id);

  if (!currentPhoto) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">{currentPhoto.category}</DialogTitle>
          <DialogDescription>{currentPhoto.caption}</DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden p-6 pt-2">
          <div className="relative w-full h-[calc(80vh-150px)] md:h-full rounded-lg overflow-hidden shadow-lg">
            {currentPhoto.src && (
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
        </div>
        <DialogFooter className="p-6 pt-0">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


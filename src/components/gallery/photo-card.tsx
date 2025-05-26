import type { Photo } from '@/types';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <Card
      className="overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105"
      onClick={onClick}
      aria-label={`View photo: ${photo.caption}`}
    >
      <CardContent className="p-0 relative aspect-video">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          data-ai-hint={photo.aiHint}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
            {photo.caption}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

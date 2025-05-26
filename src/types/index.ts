import type { LucideIcon } from 'lucide-react';

export type CategoryName = 'Team Vibes' | 'Creative Campaigns' | 'Work Hard, Play Hard' | 'Behind-The-Scenes';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: CategoryName;
  aiHint: string; // For placeholder image search keywords
}

export interface Category {
  name: CategoryName;
  icon: LucideIcon;
}



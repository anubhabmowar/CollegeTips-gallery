import type { Category, Photo, CategoryName } from '@/types';
import { Users, Paintbrush, PartyPopper, Film } from 'lucide-react';

export const CATEGORIES: Category[] = [
  { name: 'Team Vibes', icon: Users },
  { name: 'Creative Campaigns', icon: Paintbrush },
  { name: 'Work Hard, Play Hard', icon: PartyPopper },
  { name: 'Behind-The-Scenes', icon: Film },
];

export const INITIAL_PHOTOS: Photo[] = [
  // Team Vibes
  { id: 'tv1', src: 'https://placehold.co/600x400.png', alt: 'Team photo 1', caption: 'Team outing at the beach!', category: 'Team Vibes', aiHint: 'team collaboration' },
  { id: 'tv2', src: 'https://placehold.co/600x400.png', alt: 'Team photo 2', caption: 'Brainstorming session.', category: 'Team Vibes', aiHint: 'office meeting' },
  { id: 'tv3', src: 'https://placehold.co/600x400.png', alt: 'Team photo 3', caption: 'Celebrating a project milestone.', category: 'Team Vibes', aiHint: 'team success' },
  // Creative Campaigns
  { id: 'cc1', src: 'https://placehold.co/600x400.png', alt: 'Campaign 1', caption: 'Launch of our new campaign.', category: 'Creative Campaigns', aiHint: 'marketing campaign' },
  { id: 'cc2', src: 'https://placehold.co/600x400.png', alt: 'Campaign 2', caption: 'Behind the scenes of a shoot.', category: 'Creative Campaigns', aiHint: 'creative design' },
  { id: 'cc3', src: 'https://placehold.co/600x400.png', alt: 'Campaign 3', caption: 'User engagement event.', category: 'Creative Campaigns', aiHint: 'public event' },
  // Work Hard, Play Hard
  { id: 'whph1', src: 'https://placehold.co/600x400.png', alt: 'Party 1', caption: 'Annual company party.', category: 'Work Hard, Play Hard', aiHint: 'office party' },
  { id: 'whph2', src: 'https://placehold.co/600x400.png', alt: 'Party 2', caption: 'Team building games.', category: 'Work Hard, Play Hard', aiHint: 'team building' },
  { id: 'whph3', src: 'https://placehold.co/600x400.png', alt: 'Party 3', caption: 'Relaxing after a long week.', category: 'Work Hard, Play Hard', aiHint: 'leisure fun' },
  // Behind-The-Scenes
  { id: 'bts1', src: 'https://placehold.co/600x400.png', alt: 'BTS 1', caption: 'Setting up for a video shoot.', category: 'Behind-The-Scenes', aiHint: 'video production' },
  { id: 'bts2', src: 'https://placehold.co/600x400.png', alt: 'BTS 2', caption: 'Our creative workspace.', category: 'Behind-The-Scenes', aiHint: 'creative office' },
  { id: 'bts3', src: 'https://placehold.co/600x400.png', alt: 'BTS 3', caption: 'A day in the life at CollegeTips.', category: 'Behind-The-Scenes', aiHint: 'daily work' },
];

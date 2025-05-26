import type { Category, Photo } from '@/types';
import { Users, Paintbrush, PartyPopper, Film } from 'lucide-react';

import tv1 from '@/assets/team vibe 1.jpg';
import tv2 from '@/assets/team vibe 2.jpg';
import tv3 from '@/assets/team vibe 3.jpg';
import cc1 from '@/assets/creative campaign 1.jpg';
import cc2 from '@/assets/creative campaign 2.jpg';
import cc3 from '@/assets/creative campaign 3.jpg';
import whph1 from '@/assets/party 1.webp';
import whph2 from '@/assets/party 2.jpg';
import whph3 from '@/assets/party 3.webp';

import bts1 from '@/assets/BTS 1.webp';
import bts2 from '@/assets/BTS 2.webp';
import bts3 from '@/assets/BTS 3.webp';

export const CATEGORIES: Category[] = [
  { name: 'Team Vibes', icon: Users },
  { name: 'Creative Campaigns', icon: Paintbrush },
  { name: 'Work Hard, Play Hard', icon: PartyPopper },
  { name: 'Behind-The-Scenes', icon: Film },
];

export const INITIAL_PHOTOS: Photo[] = [
  // Team Vibes
  { id: 'tv1', src: tv1.src, alt: 'Team photo 1', caption: 'Group discussion on our latest project', category: 'Team Vibes' },
  { id: 'tv2', src: tv2.src, alt: 'Team photo 2', caption: 'Planning our next big campaign together', category: 'Team Vibes' },
  { id: 'tv3', src: tv3.src, alt: 'Team photo 3', caption: 'Sharing knowledge and experiences with the team', category: 'Team Vibes' },
  // Creative Campaigns
  { id: 'cc1', src: cc1.src, alt: 'Campaign 1', caption: 'Unleashing creativity at our latest event', category: 'Creative Campaigns' },
  { id: 'cc2', src: cc2.src, alt: 'Campaign 2', caption: 'Sharing knowledge at our latest campus outreach event', category: 'Creative Campaigns' },
  { id: 'cc3', src: cc3.src, alt: 'Campaign 3', caption: 'Sharing our journey and experiences with the team', category: 'Creative Campaigns' },
  // Work Hard, Play Hard
  { id: 'whph1', src: whph1.src, alt: 'Party 1', caption: 'Friday fun night with the team', category: 'Work Hard, Play Hard' },
  { id: 'whph2', src: whph2.src, alt: 'Party 2', caption: 'Football match during our break time', category: 'Work Hard, Play Hard' },
  { id: 'whph3', src: whph3.src, alt: 'Party 3', caption: 'Celebrating our team member\'s birthday with fun', category: 'Work Hard, Play Hard' },
  
  // Behind-The-Scenes
  { id: 'bts1', src: bts1.src, alt: 'BTS 1', caption: 'Behind the scenes of our latest video shoot', category: 'Behind-The-Scenes' },
  { id: 'bts2', src: bts2.src, alt: 'BTS 2', caption: 'Setting up for our recording session', category: 'Behind-The-Scenes' },
  { id: 'bts3', src: bts3.src, alt: 'BTS 3', caption: 'Planning shooting for our next video', category: 'Behind-The-Scenes' },
];


'use client';

import React, { useState, useMemo, useEffect } from 'react';
import type { Photo, CategoryName } from '@/types';
import { CATEGORIES, INITIAL_PHOTOS } from '@/lib/constants';
import { Header } from '@/components/layout/header';
import { FilterBar } from '@/components/gallery/filter-bar';
import { PhotoGrid } from '@/components/gallery/photo-grid';
import { FullscreenModal } from '@/components/gallery/fullscreen-modal';


export default function PhotoGalleryPage() {
  const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
  const [activeFilter, setActiveFilter] = useState<CategoryName | 'All'>('All');
  const [selectedPhotoForModal, setSelectedPhotoForModal] = useState<Photo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  

  useEffect(() => {
    // Simulate fetching photos
    setAllPhotos(INITIAL_PHOTOS);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === 'All') {
      return allPhotos;
    }
    return allPhotos.filter((photo) => photo.category === activeFilter);
  }, [allPhotos, activeFilter]);

  const handleFilterChange = (filter: CategoryName | 'All') => {
    setActiveFilter(filter);
  };

  const handlePhotoCardClick = (photo: Photo) => {
    setSelectedPhotoForModal(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhotoForModal(null);
  };

  
  

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-0 sm:px-4 py-4">
        <FilterBar
          categories={CATEGORIES}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          
        />
        <PhotoGrid photos={filteredPhotos} onPhotoClick={handlePhotoCardClick} />
      </main>
      <FullscreenModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        photo={selectedPhotoForModal}
      />
      
      <footer className="text-center p-4 text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} CollegeTips.in - All Rights Reserved.
      </footer>
    </div>
  );
}

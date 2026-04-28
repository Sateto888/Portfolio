import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { getNetlifyImageUrl } from '../constants';

interface Props {
  project: Project;
  onBack: () => void;
}

const ProjectGalleryView: React.FC<Props> = ({ project, onBack }) => {
  const images = project.photoImages ?? [];
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openImageViewer = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeImageViewer = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null || images.length === 0) return;
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'Escape') closeImageViewer();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex, images.length]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-8 md:px-16"
    >
      <div className="mb-12 sm:mb-16 md:mb-24">
        <div>
          <button
            onClick={onBack}
            className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-500 transition-colors mb-3 sm:mb-4 group"
          >
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Selected Work
          </button>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-extrabold tracking-tighter leading-none uppercase">
            {project.title}
          </h2>
        </div>
      </div>

      {images.length > 0 ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 sm:gap-6 md:gap-8 [column-fill:balance]">
          {images.map((src, imageIndex) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '100px' }}
              transition={{ delay: Math.min(imageIndex * 0.02, 0.5) }}
              className="relative group overflow-hidden bg-gray-100 break-inside-avoid mb-4 sm:mb-6 md:mb-8 cursor-pointer"
              onClick={() => openImageViewer(imageIndex)}
            >
              <img
                src={getNetlifyImageUrl(src, 1400, 80)}
                alt={`${project.title} - ${imageIndex + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-gray-50 border border-gray-200 rounded-sm">
          <p className="text-gray-500">No photos added yet for this project.</p>
        </div>
      )}

      <AnimatePresence>
        {selectedImageIndex !== null && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeImageViewer}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getNetlifyImageUrl(images[selectedImageIndex], 1920, 90)}
                alt={`${project.title} fullscreen ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              <button
                onClick={closeImageViewer}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectGalleryView;

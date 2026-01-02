import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_SESSIONS, getNetlifyImageUrl } from '../constants';

interface Props {
  onBack: () => void;
}

const GalleryView: React.FC<Props> = ({ onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  // Flatten all images into a single array for navigation
  const allImages = GALLERY_SESSIONS.flatMap(session => session.images);

  const openImageViewer = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeImageViewer = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : allImages.length - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex < allImages.length - 1 ? selectedImageIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : allImages.length - 1);
      }
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex(selectedImageIndex < allImages.length - 1 ? selectedImageIndex + 1 : 0);
      }
      if (e.key === 'Escape') closeImageViewer();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex, allImages.length]);

  // Calculate global index for each image
  let globalImageIndex = 0;

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-32 pb-24 px-8 md:px-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-500 transition-colors mb-4 group"
          >
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Portfolio
          </button>
          <h2 className="text-6xl md:text-9xl font-display font-extrabold tracking-tighter leading-none">
            PHOTO <br /> ARCHIVE
          </h2>
        </div>
        <div className="flex flex-col max-w-xl text-gray-600 mt-8 md:mt-0 md:self-center">
          <div className="text-[26px] leading-[1.1] tracking-[-0.01em]" style={{ marginLeft: '0' }}>
            A collection of photos from client work,
          </div>
          <div className="text-[26px] leading-[1.1] tracking-[-0.01em]" style={{ marginLeft: '1.5rem', marginTop: '0.3rem' }}>
            street photography and landscapes
          </div>
          <div className="text-[26px] leading-[1.1] tracking-[-0.01em]" style={{ marginLeft: '3rem', marginTop: '0.3rem' }}>
            detailing my photographic journey
          </div>
        </div>
      </div>

      <div className="space-y-24">
        {GALLERY_SESSIONS.map((session, sessionIndex) => {
          const sessionStartIndex = globalImageIndex;
          return (
            <div key={sessionIndex} className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter text-gray-900">
                {session.title}
              </h3>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:balance]">
                {session.images.map((src, imageIndex) => {
                  const currentGlobalIndex = sessionStartIndex + imageIndex;
                  globalImageIndex++;
                  return (
                    <motion.div 
                      key={imageIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '100px' }}
                      transition={{ delay: Math.min(currentGlobalIndex * 0.02, 0.5) }}
                      className="relative group overflow-hidden bg-gray-100 break-inside-avoid mb-8 cursor-pointer"
                      onClick={() => openImageViewer(currentGlobalIndex)}
                    >
                      <img 
                        src={getNetlifyImageUrl(src, 1200, 80)} 
                        alt={`${session.title} - Image ${imageIndex + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>
                  );
                })}
              </div>
              {/* Add a spacer to prevent white space gap at the end */}
              <div className="h-0" />
            </div>
          );
        })}
      </div>

      <div className="mt-32 text-center">
        <p className="text-4xl md:text-6xl font-display font-bold tracking-tighter italic">
          Ready to collaborate? <span className="text-cyan-500">Let's talk.</span>
        </p>
      </div>

      {/* Full-screen Image Viewer */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
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
                src={getNetlifyImageUrl(allImages[selectedImageIndex], 1920, 90)}
                alt={`Image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Close Button */}
              <button
                onClick={closeImageViewer}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                {selectedImageIndex + 1} / {allImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default GalleryView;
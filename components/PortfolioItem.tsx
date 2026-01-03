import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface Props {
  project: Project;
  onGalleryClick: () => void;
}

const PortfolioItem: React.FC<Props> = ({ project, onGalleryClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (project.isGalleryLink) {
      onGalleryClick();
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="border-t border-gray-200">
      <motion.div 
        onClick={handleClick}
        className="group relative py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer overflow-hidden min-h-[60px] md:min-h-0"
      >
        <div className="flex items-center gap-4 sm:gap-6 md:gap-16 z-10">
          <span className="font-display italic text-4xl sm:text-5xl md:text-8xl">
            {project.number.split('').map((digit, index) => (
              <span 
                key={index}
                className={digit === '0' ? 'text-gray-200' : 'text-cyan-500'}
              >
                {digit}
              </span>
            ))}
          </span>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-5xl font-display font-bold group-hover:translate-x-2 transition-transform duration-500 uppercase tracking-tighter">
              {project.isGalleryLink ? 'GALLERY' : project.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{project.category === 'Look Development' ? 'Visual Study' : project.category}</p>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 md:mt-0 flex items-center gap-3 sm:gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10 bg-white md:bg-transparent pr-2 sm:pr-4 py-2 md:py-0">
          <span className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest">{project.isGalleryLink ? 'View All' : (isOpen ? 'Close' : 'Explore')}</span>
          <motion.svg 
            animate={{ rotate: isOpen ? 90 : 0 }}
            width="32" height="32" viewBox="0 0 32 32" fill="none" className="fill-current text-cyan-500"
          >
            <path d="M12 8L22 16L12 24V8Z" />
          </motion.svg>
        </div>
      </motion.div>

      {/* Expanded Video Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="px-8 md:px-16 py-12 flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-2/3 aspect-video bg-black overflow-hidden rounded-sm shadow-2xl">
                <video 
                  src={project.videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/3">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 block mb-4">Project Insights</span>
                  <p className="text-lg md:text-xl font-display leading-relaxed text-gray-800">
                    {project.description}
                  </p>
                  <div className="mt-8 flex flex-col gap-2">
                    <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
                      <span className="text-gray-400">Production type</span>
                      <span className="font-bold">{project.title === 'Boxx Club' ? 'Boxx Club' : 'Visual Study'}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
                      <span className="text-gray-400">Service</span>
                      <span className="font-bold uppercase tracking-tighter">{project.category}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioItem;
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface Props {
  project: Project;
  onGalleryClick: () => void;
  isOpen: boolean;
  onToggle: (projectId: string) => void;
}

const PortfolioItem: React.FC<Props> = ({ project, onGalleryClick, isOpen, onToggle }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (project.isGalleryLink) {
      onGalleryClick();
    } else {
      onToggle(project.id);
    }
  };

  // Exit fullscreen helper function
  const exitFullscreen = async () => {
    try {
      if (
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      ) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
      }
    } catch (error) {
      console.log('Exit fullscreen failed:', error);
    }
  };

  // Reset video loading state when section opens/closes
  useEffect(() => {
    if (isOpen && project.videoUrl && videoRef.current) {
      setIsVideoLoading(true);
      setVideoError(false);
      setIsBuffering(false);
      // Load video when section opens with auto preload
      videoRef.current.load();
    } else if (!isOpen && videoRef.current) {
      setIsVideoLoading(false);
      setVideoError(false);
      setIsBuffering(false);
      // Pause video and reset to beginning when section closes
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      
      // Exit fullscreen if video was in fullscreen mode
      if (
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      ) {
        exitFullscreen().catch(() => {
          // Error already handled in exitFullscreen
        });
      }
    }
  }, [isOpen, project.videoUrl]);

  // Monitor buffering progress
  useEffect(() => {
    if (videoRef.current && isOpen) {
      const video = videoRef.current;
      
      const handleWaiting = () => {
        setIsBuffering(true);
      };

      const handlePlaying = () => {
        setIsBuffering(false);
      };

      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);

      return () => {
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('playing', handlePlaying);
      };
    }
  }, [isOpen]);

  // Ensure video loops properly
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      video.addEventListener('ended', handleEnded);
      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [isOpen]);

  // Toggle fullscreen function
  const toggleFullscreen = async () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    
    try {
      // Check if already in fullscreen
      if (
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      ) {
        // Exit fullscreen
        await exitFullscreen();
      } else {
        // Enter fullscreen
        if (video.requestFullscreen) {
          await video.requestFullscreen();
        } else if ((video as any).webkitRequestFullscreen) {
          await (video as any).webkitRequestFullscreen();
        } else if ((video as any).mozRequestFullScreen) {
          await (video as any).mozRequestFullScreen();
        } else if ((video as any).msRequestFullscreen) {
          await (video as any).msRequestFullscreen();
        }
      }
    } catch (error) {
      // Fullscreen API might fail (e.g., user denies permission)
      console.log('Fullscreen operation failed:', error);
    }
  };

  // Keyboard shortcuts for fullscreen and download prevention
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keys when video section is open and video exists
      if (!isOpen || !project.videoUrl) return;

      // Handle F key for fullscreen toggle
      if (e.key === 'f' || e.key === 'F') {
        // Don't trigger if user is typing in an input field
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
          return;
        }
        e.preventDefault();
        toggleFullscreen().catch(() => {
          // Error already handled in toggleFullscreen
        });
        return;
      }

      // Handle Esc key to exit fullscreen
      if (e.key === 'Escape') {
        // Check if we're in fullscreen mode before preventing default
        if (
          document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).mozFullScreenElement ||
          (document as any).msFullscreenElement
        ) {
          e.preventDefault();
          exitFullscreen().catch(() => {
            // Error already handled in exitFullscreen
          });
          return;
        }
      }

      // Prevent Ctrl+S, Ctrl+Shift+S, Ctrl+U
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
    };

    if (isOpen && project.videoUrl) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, project.videoUrl]);

  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
  };

  const handleVideoCanPlay = () => {
    setIsVideoLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might fail, that's okay
      });
    }
  };

  const handleVideoError = () => {
    setIsVideoLoading(false);
    setVideoError(true);
  };

  // Prevent right-click context menu on video
  const handleContextMenu = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.preventDefault();
    return false;
  };

  // Prevent drag and drop
  const handleDragStart = (e: React.DragEvent<HTMLVideoElement>) => {
    e.preventDefault();
    return false;
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
              <div className="w-full lg:w-2/3 aspect-video bg-black overflow-hidden rounded-sm shadow-2xl relative">
                <style>{`
                  video::-webkit-media-controls-timeline {
                    display: none !important;
                  }
                  video::-webkit-media-controls-current-time-display {
                    display: none !important;
                  }
                  video::-webkit-media-controls-time-remaining-display {
                    display: none !important;
                  }
                  video::-webkit-media-controls-download-button {
                    display: none !important;
                  }
                `}</style>
                {project.videoUrl ? (
                  <>
                    {/* Loading indicator */}
                    {isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-20">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                          <p className="text-gray-400 text-sm">Loading video...</p>
                        </div>
                      </div>
                    )}

                    {/* Buffering indicator */}
                    {isBuffering && !isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                          <p className="text-gray-300 text-xs">Buffering...</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Error state */}
                    {videoError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <div className="text-center text-gray-400">
                          <p className="text-sm mb-2">Video unavailable</p>
                          <p className="text-xs">Please check the file path</p>
                        </div>
                      </div>
                    )}

                    {/* Video element */}
                    <video 
                      ref={videoRef}
                      src={project.videoUrl} 
                      autoPlay 
                      loop 
                      playsInline
                      controls
                      controlsList="nodownload noremoteplayback"
                      preload="auto"
                      onLoadedData={handleVideoLoaded}
                      onCanPlay={handleVideoCanPlay}
                      onCanPlayThrough={() => {
                        setIsVideoLoading(false);
                        setIsBuffering(false);
                      }}
                      onError={handleVideoError}
                      onContextMenu={handleContextMenu}
                      onDragStart={handleDragStart}
                      draggable={false}
                      className={`w-full h-full object-cover ${isVideoLoading || videoError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <p className="text-gray-400 text-sm">No video available</p>
                  </div>
                )}
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
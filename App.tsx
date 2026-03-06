import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioItem from './components/PortfolioItem';
import Services from './components/Services';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import GalleryView from './components/GalleryView';
import Impressum from './components/Impressum';
import { PROJECTS } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();
  const [view, setView] = useState<'main' | 'gallery' | 'impressum'>('main');
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const handleProjectToggle = useCallback((projectId: string) => {
    setOpenProjectId(prevId => prevId === projectId ? null : projectId);
  }, []);

  const navigateTo = useCallback((sectionId: string) => {
    if (view !== 'main') {
      setView('main');
      // Small delay to allow the main view to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [view]);

  const openGallery = () => {
    setView('gallery');
    window.scrollTo(0, 0);
  };

  const openImpressum = () => {
    setView('impressum');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC]">
      <Header onNavigate={navigateTo} />
      
      <AnimatePresence mode="wait">
        {view === 'main' ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <main>
              <div id="home">
                <Hero />
              </div>
              
              <section className="px-6 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32">
                <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-[16px] font-bold uppercase tracking-widest text-gray-400">{t.colorGradingSection.label}</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
                  {/* Video — left */}
                  <motion.div
                    className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    <video
                      src="/videos/Wipe Animation 2.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Text — right */}
                  <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight leading-tight mb-6">
                      {t.colorGradingSection.heading}<br />
                      <span className="text-cyan-500 italic">{t.colorGradingSection.headingAccent}</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg">
                      {t.colorGradingSection.body}
                    </p>
                  </motion.div>
                </div>
              </section>

              <section id="portfolio" className="px-6 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32">
                <div className="flex justify-between items-center mb-8 sm:mb-12 md:mb-16">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-[16px] font-bold uppercase tracking-widest text-gray-400">{t.app.selectedWork}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-gray-300 tracking-widest uppercase">2025</span>
                </div>

                <div className="mt-12 space-y-0">
                  {PROJECTS.map((project) => (
                    <PortfolioItem 
                      key={project.id} 
                      project={project} 
                      onGalleryClick={openGallery}
                      isOpen={openProjectId === project.id}
                      onToggle={handleProjectToggle}
                    />
                  ))}
                </div>
              </section>

              <section className="px-6 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32 bg-gray-50 border-y border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-2xl md:text-4xl font-display font-medium leading-tight mb-8 sm:mb-10 md:mb-12 tracking-tight"
                  >
                    "{t.app.quote} <br /><span className="text-cyan-500 italic">{t.app.quoteItalic}</span>."
                  </motion.h3>
                </div>
              </section>

              <Services />
              <Marquee />
            </main>
          </motion.div>
        ) : view === 'gallery' ? (
          <GalleryView key="gallery" onBack={() => navigateTo('portfolio')} />
        ) : (
          <Impressum key="impressum" onBack={() => navigateTo('home')} />
        )}
      </AnimatePresence>

      <Footer onNavigate={navigateTo} onOpenImpressum={openImpressum} />
    </div>
  );
};

export default App;
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

interface Props {
  onNavigate: (id: string) => void;
}

const Header: React.FC<Props> = ({ onNavigate }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.portfolio, id: 'portfolio' },
    { name: t.nav.services, id: 'services' },
    { name: t.nav.contact, id: 'contact' }
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ko', name: '한국어' }
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none bg-white/80 backdrop-blur-sm">
        <div className="pointer-events-auto">
          <button 
            onClick={() => handleNavigate('home')}
            className="text-gray-900 font-display font-extrabold text-xl tracking-tighter hover:text-cyan-500 transition-colors"
          >
            HNS EDITING
          </button>
        </div>
        
        <div className="hidden md:flex gap-8 items-center pointer-events-auto">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleNavigate(item.id)}
              className="text-gray-900 text-sm font-bold uppercase tracking-widest hover:text-cyan-500 transition-colors"
            >
              {item.name}
            </button>
          ))}
          
          {/* Language Switcher */}
          <div className="relative ml-4" ref={languageMenuRef}>
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center gap-2 text-gray-900 text-sm font-bold uppercase tracking-widest hover:text-cyan-500 transition-colors"
              aria-label="Select language"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`w-3 h-3 transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-sm shadow-lg z-50 min-w-[150px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`block w-full text-left px-4 py-3 text-sm uppercase tracking-widest hover:text-cyan-500 hover:bg-gray-50 transition-colors duration-300 first:rounded-t-sm last:rounded-b-sm ${
                      language === lang.code ? 'text-cyan-500 bg-cyan-50' : 'text-gray-900'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden pointer-events-auto text-gray-900 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <motion.svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 8h16M4 16h16" />
              </>
            )}
          </motion.svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigate(item.id)}
                    className="text-left text-2xl font-display font-bold uppercase tracking-widest text-gray-900 py-4 hover:text-cyan-500 transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Language Switcher in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="mt-8 pt-8 border-t border-gray-200"
                >
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{t.nav.language}</p>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`block w-full text-left text-lg font-display font-bold uppercase tracking-widest py-2 hover:text-cyan-500 transition-colors ${
                          language === lang.code ? 'text-cyan-500' : 'text-gray-900'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
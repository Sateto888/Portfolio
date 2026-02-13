import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

interface Props {
  onNavigate: (id: string) => void;
  onOpenImpressum: () => void;
}

const Footer: React.FC<Props> = ({ onNavigate, onOpenImpressum }) => {
  const { t, language, setLanguage } = useLanguage();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

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
  };

  return (
    <footer className="bg-[#161719] text-white px-8 md:px-16 pt-24 pb-12" id="contact">
      {/* Language Switcher */}
      <div className="mb-12 flex justify-end">
        <div className="relative" ref={languageMenuRef}>
          <button
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className="flex items-center gap-2 text-sm sm:text-base uppercase tracking-widest text-gray-400 hover:text-cyan-500 transition-colors duration-300 py-2"
            aria-label="Select language"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>{t.footer.language}</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`w-4 h-4 transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 bg-[#1a1c1e] border border-white/10 rounded-sm shadow-lg z-50 min-w-[150px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`block w-full text-left px-4 py-3 text-sm uppercase tracking-widest hover:text-cyan-500 hover:bg-white/5 transition-colors duration-300 first:rounded-t-sm last:rounded-b-sm ${
                    language === lang.code ? 'text-cyan-500 bg-white/10' : 'text-gray-400'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold mb-8 md:mb-12 tracking-tighter">
            {t.footer.haveAnIdea} <br />
            <span className="text-cyan-500 italic">{t.footer.letsBringItToLife}</span>
          </h2>
          <a href="mailto:henrik.stenger@outlook.de" className="text-lg sm:text-xl md:text-4xl border-b-2 border-white/20 pb-2 hover:border-cyan-500 transition-colors duration-500 break-all md:break-normal">
            henrik.stenger@outlook.de
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-24 gap-y-12 uppercase tracking-widest text-sm font-bold">
          <div className="space-y-4">
            <p className="text-gray-500 text-left">{t.footer.navigation}</p>
            <div className="pl-1 space-y-2 md:space-y-4">
              <button onClick={() => onNavigate('home')} className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">{t.nav.home}</button>
              <button onClick={() => onNavigate('portfolio')} className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">{t.nav.portfolio}</button>
              <button onClick={() => onNavigate('services')} className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">{t.nav.services}</button>
              <button onClick={() => onNavigate('contact')} className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">{t.nav.contact}</button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-500 text-left">Socials</p>
            <div className="pl-1 space-y-2 md:space-y-4">
              <a href="#" className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">Instagram</a>
              <a href="#" className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">Behance</a>
              <a href="#" className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">Vimeo</a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-500 text-left">{t.footer.location}</p>
            <div className="pl-1 space-y-4">
              <p className="text-left uppercase">{t.footer.germany}</p>
              <p className="text-cyan-500 font-normal text-left">{time}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
        <p>&copy; 2025 HNS Editing. {t.footer.allRightsReserved}</p>
        <button 
          onClick={onOpenImpressum}
          className="hover:text-cyan-500 transition-colors py-2 md:py-0"
        >
          Impressum
        </button>
      </div>
    </footer>
  );
};

export default Footer;
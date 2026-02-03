
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Marquee: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full overflow-hidden bg-zinc-950 py-12">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-[10vh] font-display font-extrabold text-white/10 uppercase mr-12">
          {t.marquee}
        </span>
        <span className="text-[10vh] font-display font-extrabold text-white/10 uppercase mr-12">
          {t.marquee}
        </span>
      </div>
    </div>
  );
};

export default Marquee;

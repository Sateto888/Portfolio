import React, { useEffect, useState } from 'react';

interface Props {
  onNavigate: (id: string) => void;
  onOpenImpressum: () => void;
}

const Footer: React.FC<Props> = ({ onNavigate, onOpenImpressum }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#161719] text-white px-8 md:px-16 pt-24 pb-12" id="contact">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold mb-8 md:mb-12 tracking-tighter">
            HAVE AN IDEA? <br />
            <span className="text-cyan-500 italic">LET'S BRING IT TO LIFE.</span>
          </h2>
          <a href="mailto:hnseditorial@icloud.com" className="text-lg sm:text-xl md:text-4xl border-b-2 border-white/20 pb-2 hover:border-cyan-500 transition-colors duration-500 break-all md:break-normal">
            hnseditorial@icloud.com
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-24 gap-y-12 uppercase tracking-widest text-sm font-bold">
          <div className="space-y-4">
            <p className="text-gray-500 text-left">Navigation</p>
            <div className="pl-1 space-y-2 md:space-y-4">
              <button onClick={() => onNavigate('home')} className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">Home</button>
              <button onClick={() => onNavigate('portfolio')} className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">Portfolio</button>
              <button onClick={() => onNavigate('services')} className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">Services</button>
              <button onClick={() => onNavigate('contact')} className="block hover:text-cyan-500 transition-colors text-left uppercase py-2 md:py-0">Contact</button>
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
            <p className="text-gray-500 text-left">Location</p>
            <div className="pl-1 space-y-4">
              <p className="text-left uppercase">Germany</p>
              <p className="text-cyan-500 font-normal text-left">{time}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
        <p>&copy; 2025 HNS Editorial. All Rights Reserved.</p>
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
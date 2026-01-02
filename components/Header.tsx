import React from 'react';

interface Props {
  onNavigate: (id: string) => void;
}

const Header: React.FC<Props> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <button 
          onClick={() => onNavigate('home')}
          className="text-gray-900 font-display font-extrabold text-xl tracking-tighter hover:text-cyan-500 transition-colors"
        >
          HNS EDITORIAL
        </button>
      </div>
      
      <div className="hidden md:flex gap-8 pointer-events-auto">
        {[
          { name: 'Home', id: 'home' },
          { name: 'Portfolio', id: 'portfolio' },
          { name: 'Services', id: 'services' },
          { name: 'Contact', id: 'contact' }
        ].map((item) => (
          <button 
            key={item.id} 
            onClick={() => onNavigate(item.id)}
            className="text-gray-900 text-sm font-bold uppercase tracking-widest hover:text-cyan-500 transition-colors"
          >
            {item.name}
          </button>
        ))}
      </div>

      <button className="md:hidden pointer-events-auto text-gray-900">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 8h16M4 16h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Header;
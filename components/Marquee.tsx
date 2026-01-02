
import React from 'react';

const Marquee: React.FC = () => {
  const text = "HNS EDITORIAL • PHOTOGRAPHY • COLOR GRADING • NARRATIVE • VISUAL STORYTELLING • DAVINCI RESOLVE • ";
  
  return (
    <div className="w-full overflow-hidden bg-zinc-950 py-12">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-[10vh] font-display font-extrabold text-white/10 uppercase mr-12">
          {text}
        </span>
        <span className="text-[10vh] font-display font-extrabold text-white/10 uppercase mr-12">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Marquee;

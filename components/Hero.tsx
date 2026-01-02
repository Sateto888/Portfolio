import React from 'react';
import { motion } from 'framer-motion';
import { getNetlifyImageUrl } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden" id="home">
      {/* Left Section: Image (Photo) */}
      <div className="w-full md:w-1/2 h-2/3 md:h-full relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={getNetlifyImageUrl("https://picsum.photos/id/64/1200/1800", 1200, 80)} 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
          alt="Featured work"
        />
        <div className="absolute bottom-12 left-8 md:left-16 text-white z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06B6D4]" />
            <span className="text-sm font-bold uppercase tracking-widest">Available for projects</span>
          </motion.div>
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="w-full md:w-1/2 h-1/3 md:h-full bg-white p-8 md:p-16 flex flex-col justify-center relative">
        <div className="relative z-30">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-display font-extrabold leading-[0.9] tracking-tighter"
          >
            EDITORIAL <br />
            & COLOR
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 text-gray-500 text-lg md:text-xl max-w-md leading-relaxed"
          >
            Crafting premium visual narratives through the lens of photography, 
            sophisticated video editing, and expert DaVinci Resolve color grading.
          </motion.p>
        </div>

        {/* Large background branding text - Positioned vertically centered in remaining space */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 md:h-1/3 flex items-center px-8 md:px-16 pointer-events-none">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 0.06 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            className="text-[clamp(1.5rem,4.2vw,5vw)] font-display font-extrabold text-black uppercase whitespace-nowrap leading-none tracking-tighter"
          >
            HNS EDITORIAL
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="px-6 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32 bg-white" id="services">
      <div className="flex flex-col md:flex-row justify-between mb-12 sm:mb-16 md:mb-24">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0" />
          <h2 className="text-sm sm:text-base md:text-[16px] font-bold uppercase tracking-[0.3em] text-gray-400">Services</h2>
        </div>
        <p className="max-w-xl text-xl md:text-3xl font-display font-medium leading-tight mt-8 md:mt-0 text-gray-500">
          Transforming vision into reality through technical precision and creative mastery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 sm:gap-y-16 md:gap-y-24">
        {SERVICES.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group"
          >
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
               <div className="w-8 sm:w-10 h-1 bg-gray-900 group-hover:bg-cyan-500 transition-colors duration-500 mt-3 sm:mt-4" />
               <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">{service.title}</h3>
            </div>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {service.description}
            </p>
            {service.tools && (
              <div className="flex flex-wrap gap-2">
                {service.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-wider rounded-full text-gray-500 group-hover:bg-cyan-50 group-hover:text-cyan-500 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
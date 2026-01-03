import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onBack: () => void;
}

const Impressum: React.FC<Props> = ({ onBack }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-32 pb-24 px-8 md:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-500 transition-colors mb-12 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
        </button>

        <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-12">
          IMPRESSUM
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-lg leading-relaxed">
              HNS Editorial<br />
              [Your Name]<br />
              [Your Address]<br />
              [City, Postal Code]<br />
              Germany
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Kontakt</h2>
            <p className="text-lg leading-relaxed">
              E-Mail: <a href="mailto:hnseditorial@icloud.com" className="text-cyan-500 hover:underline">hnseditorial@icloud.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-lg leading-relaxed">
              [Your Name]<br />
              [Your Address]<br />
              [City, Postal Code]<br />
              Germany
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Haftungsausschluss</h2>
            
            <h3 className="text-xl font-display font-bold mt-6 mb-3">Haftung für Inhalte</h3>
            <p className="text-lg leading-relaxed mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="text-xl font-display font-bold mt-6 mb-3">Haftung für Links</h3>
            <p className="text-lg leading-relaxed mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-display font-bold mt-6 mb-3">Urheberrecht</h3>
            <p className="text-lg leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Impressum;


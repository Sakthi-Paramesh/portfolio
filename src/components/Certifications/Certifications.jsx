import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS } from '../../utils/data';

// ===== Certificate Image Modal =====
function CertModal({ cert, onClose }) {
  if (!cert || !cert.image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-10 bg-black/80 backdrop-blur-sm"
    >
      <div 
        className="relative max-w-4xl w-full flex flex-col items-center bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="w-full flex justify-between items-start mb-6">
          <div>
            <h3 className="font-semibold text-white text-xl">{cert.title}</h3>
            <p className="text-sm text-blue-400 mt-1">{cert.issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Image */}
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full max-h-[70vh] object-contain rounded-lg"
        />
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section py-20 pb-0">
      <AnimatePresence>
        {selectedCert && (
          <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Certifications &amp; Awards
          </h2>
          <p className="text-white/60" style={{ fontFamily: "'Poppins', sans-serif" }}>Recognition for skills and achievements</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => {
            const hasImage = !!cert.image;

            return (
              <div
                key={cert.id}
                onClick={() => { if (hasImage) setSelectedCert(cert); }}
                className={`p-4 rounded-lg flex flex-col gap-3 border border-white/10 bg-white/[0.02] ${hasImage ? 'cursor-pointer hover:bg-white/[0.04]' : ''} transition-all duration-300`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl text-blue-400">
                    {cert.icon}
                  </div>

                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10">
                    {cert.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-1">
                  <h3 className="font-semibold text-white text-base leading-snug mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{cert.title}</h3>
                  <p className="text-xs text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Footer: Year and Button */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">{cert.year}</span>
                  {hasImage && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                    >
                      View Certificate <i className="bi bi-box-arrow-up-right text-[10px]"></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

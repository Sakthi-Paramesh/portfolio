import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiEye } from 'react-icons/fi';
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
      className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-10"
      style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(12px)' }}
    >
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        {/* Top bar */}
        <div className="w-full flex justify-between items-center mb-4 px-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{cert.icon}</span>
            <div>
              <h3 className="font-bold text-white text-lg leading-tight">{cert.title}</h3>
              <p className="text-sm font-mono" style={{ color: cert.color }}>{cert.issuer}</p>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-2.5 rounded-full text-white/70 hover:text-white transition-all hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Image */}
        <motion.img
          src={cert.image}
          alt={cert.title}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
          style={{ boxShadow: `0 0 60px ${cert.color}20`, border: '1px solid rgba(255,255,255,0.05)' }}
        />
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section">
      <AnimatePresence>
        {selectedCert && (
          <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>

      <div className="aurora-blob"
        style={{ width: 300, height: 300, background: '#00CFFF', top: '20%', left: '-5%', opacity: 0.06 }} />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">— Achievements —</p>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subtitle">Recognition for skills and achievements</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const hasImage = !!cert.image;

            return (
              <motion.div
                key={cert.id}
                onClick={() => { if (hasImage) setSelectedCert(cert); }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={hasImage ? { y: -8, scale: 1.02, transition: { duration: 0.2 } } : { y: -5, transition: { duration: 0.3 } }}
                className={`cert-card glass rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group ${hasImage ? 'cursor-pointer' : 'cursor-default'} ${i === CERTIFICATIONS.length - 1 && CERTIFICATIONS.length % 3 === 1 ? 'lg:col-start-2' : ''}`}
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* View Overlay if clickable */}
                {hasImage && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(0,0,0,0.65)' }}>
                    <div className="p-3 rounded-full mb-2" style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}>
                      <FiEye size={24} color={cert.color} />
                    </div>
                    <span className="font-mono text-xs text-white tracking-widest uppercase">Click to view</span>
                  </div>
                )}

                {/* Top row */}
                <div className="flex items-start justify-between relative z-0">
                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`,
                      boxShadow: `0 0 20px ${cert.color}20`,
                    }}
                  >
                    {cert.icon}
                  </div>

                  {/* Badge */}
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-right"
                    style={{
                      background: `${cert.color}20`,
                      color: cert.color,
                      border: `1px solid ${cert.color}40`,
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-0">
                  <h3 className="font-bold text-white text-sm mb-1">{cert.title}</h3>
                  <p className="text-xs font-semibold mb-2" style={{ color: cert.color }}>
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-white/45 leading-relaxed">{cert.description}</p>
                </div>

                {/* Year */}
                <div className="flex items-center justify-between pt-2 mt-auto border-t border-white/5 relative z-0">
                  <span className="font-mono text-xs text-white/30">{cert.year}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: s === 1 ? cert.color : `${cert.color}40`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

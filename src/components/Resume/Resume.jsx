import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiEye, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const PAGES = [
  '/resume-page1.png',
  '/resume-page3.png',
  '/resume-page2.png',
];

// ===== Load image helper =====
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// ===== Download: stack all 3 pages vertically on canvas → PNG =====
async function handleDownload(setDownloading) {
  setDownloading(true);
  try {
    const images = await Promise.all(PAGES.map(loadImg));

    // Use the widest image width
    const W = Math.max(...images.map((img) => img.naturalWidth));
    const totalH = images.reduce((sum, img) => sum + img.naturalHeight, 0);

    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = totalH;
    const ctx = canvas.getContext('2d');

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, totalH);

    // Draw each page stacked vertically
    let y = 0;
    images.forEach((img) => {
      // Center horizontally if narrower
      const x = Math.floor((W - img.naturalWidth) / 2);
      ctx.drawImage(img, x, y);
      y += img.naturalHeight;
    });

    // Trigger download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Sakthi_Paramesh_B_Resume.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
  } catch (err) {
    console.error('Download failed:', err);
    // Fallback: download each page separately
    PAGES.forEach((src, i) => {
      const a = document.createElement('a');
      a.href = src;
      a.download = `Resume_Page_${i + 1}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  } finally {
    setDownloading(false);
  }
}

// ===== Full-screen Modal Viewer =====
function ResumeModal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + PAGES.length) % PAGES.length);
  const next = () => setCurrent((c) => (c + 1) % PAGES.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99990] flex flex-col items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(16px)' }}
    >
      {/* Top bar */}
      <div className="w-full flex items-center justify-between px-6 py-3 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-sm">Sakthi Paramesh B — Resume</span>
          <span className="font-mono text-xs px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(0,207,255,0.12)', color: '#00CFFF', border: '1px solid rgba(0,207,255,0.25)' }}>
            Page {current + 1} / {PAGES.length}
          </span>
        </div>
        <button onClick={onClose}
          className="p-2 rounded-full text-white/60 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <FiX size={18} />
        </button>
      </div>

      {/* Image area */}
      <div className="flex-1 flex items-center justify-center w-full relative px-16 py-4 overflow-hidden">
        {/* Prev */}
        <button onClick={prev}
          className="absolute left-4 p-3 rounded-full z-10 text-white/70 hover:text-white transition-all hover:scale-110"
          style={{ background: 'rgba(0,207,255,0.1)', border: '1px solid rgba(0,207,255,0.25)' }}>
          <FiChevronLeft size={22} />
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={PAGES[current]}
            alt={`Resume Page ${current + 1}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl shadow-2xl"
            style={{
              maxHeight: 'calc(100vh - 140px)',
              maxWidth: '100%',
              objectFit: 'contain',
              boxShadow: '0 0 60px rgba(0,207,255,0.1)',
            }}
          />
        </AnimatePresence>

        {/* Next */}
        <button onClick={next}
          className="absolute right-4 p-3 rounded-full z-10 text-white/70 hover:text-white transition-all hover:scale-110"
          style={{ background: 'rgba(0,207,255,0.1)', border: '1px solid rgba(0,207,255,0.25)' }}>
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-3 pb-4 flex-shrink-0">
        {PAGES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? '#00CFFF' : 'rgba(255,255,255,0.2)',
            }} />
        ))}
      </div>
    </motion.div>
  );
}

// ===== Main Resume Section =====
export default function Resume() {
  const [modalOpen, setModalOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  return (
    <section id="resume" className="section">
      <AnimatePresence>
        {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">— My Resume —</p>
          <h2 className="section-title">
            View My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">Preview all 3 pages or download instantly</p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{ border: '1px solid rgba(0,207,255,0.15)' }}>

            <div className="absolute inset-0 pointer-events-none opacity-5"
              style={{ background: 'radial-gradient(circle at 30% 50%, #00CFFF, transparent 50%), radial-gradient(circle at 70% 50%, #7C3AED, transparent 50%)' }} />

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">

              {/* Fanned 3-page preview thumbnails */}
              <div className="flex items-end justify-center gap-0 flex-shrink-0"
                style={{ minWidth: 220, height: 170, position: 'relative' }}>
                {PAGES.map((src, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setModalOpen(true)}
                    whileHover={{ y: -10, scale: 1.06, zIndex: 10 }}
                    transition={{ duration: 0.22 }}
                    className="absolute rounded-xl overflow-hidden cert-card"
                    style={{
                      width: 110,
                      height: 155,
                      cursor: 'pointer',
                      border: '1px solid rgba(0,207,255,0.3)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                      // Fan arrangement
                      left: i === 0 ? 0 : i === 1 ? 52 : 104,
                      bottom: 0,
                      zIndex: i === 1 ? 3 : i === 0 ? 2 : 1,
                      transform: i === 0 ? 'rotate(-8deg)' : i === 2 ? 'rotate(8deg)' : 'rotate(0deg)',
                      transformOrigin: 'bottom center',
                    }}
                  >
                    <img
                      src={src}
                      alt={`Resume page ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(0,0,0,0.55)' }}>
                      <FiEye className="text-primary" size={20} />
                    </div>
                    {/* Page number */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold"
                      style={{ background: 'linear-gradient(135deg,#00CFFF,#7C3AED)', color: '#fff', fontSize: 10 }}>
                      {i + 1}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Info + Buttons */}
              <div className="flex flex-col gap-5 flex-1 text-center lg:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Sakthi Paramesh B</h3>
                  <p className="text-primary font-mono text-sm mb-4">AI & Full Stack Developer</p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-3">
                    {['Java', 'Spring Boot', 'React', 'AI/ML', 'Python'].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono text-white/50"
                        style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    3-page resume covering education, projects, certifications, 
                    and co-curricular activities.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn-outline flex items-center justify-center gap-2 flex-1"
                  >
                    <FiEye size={17} /> View Resume
                  </button>

                  <motion.button
                    onClick={() => handleDownload(setDownloading)}
                    disabled={downloading}
                    className="btn-primary flex items-center justify-center gap-2 flex-1"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {downloading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Downloading…
                      </>
                    ) : (
                      <>
                        <FiDownload size={17} /> Download Resume
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

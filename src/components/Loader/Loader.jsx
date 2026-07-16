import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        const increment = p < 70 ? Math.random() * 8 + 4 : Math.random() * 3 + 1;
        return Math.min(p + increment, 100);
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background aurora */}
          <div className="aurora-blob w-96 h-96 bg-primary top-1/4 left-1/4"
            style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2, background: '#00CFFF' }} />
          <div className="aurora-blob w-96 h-96 bg-secondary bottom-1/4 right-1/4"
            style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2, background: '#7C3AED' }} />

          {/* Logo SVG */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            className="relative"
          >
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00CFFF" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              {/* Outer ring */}
              <motion.circle
                cx="50" cy="50" r="46"
                stroke="url(#logoGrad)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
              {/* SP letters */}
              <text x="50" y="58" textAnchor="middle"
                fill="url(#logoGrad)"
                fontSize="32"
                fontFamily="Inter"
                fontWeight="800"
                letterSpacing="-2">
                SP
              </text>
            </svg>
            {/* Glow ring */}
            <div style={{
              position: 'absolute', inset: '-10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,207,255,0.2), transparent 70%)',
              animation: 'glowPulse 2s ease-in-out infinite'
            }} />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-xl font-bold tracking-widest text-white mb-1">
              SAKTHI PARAMESH
            </h1>
            <p className="text-sm tracking-[0.3em] text-primary/70">
              AI & FULL STACK DEVELOPER
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-64 flex flex-col items-center gap-3"
          >
            <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #00CFFF, #7C3AED)',
                  boxShadow: '0 0 10px rgba(0,207,255,0.6)',
                  transition: 'width 0.1s ease',
                }}
              />
            </div>
            <span className="font-mono text-sm text-white/50">
              {Math.round(progress)}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

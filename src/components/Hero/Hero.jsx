import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowDown, FiEye } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { PERSONAL, TYPING_ROLES } from '../../utils/data';

// ===== Particle Canvas =====
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.1,
      color: Math.random() > 0.5 ? '#00CFFF' : '#7C3AED',
    }));

    let mouseX = W / 2, mouseY = H / 2;

    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,207,255,${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles & mouse interaction
      particles.forEach((p) => {
        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 100) {
          p.x -= (mdx / mDist) * 0.8;
          p.y -= (mdy / mDist) * 0.8;
        }

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2);
        grd.addColorStop(0, p.color + '40');
        grd.addColorStop(1, 'transparent');
        ctx.fillStyle = grd;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
    />
  );
}

// ===== Build typing sequence =====
const typeSequence = TYPING_ROLES.flatMap((r) => [r, 1800]).flat();

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Aurora blobs */}
      <div className="aurora-blob"
        style={{ width: 600, height: 600, background: '#00CFFF', top: '10%', left: '-10%', animation: 'aurora 10s ease-in-out infinite' }} />
      <div className="aurora-blob"
        style={{ width: 500, height: 500, background: '#7C3AED', bottom: '5%', right: '-10%', animation: 'aurora 12s ease-in-out 3s infinite' }} />
      <div className="aurora-blob"
        style={{ width: 300, height: 300, background: '#00CFFF', top: '60%', left: '40%', animation: 'aurora 8s ease-in-out 1.5s infinite', opacity: 0.08 }} />

      {/* Main content */}
      <div className="container relative z-10 py-20 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
                Hello, I&apos;m
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-extrabold leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="text-white">Sakthi </span>
              <span className="shimmer-text">Paramesh B</span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white/50 font-mono text-lg">&gt;</span>
              <span
                className="gradient-text font-semibold"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
              >
                <TypeAnimation
                  sequence={typeSequence}
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-white/60 leading-relaxed max-w-lg"
              style={{ fontSize: '1.05rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Passionate CSE student crafting intelligent, scalable web applications. 
              Specializing in AI integration, full-stack development, and building 
              experiences that leave an impression.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline">
                <FiEye size={18} /> View Resume
              </a>
              <a href={PERSONAL.resumeUrl} download="Sakthi_Paramesh_B_Resume.pdf" className="btn-primary">
                <FiDownload size={18} /> Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a href={PERSONAL.github} target="_blank" rel="noreferrer"
                className="p-3 rounded-full glass glass-hover text-white/70 hover:text-primary transition-all duration-300">
                <FaGithub size={20} />
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer"
                className="p-3 rounded-full glass glass-hover text-white/70 hover:text-primary transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href={PERSONAL.instagram} target="_blank" rel="noreferrer"
                className="p-3 rounded-full glass glass-hover text-white/70 hover:text-primary transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <div className="h-px w-16 bg-gradient-to-r from-white/20 to-transparent" />
              <span className="text-sm text-white/40 font-mono">Open to opportunities</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Profile Image */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative" style={{ animation: 'float 6s ease-in-out infinite' }}>
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(0,207,255,0.3) 0%, transparent 70%)',
                  transform: 'scale(1.5)',
                  animation: 'glowPulse 3s ease-in-out infinite'
                }} />

              {/* Rotating gradient border */}
              <div className="profile-ring" style={{ width: 320, height: 320 }}>
                {/* Inner circle */}
                <div className="rounded-full overflow-hidden"
                  style={{
                    width: 300, height: 300,
                    background: 'linear-gradient(135deg, #111, #1a1a2e)',
                    border: '3px solid rgba(0,207,255,0.3)',
                  }}>
                  <img
                    src="/profile.png"
                    alt="Sakthi Paramesh B — AI & Full Stack Developer"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="text-xs text-white/30 font-mono tracking-widest">SCROLL</span>
        <FiArrowDown className="text-primary animate-bounce" size={18} />
      </div>
    </section>
  );
}

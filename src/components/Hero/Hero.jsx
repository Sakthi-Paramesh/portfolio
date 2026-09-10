import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiEye } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { PERSONAL, TYPING_ROLES } from '../../utils/data';

const typeSequence = TYPING_ROLES.flatMap((r) => [r, 1800]).flat();

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-grid overflow-hidden" style={{ background: 'var(--black-950)' }}>
      {/* Grid overlay */}
      <div className="bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="container relative z-10 pt-36 sm:pt-44 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Greeting Badge */}
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3">
              <div style={{ height: '1px', width: '56px', background: 'linear-gradient(to right, transparent, #3b82f6)' }} />
              <span className="badge-blue">
                {/* Bootstrap Icon — hand-wave */}
                <i className="bi bi-hand-index-thumb" style={{ fontSize: '0.8rem' }}></i>
                Hello, I&apos;m
              </span>
              <div style={{ height: '1px', width: '56px', background: 'linear-gradient(to left, transparent, #3b82f6)' }} />
            </motion.div>

            <motion.h1
              className="font-extrabold leading-none font-heading"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                className="text-white block">
                Sakthi{' '}
              </motion.span>
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55 }}
                className="text-primary block">
                Paramesh B
              </motion.span>
            </motion.h1>

            {/* Typing Roles */}
            <motion.div className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <span style={{ color: '#3b82f6', fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: '1.2rem' }}>{'>'}</span>
              <span className="gradient-text font-bold" style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.7rem)', fontFamily: "'Inter', sans-serif" }}>
                <TypeAnimation sequence={typeSequence} speed={50} repeat={Infinity} cursor={true} />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="leading-relaxed max-w-xl font-medium"
              style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Passionate Computer Science Engineering student crafting intelligent, scalable web applications.
              Specializing in AI integration, Spring Boot backend architecture, and high-impact full-stack experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
              <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline btn-3d-press">
                <FiEye size={18} /> View Resume
              </a>
              <a href={PERSONAL.resumeUrl} download="Sakthi_Paramesh_B_Resume.pdf" className="btn-primary btn-3d-press">
                <FiDownload size={18} /> Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex items-center gap-4 pt-4"
              style={{ borderTop: '1px solid rgba(59,130,246,0.15)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              {[
                { href: PERSONAL.github,    icon: <FaGithub size={20} />,    label: 'GitHub'    },
                { href: PERSONAL.linkedin,  icon: <FaLinkedin size={20} />,  label: 'LinkedIn'  },
                { href: PERSONAL.instagram, icon: <FaInstagram size={20} />, label: 'Instagram' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="glass glass-hover transition-all duration-300"
                  style={{ padding: '0.85rem', borderRadius: '50%', color: 'rgba(255,255,255,0.7)', display: 'flex' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  {icon}
                </a>
              ))}
              <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to right, rgba(59,130,246,0.3), transparent)' }} />
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono' }}>
                {/* Bootstrap Icon */}
                <i className="bi bi-circle-fill" style={{ color: '#22c55e', fontSize: '0.55rem', marginRight: '0.4rem' }}></i>
                Available for Hire
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — 3D Profile Card */}
          <motion.div
            className="flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.7, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 14, delay: 0.35 }}
            style={{ perspective: '1200px' }}
          >
            <div className="relative group" style={{ transformStyle: 'preserve-3d' }}>
              {/* Outer glow aura */}
              <div className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.55) 0%, rgba(37,99,235,0.35) 50%, transparent 70%)', transform: 'scale(1.3)', opacity: 0.45 }} />

              {/* Spinning orange ring */}
              <div className="relative rounded-full" style={{ padding: '5px' }}>
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'conic-gradient(from 0deg, #3b82f6, #1d4ed8, #1e40af, #3b82f6, #60a5fa, #3b82f6)', animation: 'spin 12s linear infinite', filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.8))' }} />

                {/* Profile Image */}
                <div className="relative rounded-full overflow-hidden z-10 transition-transform duration-500"
                  style={{ width: '18rem', height: '18rem', background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)', border: '4px solid #080808', boxShadow: '0 0 40px rgba(59,130,246,0.35), 0 0 80px rgba(59,130,246,0.15)' }}>
                  <img
                    src="/profile.png"
                    alt="Sakthi Paramesh B — AI & Full Stack Developer"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.7s ease' }}
                    className="group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <i className="bi bi-chevron-double-down animate-bounce" style={{ color: '#3b82f6', fontSize: '1rem' }}></i>
      </div>
    </section>
  );
}

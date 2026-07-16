import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { useScrollDirection, useActiveSection } from '../../hooks/usePortfolio';
import { NAV_LINKS, PERSONAL } from '../../utils/data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { direction, scrolled } = useScrollDirection();
  const sections = NAV_LINKS.map((l) => l.href);
  const active = useActiveSection(sections);

  const hidden = direction === 'down' && scrolled;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[9000]"
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'glass-dark shadow-xl shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="home" smooth duration={600} className="flex items-center gap-3 group" style={{cursor:'none'}}>
            {/* Profile photo avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-9 h-9 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00CFFF, #7C3AED)',
                  padding: '2px',
                  boxShadow: '0 0 10px rgba(0,207,255,0.3)',
                }}>
                <img
                  src="/profile.png"
                  alt="Sakthi Paramesh"
                  className="w-full h-full rounded-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: '0 0 16px rgba(0,207,255,0.7)' }} />
            </div>
            <span className="font-bold text-white tracking-wide hidden sm:block">
              Sakthi<span className="gradient-text">Paramesh</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  smooth
                  duration={600}
                  offset={-70}
                  className={`nav-link ${active === href ? 'active' : ''}`}
                  style={{cursor:'none'}}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PERSONAL.resumeUrl}
              download
              className="btn-primary text-sm py-2 px-5 flex items-center gap-2"
            >
              <FiDownload size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-dark border-t border-white/10 lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    smooth
                    duration={600}
                    offset={-70}
                    className={`block py-2 nav-link text-base ${active === href ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                    style={{cursor:'none'}}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={PERSONAL.resumeUrl} download className="btn-primary w-full justify-center text-sm mt-2">
                  <FiDownload size={14} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

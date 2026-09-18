import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
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
            ? 'glass-dark shadow-xl'
            : 'bg-transparent'
        }`}
        style={scrolled ? { borderBottom: '1px solid rgba(59,130,246,0.15)', boxShadow: '0 4px 30px rgba(0,0,0,0.6)' } : {}}
      >
        <div className="container flex items-center justify-between" style={{ height: '5rem' }}>
          {/* Logo */}
          <Link to="home" smooth duration={600} className="flex items-center gap-3 group" style={{ cursor: 'none' }}>
            <div className="relative flex-shrink-0">
              <div className="rounded-full overflow-hidden"
                style={{ width: '2.5rem', height: '2.5rem' }}>
                <img
                  src="/profile.png"
                  alt="Sakthi Paramesh"
                  className="w-full h-full rounded-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>
            <span className="hidden sm:block font-extrabold"
              style={{ fontSize: '1.05rem', fontFamily: "'Poppins', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase', color: '#000000' }}>
              SAKTHI PARAMESH B
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
                  style={{ cursor: 'none', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
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
              className="btn-primary btn-3d-press"
              style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem', gap: '0.4rem' }}
            >
              {/* Bootstrap Icon */}
              <i className="bi bi-download" style={{ fontSize: '0.85rem' }}></i>
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg transition-colors"
            style={{ background: menuOpen ? 'rgba(59,130,246,0.1)' : 'transparent', border: '1px solid rgba(59,130,246,0.2)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.25rem', color: '#3b82f6' }}></i>
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
            className="glass-dark lg:hidden overflow-hidden"
            style={{ borderBottom: '1px solid rgba(59,130,246,0.15)' }}
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
                    style={{ cursor: 'none' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={PERSONAL.resumeUrl} download className="btn-primary w-full justify-center"
                  style={{ fontSize: '0.85rem', padding: '0.75rem 1.5rem', marginTop: '0.5rem' }}>
                  <i className="bi bi-download"></i> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { PERSONAL } from '../../utils/data';

const SOCIALS = [
  { icon: FaGithub, href: PERSONAL.github, label: 'GitHub' },
  { icon: FaLinkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
  { icon: HiMail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
  { icon: FaInstagram, href: PERSONAL.instagram, label: 'Instagram' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5">
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00CFFF, #7C3AED, transparent)' }} />

      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #00CFFF, #7C3AED)' }}>
                SP
              </div>
              <span className="font-bold text-white">
                Sakthi<span className="gradient-text">Paramesh</span>
              </span>
            </div>
            <p className="text-xs text-white/30 font-mono">Building tomorrow&apos;s tech, today.</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright + Back to top */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-xs text-white/30 font-mono">
              © {year} Sakthi Paramesh B. All rights reserved.
            </p>
            <Link to="home" smooth duration={800}>
              <button
                className="flex items-center gap-2 text-xs text-primary hover:text-white transition-colors font-mono group"
                aria-label="Back to top"
              >
                <FiArrowUp className="group-hover:-translate-y-1 transition-transform" size={14} />
                Back to top
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

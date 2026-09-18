import { motion } from 'framer-motion';
import { PERSONAL } from '../../utils/data';

export default function Footer() {
  const email = "sakthiparameshbala@gmail.com";
  const mobile = "6374436927";

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.08 } })
  };

  const socialLinks = [
    { href: PERSONAL.linkedin,            icon: 'bi-linkedin',   label: 'LinkedIn',  bg: '#EFF6FF', color: '#0077b5', border: '#bfdbfe', hover: '#0077b5' },
    { href: PERSONAL.github,              icon: 'bi-github',     label: 'GitHub',    bg: '#f6f8fa', color: '#24292e', border: '#d0d7de', hover: '#24292e' },
    { href: `https://wa.me/91${mobile}`,  icon: 'bi-whatsapp',   label: 'WhatsApp',  bg: '#f0fdf4', color: '#25D366', border: '#bbf7d0', hover: '#25D366' },
    { href: PERSONAL.instagram,           icon: 'bi-instagram',  label: 'Instagram', bg: '#fdf2f8', color: '#E1306C', border: '#fbcfe8', hover: '#E1306C' },
  ];

  return (
    <footer style={{ background: '#ffffff', fontFamily: "'Poppins', sans-serif", borderTop: '1px solid #e8ecf0' }}>



      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '18px 24px 14px' }}>

        {/* ── 3 Column Info Row ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* Location */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-1.5">
              <i className="bi bi-geo-alt-fill" style={{ color: '#f87171', fontSize: '0.8rem' }}></i>
              <span style={{ color: '#9ca3af', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Location</span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: 1.7 }}>
              155/East Street, Mudhanai,<br />
              Vridhachalam, Cuddalore — 607 804
            </p>
          </motion.div>

          {/* Social Buttons */}
          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 transform"
                style={{ padding: '6px 14px', fontSize: '0.75rem', background: s.bg, color: s.color, border: `1px solid ${s.border}`, textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.background = s.hover; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = s.hover; }}
                onMouseLeave={e => { e.currentTarget.style.background = s.bg; e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.border; }}
              >
                <i className={`bi ${s.icon}`} style={{ fontSize: '0.8rem' }}></i>
                {s.label}
              </a>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-right"
          >
            <div className="flex items-center justify-end gap-2 mb-1.5">
              <span style={{ color: '#9ca3af', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Contact</span>
              <i className="bi bi-person-fill" style={{ color: '#3b82f6', fontSize: '0.8rem' }}></i>
            </div>
            <p style={{ fontWeight: 700, color: '#111827', fontSize: '0.88rem', marginBottom: '4px' }}>Sakthi Paramesh B</p>
            <a href={`mailto:${email}`}
              style={{ display: 'block', fontSize: '0.78rem', color: '#6b7280', textDecoration: 'none', lineHeight: 1.8 }}
              onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
            >
              <i className="bi bi-envelope-fill" style={{ marginRight: '5px', opacity: 0.5, fontSize: '0.7rem' }}></i>{email}
            </a>
            <a href={`tel:${mobile}`}
              style={{ display: 'block', fontSize: '0.78rem', color: '#6b7280', textDecoration: 'none', lineHeight: 1.8 }}
              onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
            >
              <i className="bi bi-telephone-fill" style={{ marginRight: '5px', opacity: 0.5, fontSize: '0.7rem' }}></i>+91 {mobile}
            </a>
          </motion.div>

        </div>

        {/* ── Copyright ── */}
        <div style={{ height: '1px', background: '#f1f5f9', margin: '20px 0 14px' }} />
        <motion.p
          variants={fadeUp} custom={4}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ textAlign: 'center', color: '#b0bac5', fontSize: '0.7rem', letterSpacing: '0.06em' }}
        >
          © {new Date().getFullYear()} Sakthi Paramesh B &nbsp;·&nbsp; All rights reserved &nbsp;·&nbsp; Built with React & Vite
        </motion.p>

      </div>
    </footer>
  );
}

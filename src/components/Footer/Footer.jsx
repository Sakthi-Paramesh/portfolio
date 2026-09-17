import { motion } from 'framer-motion';
import { PERSONAL } from '../../utils/data';

export default function Footer() {
  const email = "sakthiparameshbala@gmail.com";
  const mobile = "6374436927";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const socialLinks = [
    { href: PERSONAL.linkedin,            icon: 'bi-linkedin',   label: 'LinkedIn',  bg: '#EFF6FF', color: '#0077b5', border: '#bfdbfe', hover: '#0077b5' },
    { href: PERSONAL.github,              icon: 'bi-github',     label: 'GitHub',    bg: '#f6f8fa', color: '#24292e', border: '#d0d7de', hover: '#24292e' },
    { href: `https://wa.me/91${mobile}`,  icon: 'bi-whatsapp',   label: 'WhatsApp',  bg: '#f0fdf4', color: '#25D366', border: '#bbf7d0', hover: '#25D366' },
    { href: PERSONAL.instagram,           icon: 'bi-instagram',  label: 'Instagram', bg: '#fdf2f8', color: '#E1306C', border: '#fbcfe8', hover: '#E1306C' },
  ];

  return (
    <footer
      className="relative py-10 px-4 md:px-10"
      style={{ background: '#f1f5f9', fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── Main Card ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >

        {/* ── Top accent bar ── */}
        <div style={{ height: '4px', background: 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)' }} />

        {/* ── Card Body ── */}
        <div className="p-8 md:p-10">

          {/* 3-column row */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6">

            {/* Col 1 — Location */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                  <i className="bi bi-geo-alt-fill text-red-500 text-sm"></i>
                </div>
                <h4 className="font-bold text-gray-800 text-base tracking-wide">Location</h4>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed pl-9">
                155/East Street,<br />
                Mudhanai, Vridhachalam,<br />
                Cuddalore — 607 804.
              </p>
            </motion.div>

            {/* Col 2 — Quote (center) */}
            <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center flex-1 px-4 border-x border-gray-100">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', lineHeight: '0.5', color: '#3b82f6', opacity: 0.2 }}>&ldquo;</span>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontStyle: 'italic', fontWeight: 700, color: '#1e293b', lineHeight: 1.65 }}>
                Dream big, work hard,<br />stay focused.
              </p>
              <span style={{ display: 'block', width: '40px', height: '3px', background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', borderRadius: '99px', margin: '10px auto 0' }} />
            </motion.div>

            {/* Col 3 — Contact */}
            <motion.div variants={itemVariants} className="flex flex-col items-end text-right gap-3 flex-1">
              <div className="flex items-center justify-end gap-2 mb-1">
                <h4 className="font-bold text-gray-800 text-base tracking-wide">Contact</h4>
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                  <i className="bi bi-person-fill text-blue-500 text-sm"></i>
                </div>
              </div>
              <p className="font-bold text-gray-900 text-lg">Sakthi Paramesh B</p>
              <a href={`mailto:${email}`} className="flex items-center justify-end gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
                <span>{email}</span>
                <i className="bi bi-envelope-fill text-blue-400 text-xs"></i>
              </a>
              <a href={`tel:${mobile}`} className="flex items-center justify-end gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
                <span>+91 {mobile}</span>
                <i className="bi bi-telephone-fill text-blue-400 text-xs"></i>
              </a>
            </motion.div>

          </div>

          {/* ── Divider ── */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,#e2e8f0,transparent)', margin: '2rem 0' }} />

          {/* ── Social Buttons Row ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 transform"
                style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
                onMouseEnter={e => { e.currentTarget.style.background = s.hover; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = s.hover; }}
                onMouseLeave={e => { e.currentTarget.style.background = s.bg; e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.border; }}
              >
                <i className={`bi ${s.icon} text-base`}></i>
                {s.label}
              </a>
            ))}
          </motion.div>

        </div>

        {/* ── Bottom copyright strip ── */}
        <div style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', padding: '12px 32px', textAlign: 'center' }}>
          <p className="text-xs text-gray-400 font-semibold tracking-wide">
            © {new Date().getFullYear()} Sakthi Paramesh B &nbsp;·&nbsp; All rights reserved &nbsp;·&nbsp; Built with React &amp; Vite
          </p>
        </div>

      </motion.div>
    </footer>
  );
}

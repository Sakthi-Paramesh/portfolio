import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle, FiFileText } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { PERSONAL } from '../../utils/data';

const SOCIALS = [
  { icon: FaGithub, href: PERSONAL.github, label: 'GitHub', color: '#fff' },
  { icon: FaLinkedin, href: PERSONAL.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaEnvelope, href: `mailto:${PERSONAL.email}`, label: 'Email', color: '#00CFFF' },
  { icon: FaInstagram, href: PERSONAL.instagram, label: 'Instagram', color: '#E1306C' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    // Simulate sending (replace with EmailJS in production)
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTimeout(() => setSent(false), 5000);
    }, 1800);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="aurora-blob"
        style={{ width: 400, height: 400, background: '#00CFFF', bottom: '0%', right: '-5%', opacity: 0.06 }} />
      <div className="aurora-blob"
        style={{ width: 350, height: 350, background: '#7C3AED', top: '10%', left: '-5%', opacity: 0.06 }} />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">— Get in touch —</p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Let&apos;s collaborate or chat about opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">

          {/* LEFT — Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Let&apos;s Talk</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Drop a message and I&apos;ll get back to you soon!
              </p>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${PERSONAL.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors">
                  <FaEnvelope className="text-primary" size={18} />
                  {PERSONAL.email}
                </a>
                <span className="flex items-center gap-3 text-sm text-white/60">
                  <span className="text-primary text-lg">📍</span>
                  {PERSONAL.location}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white/70 mb-4 uppercase tracking-widest text-xs">Find me on</h4>
              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = color + '40';
                      e.currentTarget.style.boxShadow = `0 4px 20px ${color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                    <span className="text-xs font-medium text-white/60">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5"
              style={{ border: '1px solid rgba(0,207,255,0.1)' }}>
              
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block font-medium">Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Sakthi Paramesh"
                      className={`form-input pl-10 ${errors.name ? 'error' : ''}`}
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block font-medium">Email Address</label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@email.com"
                      className={`form-input pl-10 ${errors.email ? 'error' : ''}`}
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block font-medium">Subject</label>
                <div className="relative">
                  <FiFileText className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Let's collaborate!"
                    className={`form-input pl-10 ${errors.subject ? 'error' : ''}`}
                  />
                </div>
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="text-xs text-white/50 mb-1.5 block font-medium">Message</label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3.5 top-4 text-white/30" size={15} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className={`form-input pl-10 resize-none ${errors.message ? 'error' : ''}`}
                  />
                </div>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-semibold"
                    style={{
                      background: 'rgba(52,211,153,0.1)',
                      border: '1px solid rgba(52,211,153,0.3)',
                      color: '#34D399',
                    }}
                  >
                    <FiCheckCircle size={18} />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                ) : (
                  <motion.button
                    key="send"
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

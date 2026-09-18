import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ===== Certificate Modal =====
function CertModal({ entry, onClose }) {
  if (!entry) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-10 bg-black/80 backdrop-blur-sm"
    >
      <div
        className="relative max-w-4xl w-full flex flex-col items-center bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-between items-start mb-6">
          <div>
            <h3 className="font-semibold text-white text-xl">{entry.title}</h3>
            <p className="text-sm text-blue-400 mt-1">{entry.company} · {entry.period}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <img
          src={entry.cert}
          alt={`${entry.company} Certificate`}
          className="w-full max-h-[70vh] object-contain rounded-lg"
        />
      </div>
    </motion.div>
  );
}

// ===== Experience Data =====
const EXPERIENCES = [
  {
    id: 1,
    company: 'YardStick Digital (YSD | yedge)',
    logo: '/ysd-logo.png',
    title: 'Python Full Stack Internship',
    period: 'Jun 2026 – Jun 2026',
    type: 'Internship Completion',
    description:
      'Successfully completed an intensive Python Full Stack internship at YardStick Digital Solutions — India\'s Most Reliable Placement Ecosystem. Gained hands-on experience building scalable web applications using Python backend frameworks and modern frontend technologies.',
    tech: ['Python', 'Full Stack', 'Django', 'React.js', 'REST API', 'Git'],
    cert: '/ysd-internship-cert.jpg',
  },
  {
    id: 2,
    company: 'Thiranex',
    logo: '/thiranex_logo.jpg',
    title: 'Full Stack Web Development Internship',
    period: 'May 2026 – Jun 2026',
    type: 'Internship',
    description:
      'Completed professional training and gained hands-on experience in modern software engineering practices. Collaborated on technical solutions and improved proficiency in scalable web development and industry-standard workflows.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'REST API'],
    cert: '/thiranex-internship-cert.jpg',
  },
];

// ===== Single Entry Card =====
function ExperienceCard({ entry, index, onViewCert }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Company + Date Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-11 h-11 rounded-lg border border-gray-200 shrink-0 shadow-sm bg-white flex items-center justify-center overflow-hidden">
            <img
              src={entry.logo}
              alt={`${entry.company} Logo`}
              className="w-9 h-9 object-contain object-center"
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = `<span style="font-size:1.4rem">🏢</span>`; }}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {entry.company}
            </h3>
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {entry.type}
            </p>
          </div>
        </div>

        {/* Date Badge */}
        <span
          className="self-start md:self-auto text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: '#eff6ff', color: '#3b82f6', border: '1px solid #bfdbfe', fontFamily: "'Poppins', sans-serif" }}
        >
          {entry.period}
        </span>
      </div>

      {/* Role title */}
      <p className="text-sm font-semibold text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
        🎯 {entry.title}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {entry.description}
      </p>

      {/* Tech Stack */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Tech Stack Used
        </p>
        <div className="flex flex-wrap gap-2">
          {entry.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: '#eff6ff', color: '#3b82f6', border: '1px solid #bfdbfe', fontFamily: "'Poppins', sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* View Certificate */}
      <div>
        <button
          onClick={() => onViewCert(entry)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          style={{ fontFamily: "'Poppins', sans-serif", background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <i className="bi bi-award text-blue-500"></i>
          View Certificate
          <i className="bi bi-box-arrow-up-right text-[10px]"></i>
        </button>
      </div>
    </motion.div>
  );
}

// ===== Main Component =====
export default function Experience() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="experience" className="py-16">
      <AnimatePresence>
        {activeCert && <CertModal entry={activeCert} onClose={() => setActiveCert(null)} />}
      </AnimatePresence>

      <div className="container max-w-4xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Professional Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((entry, index) => (
            <ExperienceCard
              key={entry.id}
              entry={entry}
              index={index}
              onViewCert={setActiveCert}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

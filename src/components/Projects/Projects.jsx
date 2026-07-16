import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { PROJECTS } from '../../utils/data';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -12;
    const rotY = ((x - cx) / cx) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    card.style.boxShadow = `
      ${((x - cx) / cx) * -20}px ${((y - cy) / cy) * -20}px 60px rgba(0,207,255,0.15),
      0 0 40px rgba(${project.color === '#00CFFF' ? '0,207,255' : '124,58,237'},0.2)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    card.style.boxShadow = '';
    card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass rounded-2xl overflow-hidden cert-card"
        style={{
          transition: 'transform 0.1s ease, box-shadow 0.1s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-52">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectFit: 'cover' }}
          />
          {/* Image overlay gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.9) 100%)' }} />

          {/* Live badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-semibold"
            style={{
              background: `${project.color}20`,
              border: `1px solid ${project.color}40`,
              color: project.color,
            }}>
            ● Live
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-md text-xs font-mono"
                style={{
                  background: `${project.color}12`,
                  color: project.color,
                  border: `1px solid ${project.color}25`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${project.color}CC, ${project.color === '#00CFFF' ? '#7C3AED' : '#00CFFF'}CC)`,
                boxShadow: `0 4px 15px ${project.color}30`,
              }}
            >
              <FiExternalLink size={15} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <FiGithub size={15} /> Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="aurora-blob"
        style={{ width: 400, height: 400, background: '#00CFFF', bottom: '10%', left: '-5%', opacity: 0.06 }} />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">— What I&apos;ve built —</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">A selection of things I&apos;ve built with passion</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaGithub, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTensorflow, SiDjango, SiBootstrap, SiTailwindcss, SiMongodb, SiVite, SiExpress, SiJavascript } from 'react-icons/si';
import { PROJECTS, PERSONAL } from '../../utils/data';

const getTechIcon = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes('java') && !t.includes('script')) return <FaJava color="#f89820" />;
  if (t.includes('python')) return <FaPython color="#3776ab" />;
  if (t.includes('react')) return <FaReact color="#61dafb" />;
  if (t.includes('node')) return <FaNodeJs color="#339933" />;
  if (t.includes('spring')) return <SiSpringboot color="#6db33f" />;
  if (t.includes('mysql')) return <SiMysql color="#4479a1" />;
  if (t.includes('tensor') || t.includes('machine')) return <SiTensorflow color="#ff6f00" />;
  if (t.includes('django')) return <SiDjango color="#092e20" />;
  if (t.includes('tailwind')) return <SiTailwindcss color="#06b6d4" />;
  if (t.includes('mongo')) return <SiMongodb color="#47a248" />;
  if (t.includes('vite')) return <SiVite color="#646cff" />;
  if (t.includes('express')) return <SiExpress color="#ffffff" />;
  if (t.includes('script')) return <SiJavascript color="#f7df1e" />;
  if (t.includes('git')) return <FaGithub color="#ffffff" />;
  return <FaDatabase color="#6b7280" className="opacity-50" />;
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-xl border border-white/10 bg-[#0c0c0c] hover:bg-white/[0.04] transition-colors duration-300 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden border-b border-white/10">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent opacity-80" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{project.title}</h3>
          <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-3 mt-auto pt-2">
          {project.tech.map((t) => (
            <div key={t} title={t} className="text-[1.35rem] text-white/80 hover:text-blue-400 transition-colors">
              {getTechIcon(t)}
            </div>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-4 pt-4 border-t border-white/10 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium flex items-center justify-center transition-colors"
          >
            <i className="bi bi-github mr-2"></i> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium flex items-center justify-center transition-colors shadow-lg shadow-blue-500/20"
          >
            <i className="bi bi-box-arrow-up-right mr-2"></i> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>— Featured Work —</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            My Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto mt-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Real-world applications built with AI diagnostics, Spring Boot backend systems, and modern React interfaces.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

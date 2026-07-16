import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/usePortfolio';
import { SKILLS } from '../../utils/data';

const ICONS = {
  Java: '☕', Python: '🐍', JavaScript: '✨',
  'HTML5': '🌐', 'CSS3': '🎨', Bootstrap: '🅱', React: '⚛️',
  'Spring Boot': '🍃', Django: '🔷',
  MySQL: '🗄️',
  'Git & GitHub': '🐙', 'VS Code': '💙', 'IntelliJ IDEA': '🧠', Postman: '📮',
};

function SkillBar({ name, percent, animate }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{ICONS[name] || '⚡'}</span>
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="font-mono text-xs text-primary">{percent}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{
            transform: animate ? `scaleX(${percent / 100})` : 'scaleX(0)',
            background: 'linear-gradient(90deg, #00CFFF, #7C3AED)',
            boxShadow: animate ? '0 0 8px rgba(0,207,255,0.6)' : 'none',
            transition: 'transform 1.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="section">
      {/* Decorative bg */}
      <div className="aurora-blob"
        style={{ width: 400, height: 400, background: '#7C3AED', top: '20%', right: '-5%', opacity: 0.08 }} />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">— What I know —</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SKILLS.map((cat, i) => (
            <motion.button
              key={cat.category}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? 'text-white shadow-lg'
                  : 'glass text-white/60 hover:text-white hover:border-white/20'
              }`}
              style={active === i ? {
                background: 'linear-gradient(135deg, #00CFFF, #7C3AED)',
                boxShadow: '0 0 20px rgba(0,207,255,0.4)',
              } : {}}
            >
              <span>{cat.icon}</span>
              {cat.category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={active}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {SKILLS[active].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <SkillBar name={skill.name} percent={skill.percent} animate={inView} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack pills row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['React', 'Spring Boot', 'Java', 'Python', 'Django', 'MySQL', 'Git', 'TensorFlow', 'REST API', 'Bootstrap'].map((tech) => (
            <span
              key={tech}
              className="glass px-4 py-2 rounded-full text-xs font-mono text-white/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.08)', cursor: 'default' }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

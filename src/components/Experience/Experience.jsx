import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../utils/data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="aurora-blob"
        style={{ width: 350, height: 350, background: '#7C3AED', top: '30%', right: '-5%', opacity: 0.07 }} />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">— What I&apos;ve done —</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">Internships and professional training</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(to bottom, #00CFFF, #7C3AED, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          {EXPERIENCE.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: isLeft ? -60 : 60 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: i * 0.1 } },
                }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${!isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="glass rounded-2xl p-6 cert-card glass-hover">
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{exp.icon}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(0,207,255,0.1)',
                          border: '1px solid rgba(0,207,255,0.2)',
                          color: '#00CFFF',
                        }}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-sm text-primary/80 mb-1">{exp.company}</p>
                    <p className="text-xs text-white/40 font-mono mb-3">{exp.period}</p>
                    <p className="text-xs text-white/55 leading-relaxed mb-4">{exp.description}</p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t}
                          className="px-2 py-0.5 rounded text-xs font-mono text-white/50"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full z-10"
                  style={{
                    transform: 'translate(-50%, 0)',
                    background: 'linear-gradient(135deg, #00CFFF, #7C3AED)',
                    boxShadow: '0 0 12px rgba(0,207,255,0.6)',
                  }}
                />

                {/* Year label (desktop) */}
                <div className={`hidden md:block absolute top-0 md:w-5/12 ${isLeft ? 'right-0 pr-12 text-right' : 'left-0 pl-12 text-left'}`}>
                  <span className="font-mono text-xs text-white/40">{exp.period.split('–')[0]}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

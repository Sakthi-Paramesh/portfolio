import { motion } from 'framer-motion';
import { useInView } from '../../hooks/usePortfolio';
import { PERSONAL } from '../../utils/data';
import { FiBook, FiTarget, FiHeart, FiCode } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const timelineItems = [
  {
    year: '2023',
    title: 'Started CSE Journey',
    desc: 'Joined Shree Venkateshwara Hi-Tech Engineering College, discovered passion for programming.',
    icon: '🚀',
  },
  {
    year: '2024',
    title: 'First Major Project',
    desc: 'Built Smart Weather Disaster Resource Management System. Developed strong frontend & backend skills.',
    icon: '💡',
  },
  {
    year: '2026',
    title: 'NPTEL Certification',
    desc: 'Earned NPTEL Programming in Java Elite + Gold certification with top 5% national score.',
    icon: '🏆',
  },
  {
    year: '2026',
    title: 'Industry Internship',
    desc: 'Completed internship at Gateway Solution. Gained hands-on industry experience in full-stack development.',
    icon: '🌟',
  },
  {
    year: '2027',
    title: 'Graduation & Beyond',
    desc: 'Graduating with strong portfolio. Ready to make an industry impact.',
    icon: '🎓',
  },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">
            — Get to know me —
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            {/* Main Bio Card */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 box-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #00CFFF, #7C3AED)' }}>
                  <FiCode className="text-white" size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">
                I&apos;m <strong className="text-white">Sakthi Paramesh B</strong>, a passionate Computer Science Engineering 
                student specializing in AI integration and full-stack development. I love turning complex 
                problems into elegant, efficient solutions that make a real-world impact.
              </p>
              <p className="text-white/60 leading-relaxed text-sm mt-3">
                My journey spans from crafting scalable Java microservices with Spring Boot to building 
                intelligent Python-based AI systems — always pushing the boundary of what&apos;s possible.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 glass-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #00CFFF)' }}>
                  <FiBook className="text-white" size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">B.E. Computer Science Engineering</p>
                    <p className="text-white/50 text-xs">Shree Venkateshwara Hi-Tech Engineering College • 2023–{PERSONAL.graduationYear}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">Higher Secondary (CBSE)</p>
                    <p className="text-white/50 text-xs">Tamil Nadu • 2020–2022</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Objectives Row */}
            <div className="mt-4">
              <motion.div variants={fadeUp} className="glass rounded-2xl p-5 glass-hover flex flex-col items-center text-center box-glow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: 'rgba(0,207,255,0.1)', border: '1px solid rgba(0,207,255,0.2)' }}>
                    🎯
                  </div>
                  <h4 className="text-sm font-bold text-white">Career Objective</h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mt-2">
                  A passionate Computer Science Engineering student looking for an entry-level opportunity to utilize my technical skills, gain practical experience, and contribute effectively to organizational success.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Timeline */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="relative"
          >
            <motion.h3 variants={fadeUp} className="text-lg font-bold text-white mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              My Journey
              <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
            </motion.h3>

            {/* Timeline track */}
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5"
                style={{ background: 'linear-gradient(to bottom, #00CFFF, #7C3AED, transparent)' }} />

              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-8 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    style={{
                      background: 'linear-gradient(135deg, #00CFFF, #7C3AED)',
                      boxShadow: '0 0 12px rgba(0,207,255,0.5)',
                    }}>
                    {i + 1}
                  </div>

                  <div className="glass rounded-xl p-4 cert-card glass-hover">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

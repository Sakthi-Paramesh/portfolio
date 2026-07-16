import { motion } from 'framer-motion';
import { useInView, useCountUp } from '../../hooks/usePortfolio';
import { STATS } from '../../utils/data';

function StatCard({ stat, inView, delay }) {
  const count = useCountUp(stat.value, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6 text-center glass-hover flex flex-col items-center gap-3"
    >
      {/* Number */}
      <div
        className="font-extrabold"
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          background: 'linear-gradient(135deg, #00CFFF, #7C3AED)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: 'none',
          lineHeight: 1,
        }}
      >
        {count}{stat.suffix}
      </div>
      <p className="text-sm text-white/50 font-medium">{stat.label}</p>
      {/* Decoration line */}
      <div className="w-8 h-0.5 rounded-full"
        style={{ background: 'linear-gradient(90deg, #00CFFF, #7C3AED)' }} />
    </motion.div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="section py-20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">— By the numbers —</p>
          <h2 className="section-title">
            Stats &amp; <span className="gradient-text">Highlights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

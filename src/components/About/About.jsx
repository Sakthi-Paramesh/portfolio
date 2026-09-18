import { motion } from 'framer-motion';
import { useInView } from '../../hooks/usePortfolio';
import { PERSONAL } from '../../utils/data';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="pt-32 pb-24 min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* About Header */}
        <div className="mb-12">
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3">— Who is this ? —</p>
          <h2 className="section-title !text-left">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
        >
          {/* Left - Text Content */}
          <div className="flex flex-col gap-6 text-white/80 leading-relaxed text-[0.95rem] md:text-[1.05rem] text-justify">
            <p>
              I&apos;m <strong className="text-white">Sakthi Paramesh B</strong> from Tamil Nadu — a passionate <strong className="text-white">B.E. Computer Science Engineering</strong> (2023–{PERSONAL.graduationYear}) at Shree Venkateshwara Hi-Tech Engineering College (Autonomous). I specialize in AI integration and Full-Stack development and enjoy building intelligent, scalable applications.
            </p>
            <p>
              I&apos;m actively seeking opportunities to contribute to innovative projects in a forward-thinking organization while continuously improving my technical and professional skills.
            </p>
            <p>
              Currently looking for opportunities to start my professional career and contribute my skills to real-world projects.
            </p>
          </div>

          {/* Right - Profile Image */}
          <div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 shadow-2xl relative"
            style={{ border: '4px solid rgba(255,255,255,0.05)', boxShadow: '0 0 40px rgba(59,130,246,0.15)' }}
          >
            <img 
              src="/profile.png" 
              alt="Sakthi Paramesh B" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

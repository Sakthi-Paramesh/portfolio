import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6">
        
        {/* Simple Flat Header matching the new minimal style */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            Professional Experience
          </h2>
        </div>

        {/* Clean, single block experience layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-2xl p-8 md:p-10 transition-colors shadow-lg"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-white/5 shadow-md bg-white">
                <img src="/thiranex_logo.jpg" alt="Thiranex Logo" className="w-full h-full object-cover p-1" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Thiranex</h3>
                <p className="text-[1rem] text-primary font-semibold mt-1 uppercase tracking-wider font-mono">Professional Experience</p>
              </div>
            </div>
            <div 
              className="inline-block px-4 py-1.5 rounded-full font-mono text-sm font-bold whitespace-nowrap self-start"
              style={{
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.3)',
                color: '#3b82f6'
              }}
            >
              May 2026 – June 2026
            </div>
          </div>
          
          <div className="text-white/70 leading-relaxed text-[0.95rem] space-y-4">
            <p>
              Completed professional training and gained hands-on experience in modern software engineering practices. Collaborated on technical solutions and improved proficiency in scalable web development and industry-standard workflows.
            </p>
            <div className="pt-2">
              <a 
                href="/thiranex-internship-cert.jpg" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all transform hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.2))',
                  border: '1px solid rgba(59,130,246,0.3)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                <i className="bi bi-award text-blue-400 text-base"></i>
                View Certificate
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-16">
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

        {/* Experience Entry */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
          style={{ paddingLeft: '4px' }}
        >
          {/* Company + Date Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="w-11 h-11 rounded-lg overflow-hidden border border-gray-200 shrink-0 shadow-sm">
                <img src="/thiranex_logo.jpg" alt="Thiranex Logo" className="w-full h-full object-cover p-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Thiranex</h3>
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Internship
                </p>
              </div>
            </div>

            {/* Date Badge */}
            <span
              className="self-start md:self-auto text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: '#eff6ff', color: '#3b82f6', border: '1px solid #bfdbfe', fontFamily: "'Poppins', sans-serif" }}
            >
              May 2026 – June 2026
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Completed professional training and gained hands-on experience in modern software engineering practices.
            Collaborated on technical solutions and improved proficiency in scalable web development and industry-standard workflows.
          </p>

          {/* Tech Stack */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Tech Stack Used
            </p>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'REST API'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: '#eff6ff',
                    color: '#3b82f6',
                    border: '1px solid #bfdbfe',
                    fontFamily: "'Poppins', sans-serif"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate Link */}
          <div>
            <a
              href="/thiranex-internship-cert.jpg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <i className="bi bi-award text-blue-500"></i>
              View Certificate
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

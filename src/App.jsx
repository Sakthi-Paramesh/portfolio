import { motion } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Main content */}
      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          
          {/* Education Section */}
          <section className="pb-6 pt-0">
            <div className="container mx-auto px-6 max-w-4xl">

              {/* Section Heading */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Education</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5"
              >
                {/* College */}
                <div style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '16px' }}>
                  <h4 className="font-bold text-gray-800 text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>Shree Venkateshwara Hi-Tech Engineering College</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    B.E. Computer Science Engineering &nbsp;•&nbsp; <span className="text-blue-600 font-bold">CGPA: 9.0</span>
                  </p>
                </div>

                {/* School */}
                <div style={{ borderLeft: '3px solid #6366f1', paddingLeft: '16px' }}>
                  <h4 className="font-bold text-gray-800 text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>Jawahar Higher Secondary School (CBSE)</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>HSC / SSLC</p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;

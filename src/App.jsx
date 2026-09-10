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
          <section className="py-12 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-gray-50/50 p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                {/* Left: Image */}
                <div className="flex-shrink-0">
                  <img 
                    src="/education_boy.png" 
                    alt="Education" 
                    className="h-40 md:h-48 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Right: Education Details */}
                <div className="flex flex-col gap-5 w-full">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-wide font-display border-b border-gray-200 pb-3">Education</h3>
                  
                  <div className="flex flex-col gap-4">
                    {/* College */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <i className="bi bi-bank"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-[1rem]">Shree Venkateshwara Hi-Tech Engineering College</h4>
                        <p className="text-sm text-gray-500 font-medium mt-1">B.E. Computer Science Engineering • <span className="text-blue-600 font-bold">CGPA: 9.0</span></p>
                      </div>
                    </div>

                    {/* School */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <i className="bi bi-book"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-[1rem]">Jawahar Higher Secondary School (CBSE)</h4>
                        <p className="text-sm text-gray-500 font-medium mt-1">HSC / SSLC</p>
                      </div>
                    </div>
                  </div>
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

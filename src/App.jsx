import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor/Cursor';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Custom cursor (desktop only) */}
      <Cursor />

      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content — fade in after load */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />

              <Certifications />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

import { motion } from 'framer-motion';
import { PERSONAL } from '../../utils/data';

export default function Footer() {
  const email = "sakthiparameshbala@gmail.com";
  const mobile = "6374436927";
  const address = (
    <>
      155/East Street ,<br />
      Mudhanai , Vridhachalam,<br />
      Cuddalore  , 607 804 .
    </>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <footer className="relative py-6 border-t border-gray-200 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="w-full px-8 md:px-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0 w-full"
        >
          
          {/* Left Side: Address */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left flex-1 md:mt-0 mt-4">
            <h4 className="font-bold text-gray-900 mb-2 text-lg tracking-wide">Location</h4>
            <div className="flex items-start justify-center md:justify-start gap-3 text-gray-600 group">
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <i className="bi bi-geo-alt-fill text-[0.95rem]"></i>
              </div>
              <span className="text-sm leading-relaxed max-w-[220px] mt-1 font-semibold">
                {address}
              </span>
            </div>
          </motion.div>

          {/* Center: Motivational Quote */}
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center flex-1 px-4 my-4 md:my-0">
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", lineHeight: "0.6", color: '#ef4444', opacity: 0.25, display: 'block', textAlign: 'center' }}>&ldquo;</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", lineHeight: "1.6", fontStyle: "italic", fontWeight: 700, color: '#1f2937', display: 'block', letterSpacing: '0.01em', textAlign: 'center' }}>
              Dream big, work hard,<br/>stay focused.
            </span>
            <span style={{ display: 'block', width: '48px', height: '3px', background: 'linear-gradient(90deg, #ef4444, #f97316)', borderRadius: '99px', margin: '10px auto 0' }} />
          </motion.div>

          {/* Right Side: Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4 flex-1 mt-4 md:mt-0">
            <h4 className="font-bold text-gray-900 text-lg tracking-wide w-full text-center md:text-right">Contact :</h4>
            <motion.h3 variants={itemVariants} className="font-bold text-gray-900 text-xl tracking-wide">
              Sakthi Paramesh B
            </motion.h3>
            <div className="flex flex-col items-center md:items-end gap-2">
              <motion.a variants={itemVariants} href={`mailto:${email}`} className="flex items-center justify-center md:justify-end gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span className="text-sm font-semibold tracking-wide order-2 md:order-1">{email}</span>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors order-1 md:order-2">
                  <i className="bi bi-envelope-fill text-[0.95rem]"></i>
                </div>
              </motion.a>
              <motion.a variants={itemVariants} href={`tel:${mobile}`} className="flex items-center justify-center md:justify-end gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span className="text-sm font-semibold tracking-wide order-2 md:order-1">+91 {mobile}</span>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors order-1 md:order-2">
                  <i className="bi bi-telephone-fill text-[0.95rem]"></i>
                </div>
              </motion.a>
            </div>
          </div>

        </motion.div>

        {/* Full-width Social Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 pt-5 border-t border-gray-100 flex flex-row flex-wrap justify-center gap-3 w-full"
        >
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 transform"
            style={{ background: '#EFF6FF', color: '#0077b5', border: '1px solid #bfdbfe' }}
            onMouseEnter={e => { e.currentTarget.style.background='#0077b5'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#EFF6FF'; e.currentTarget.style.color='#0077b5'; }}
          >
            <i className="bi bi-linkedin text-base"></i> LinkedIn
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 transform"
            style={{ background: '#f6f8fa', color: '#24292e', border: '1px solid #d0d7de' }}
            onMouseEnter={e => { e.currentTarget.style.background='#24292e'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#f6f8fa'; e.currentTarget.style.color='#24292e'; }}
          >
            <i className="bi bi-github text-base"></i> GitHub
          </a>
          <a
            href={`https://wa.me/91${mobile}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 transform"
            style={{ background: '#f0fdf4', color: '#25D366', border: '1px solid #bbf7d0' }}
            onMouseEnter={e => { e.currentTarget.style.background='#25D366'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#f0fdf4'; e.currentTarget.style.color='#25D366'; }}
          >
            <i className="bi bi-whatsapp text-base"></i> WhatsApp
          </a>
          <a
            href={PERSONAL.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5 transform"
            style={{ background: '#fdf2f8', color: '#E1306C', border: '1px solid #fbcfe8' }}
            onMouseEnter={e => { e.currentTarget.style.background='#E1306C'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#fdf2f8'; e.currentTarget.style.color='#E1306C'; }}
          >
            <i className="bi bi-instagram text-base"></i> Instagram
          </a>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 pt-4 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-500 tracking-wide font-semibold">
            © {new Date().getFullYear()} Sakthi Paramesh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

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
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4"
        >
          
          {/* Left Side: Address */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:mt-0 mt-4">
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
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center flex-1 px-4 my-4 md:my-0 md:mt-6">
            <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.75rem", lineHeight: "1.3" }} className="text-red-500 drop-shadow-sm font-semibold">
              "Dream big, work hard,<br/>stay focused."
            </span>
          </motion.div>

          {/* Right Side: Info & Links */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4 flex-1 mt-4 md:mt-0">
            <motion.h3 variants={itemVariants} className="font-bold text-gray-900 text-xl tracking-wide flex flex-col md:flex-row items-center md:gap-2">
              Sakthi Paramesh B
            </motion.h3>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              {/* Email */}
              <motion.a variants={itemVariants} href={`mailto:${email}`} className="flex items-center justify-center md:justify-end gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span className="text-base font-semibold tracking-wide order-2 md:order-1">{email}</span>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors order-1 md:order-2">
                  <i className="bi bi-envelope-fill text-[0.95rem]"></i>
                </div>
              </motion.a>

              {/* Mobile */}
              <motion.a variants={itemVariants} href={`tel:${mobile}`} className="flex items-center justify-center md:justify-end gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <span className="text-base font-semibold tracking-wide order-2 md:order-1">+91 {mobile}</span>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors order-1 md:order-2">
                  <i className="bi bi-telephone-fill text-[0.95rem]"></i>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-end gap-3 mt-1">
              <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                <i className="bi bi-linkedin text-base"></i>
              </a>
              <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#24292e] hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                <i className="bi bi-github text-base"></i>
              </a>
            </motion.div>
          </div>

        </motion.div>

        {/* Bottom Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 pt-4 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-500 tracking-wide font-semibold">
            © {new Date().getFullYear()} Sakthi Paramesh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

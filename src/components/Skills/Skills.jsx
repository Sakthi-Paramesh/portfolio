import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaDocker, FaAws, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiSpringboot, SiDjango, SiMysql, SiPostman, SiKubernetes, SiGraphql, SiNextdotjs, SiTypescript, SiRedis, SiExpress, SiMongodb } from 'react-icons/si';
import { VscVscode, VscTerminal, VscDatabase } from 'react-icons/vsc';
import { DiIntellij } from 'react-icons/di';
import { useInView } from '../../hooks/usePortfolio';
import { SKILLS } from '../../utils/data';
import { TbApi } from 'react-icons/tb';

// Map skill keys to React Icon components
const TECH_ICONS = {
  java: FaJava,
  python: FaPython,
  javascript: SiJavascript,
  react: FaReact,
  html5: FaHtml5,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  bootstrap: FaBootstrap,
  springboot: SiSpringboot,
  django: SiDjango,
  rest: TbApi,
  mysql: SiMysql,
  database_design: VscDatabase,
  git: FaGitAlt,
  vscode: VscVscode,
  intellij: DiIntellij,
  postman: SiPostman,
  docker: FaDocker,
  aws: FaAws,
  kubernetes: SiKubernetes,
  graphql: SiGraphql,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  redis: SiRedis,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
};

function SkillCard({ skill }) {
  const IconComponent = TECH_ICONS[skill.iconKey] || VscTerminal;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center justify-center text-center gap-3 cursor-pointer"
    >
      <IconComponent style={{ color: skill.color || '#3b82f6', fontSize: '3.5rem' }} className="drop-shadow-lg" />
      <h3 className="text-[0.95rem] font-bold text-white transition-colors font-display tracking-wide mt-2">
        {skill.name}
      </h3>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  
  // Flatten all skills into a single array like the reference image
  const allSkills = SKILLS.flatMap(cat => cat.skills);

  return (
    <section id="skills" className="section relative overflow-hidden py-24">
      <div className="container relative z-10">
        
        {/* Simple Flat Header matching the reference */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide">
            Technologies Known
          </h2>
        </div>

        {/* 5-Column Clean Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-8 max-w-5xl mx-auto"
        >
          {allSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

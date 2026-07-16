// ===== PORTFOLIO DATA =====

export const PERSONAL = {
  name: 'Sakthi Paramesh B',
  title: 'AI & Full Stack Developer',
  email: 'sakthiparameshbala@gmail.com',
  github: 'https://github.com/Sakthi-Paramesh',
  linkedin: 'https://www.linkedin.com/in/sakthi-paramesh-b-93643834a',
  instagram: 'https://instagram.com/itz.sxkthi',
  location: 'Cuddalore, Tamil Nadu',
  resumeUrl: '/Sakthi_Paramesh_B_Resume.pdf',
  college: 'Shree Venkateshwara Hi-Tech Engineering College',
  degree: 'B.E. Computer Science Engineering',
  graduationYear: '2027',
};

export const TYPING_ROLES = [
  'Full Stack Developer',
  'AI Enthusiast',
  'Java Developer',
  'Spring Boot Expert',
  'UI Designer',
  'Creative Problem Solver',
];

export const SKILLS = [
  {
    category: 'Programming',
    icon: '💻',
    skills: [
      { name: 'Java', percent: 90 },
      { name: 'Python', percent: 80 },
      { name: 'JavaScript', percent: 75 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', percent: 95 },
      { name: 'CSS3', percent: 90 },
      { name: 'Bootstrap', percent: 85 },
      { name: 'React', percent: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Spring Boot', percent: 85 },
      { name: 'Django', percent: 70 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', percent: 85 },
    ],
  },
  {
    category: 'Tools',
    icon: '🔧',
    skills: [
      { name: 'Git & GitHub', percent: 90 },
      { name: 'VS Code', percent: 95 },
      { name: 'IntelliJ IDEA', percent: 88 },
      { name: 'Postman', percent: 80 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'HumanEase AI',
    description:
      'An intelligent AI-powered healthcare platform that streamlines patient management, provides AI-driven diagnostics, and enables seamless doctor-patient communication through advanced NLP.',
    tech: ['React', 'Spring Boot', 'Python', 'TensorFlow', 'MySQL'],
    image: '/clinico-project.png',
    github: '#',
    live: '#',
    color: '#00CFFF',
  },
  {
    id: 2,
    title: 'Crop Prediction Dashboard',
    description:
      'An advanced agriculture dashboard that leverages machine learning to predict optimal crops based on soil metrics, weather data, and environmental factors.',
    tech: ['Python', 'Machine Learning', 'React', 'Tailwind CSS', 'API'],
    image: '/crop-prediction.png',
    github: '#',
    live: '#',
    color: '#34D399',
  },
  {
    id: 3,
    title: 'CitySense Weather & Tourism',
    description:
      'A comprehensive web application providing real-time weather forecasts and detailed tourist information, featuring interactive maps and dynamic location-based search.',
    tech: ['React', 'OpenWeather API', 'Tailwind CSS', 'Vite', 'JavaScript'],
    image: '/citysense-project.png',
    github: '#',
    live: 'https://tourist-app-green.vercel.app/',
    color: '#00CFFF',
  },

  {
    id: 5,
    title: 'ShopHub E-Commerce',
    description:
      'A feature-rich, high-performance e-commerce platform offering real-time inventory management, secure checkout, dark mode, and an intuitive user interface for a seamless shopping experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/shophub-ecommerce.jpg',
    github: '#',
    live: '#',
    color: '#3B82F6',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Java Development Intern',
    company: 'Tech Mahindra / Industry Partner',
    period: 'May 2025 – Jul 2025',
    type: 'Summer Internship',
    description:
      'Developed robust Java applications using Spring Boot framework. Worked on RESTful API design, database integration with MySQL, and microservices architecture. Collaborated with senior developers on production-level code.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Git'],
    icon: '☕',
  },
  {
    id: 2,
    role: 'AI Project Development Intern',
    company: 'Academic Research Lab',
    period: 'Dec 2024 – Feb 2025',
    type: 'Project Internship',
    description:
      'Built and deployed machine learning models for healthcare data analysis. Implemented NLP pipelines for text classification, integrated AI APIs, and developed the HumanEase AI platform from concept to deployment.',
    tech: ['Python', 'TensorFlow', 'Django', 'NLP', 'React'],
    icon: '🤖',
  },
  {
    id: 3,
    role: 'Full Stack Developer Trainee',
    company: 'College Innovation Hub',
    period: 'Aug 2024 – Nov 2024',
    type: 'Training Program',
    description:
      'Completed intensive full-stack training covering React frontend development, Spring Boot backend, database design, API integration, and deployment practices on cloud platforms.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Bootstrap', 'Git'],
    icon: '🚀',
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Programming in Java',
    issuer: 'NPTEL — IIT',
    badge: 'Elite + Gold',
    year: '2025',
    color: '#FFD700',
    icon: '☕',
    image: '/nptel-cert.png',
    description: 'Scored in top 5% nationally. Covered OOP, data structures, algorithms, and advanced Java concepts.',
  },
  {
    id: 2,
    title: 'EDII-TN Hackathon Ideation Camp',
    issuer: 'EDII-TN, Govt. of Tamil Nadu',
    badge: 'Participant',
    year: '2026',
    color: '#FF6B35',
    icon: '💡',
    image: '/edii-tn-cert.jpg',
    description: 'Actively participated in the "Nimirndhu Nil" Hackathon Ideation Camp organized by EDII-TN under TNYIEDP.',
  },
  {
    id: 3,
    title: 'SCT-HackFest 2026',
    issuer: 'Selvam College of Technology',
    badge: 'Participant',
    year: '2026',
    color: '#00CFFF',
    icon: '💻',
    image: '/selvam-cert.png',
    description: 'Successfully participated in the National Level SCT-HackFest 2026 Hackathon organized by Selvam College of Technology.',
  },
  {
    id: 4,
    title: 'Code4EdTech Hack-A-Thon \'25',
    issuer: 'Innomatics Research Labs',
    badge: 'Participant',
    year: '2025',
    color: '#FF4B4B',
    icon: '🚀',
    image: '/innomatics-cert.jpg',
    description: 'Successfully participated in the 24 hours Code4EdTech Hack-A-Thon \'25 Challenge (Topic: Resume Analysis).',
  },
  {
    id: 5,
    title: 'CRYOSAT \'25 Paper Presentation',
    issuer: 'Nandha College of Technology',
    badge: 'Participant',
    year: '2025',
    color: '#34D399',
    icon: '📄',
    image: '/nandha-cert.jpg',
    description: 'Participated in Paper Presentation (Topic: Drug Addiction) at the 15th National Level Technical Symposium.',
  },
  {
    id: 6,
    title: 'INNOVATE 2K25 Project Competition',
    issuer: 'Velammal Institute of Technology',
    badge: 'Participant',
    year: '2025',
    color: '#FF6B35',
    icon: '💡',
    image: '/velammal-cert.jpg',
    description: 'Participated in Paper Presentation (Theme: Agriculture) at the National Level Project Competition 2K25.',
  },
  {
    id: 7,
    title: 'Inspire \'26 Ideathon',
    issuer: 'Excel Engineering College',
    badge: 'Participant',
    year: '2026',
    color: '#F59E0B',
    icon: '🧠',
    image: '/excel-cert.jpg',
    description: 'Participated in Ideathon (Theme: Impact of AI) at the National Level Student Confluence.',
  },
];

export const STATS = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Certifications', value: 6, suffix: '' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'Problems Solved', value: 100, suffix: '+' },
  { label: 'Months Experience', value: 8, suffix: '+' },
];

export const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

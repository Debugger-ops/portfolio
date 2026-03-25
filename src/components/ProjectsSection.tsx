import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import projectFinflow from '../assets/project-finflow.png';
import projectGoldenbites from '../assets/project-goldenbites.png';
import projectJobbuddy from '../assets/project-jobbuddy.png';
import './ProjectsSection.css';

const projects = [
  {
    title: 'Finflow — Financial Management Platform',
    description: 'Full-stack application using Next.js 14 and TypeScript. Secure authentication with NextAuth.js and bcrypt, real-time features via WebSockets, Redux Toolkit state management, MongoDB backend with Zod-validated REST APIs.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'WebSocket', 'Redux', 'NextAuth'],
    link: 'https://finflow-virid.vercel.app/',
    image: projectFinflow,
  },
  {
    title: 'GoldenBites — Food Delivery App',
    description: 'Full-stack food ordering platform with modular component architecture. Custom authentication APIs with bcrypt hashing, dynamic menu management (add/edit/delete), responsive UI with optimized performance.',
    tech: ['Next.js', 'Node.js', 'REST API', 'bcrypt', 'CSS'],
    link: 'https://food-delivery-app-woad-gamma.vercel.app/',
    image: projectGoldenbites,
  },
  {
    title: 'JobBuddy — Smart Job Search Companion',
    description: 'Full-stack job tracker with React 18, TypeScript, and Supabase for auth, storage, and database. Chrome Extension to auto-capture jobs from LinkedIn, Naukri, Internshala. Dashboard with analytics and job management.',
    tech: ['React 18', 'TypeScript', 'Supabase', 'Chrome Extension', 'React Query'],
    link: 'https://job-buddy-tawny.vercel.app/',
    image: projectJobbuddy,
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">{'// projects'}</span>
        <h2 className="section-title">Featured Projects</h2>
      </motion.div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={800}
                height={512}
                className="project-image"
              />
              <div className="project-image-overlay" />
            </div>
            <div className="project-card-body">
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={t}>{t}{idx < project.tech.length - 1 ? ' ·' : ''}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import projectFinflow from '../assets/project-finflow.png';
import projectGoldenbites from '../assets/project-goldenbites.png';
import projectJobbuddy from '../assets/project-jobbuddy.png';
import projectAriachatbot from '../assets/project-Ariachatbot.png';
import projectNotegenie from '../assets/project-Notegenie.png';
import projectDisasterManagement from '../assets/project-DisasterManagement.png';
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
  title: 'Aria — AI Companion Chatbot',
  description: 'Gemini-powered AI companion shipping in three forms from one codebase: a Next.js 16 web app with streaming chat, voice input and TTS; a VS Code extension for explain/fix/refactor on selected code; and a one-line embeddable widget. Real-time admin dashboard driven by Redis pub/sub and SSE, with Kafka as a durable event log for analytics.',
  tech: ['Next.js 16', 'React 19', 'TypeScript', 'Gemini API', 'MongoDB', 'Redis', 'Kafka', 'Tailwind CSS'],
  link: 'https://aria-eosin-two.vercel.app/',
  image:  projectAriachatbot,
},
  {
  title: 'NoteGenie — AI Study Notes Generator',
  description: 'Next.js 16 app that turns PDFs and PPTX slides into AI-generated summaries, exam notes, MCQ quizzes, and deep concept analysis. Multi-provider AI engine (Groq, Gemini, Ollama) with automatic rate-limit retry, NextAuth v5 auth, and a MongoDB-backed dashboard.',
  tech: ['Next.js 16', 'TypeScript', 'MongoDB', 'NextAuth v5', 'Groq / Gemini / Ollama'],
  link: 'https://notesgenie-ochre.vercel.app/',
  image: projectNotegenie,
},
{
  title: 'Disaster Management System',
  description: 'Full-stack disaster management platform for real-time emergency reporting, resource coordination, and incident tracking. Enables users and authorities to report disasters, manage rescue operations, track affected areas, and coordinate emergency resources through a centralized dashboard.',
  tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API'],
  link: 'https://your-disaster-management-project.vercel.app/',
  image: projectDisasterManagement,
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

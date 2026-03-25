import { Code, Server, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

const skillCategories = [
  {
    icon: <Code size={20} />,
    title: 'Frontend & Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'React Native', 'Redux', 'React Router'],
  },
  {
    icon: <Server size={20} />,
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'JWT', 'OAuth', 'MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'REST APIs'],
  },
  {
    icon: <Wrench size={20} />,
    title: 'Tools & Other',
    skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Kafka', 'Zookeeper', 'RabbitMQ', 'WebSocket', 'Docker'],
  },
];

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">{'// skills'}</span>
        <h2 className="section-title">Tech Stack</h2>
      </motion.div>
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <motion.div
            className="skill-card"
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="skill-card-icon">{cat.icon}</div>
            <h3 className="skill-card-title">{cat.title}</h3>
            <div className="skill-tags">
              {cat.skills.map((s) => (
                <span className="skill-tag" key={s}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

import { motion } from 'framer-motion';
import './ExperienceSection.css';

const bullets = [
  'Implemented Interprocess Communication (IPC) mechanisms for efficient data exchange between processes.',
  'Designed and developed a Kafka-based messaging system for real-time data streaming.',
  'Ensured reliable, scalable, and asynchronous communication between distributed applications.',
  'Worked with Kafka topics, producers, and consumers to build fault-tolerant data pipelines.',
  'Gained experience in message serialization, event-driven architecture, and distributed system design.',
];

const ExperienceSection = () => {
  return (
    <section className="experience" id="experience">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">{'// experience'}</span>
        <h2 className="section-title">Work Experience</h2>
      </motion.div>
      <motion.div
        className="experience-card"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="experience-header">
          <div>
            <h3 className="experience-role">Summer Internship</h3>
            <p className="experience-org">Defence Research and Development Organization (ISSA)</p>
          </div>
          <div className="experience-meta">
            <p>June 2025 — August 2025</p>
            <p>New Delhi, India</p>
          </div>
        </div>
        <ul className="experience-bullets">
          {bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              {b}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;

import { motion } from 'framer-motion';
import './EducationSection.css';

const EducationSection = () => {
  return (
    <section className="education" id="education">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">{'// education'}</span>
        <h2 className="section-title">Education</h2>
      </motion.div>
      <motion.div
        className="education-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="education-info">
          <h3>B.Tech — Electronics & Communication Engineering</h3>
          <p className="edu-school">Maharaja Surajmal Institute of Technology</p>
          <p>New Delhi, India · 2023 — 2027</p>
        </div>
        <div className="education-stats">
          <motion.div
            className="education-stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="education-stat-value">8.05</div>
            <div className="education-stat-label">CGPA</div>
          </motion.div>
          <motion.div
            className="education-stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <div className="education-stat-value">2027</div>
            <div className="education-stat-label">Expected</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;

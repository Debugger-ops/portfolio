import { Github, Linkedin, Code2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import ParticleBackground from './ParticleBackground';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-bg-image" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero-bg-overlay" />
      <div className="hero-glow" />
      <ParticleBackground />
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {'> hello_world'}
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Vivek <span>Pant</span>
        </motion.h1>
        <motion.p
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Full-Stack Engineer & System Designer
        </motion.p>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          B.Tech student in Electronics & Communication Engineering at MSIT, New Delhi.
          Passionate about building scalable distributed systems, real-time applications,
          and elegant user experiences.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a href="#contact" className="hero-btn-primary">Get In Touch</a>
          <a href="#projects" className="hero-btn-secondary">View Projects</a>
        </motion.div>
        <motion.div
          className="hero-social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <Code2 size={22} />
          </a>
          <a href="mailto:vivek9to5@gmail.com" aria-label="Email">
            <Mail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useRef, useState, useCallback } from 'react';
import {
  Code2,
  Server,
  Database,
  Container,
  Cloud,
  GitBranch,
  Radio,
  Cpu,
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './SkillsSection.css';

type Skill = { name: string; level: number };

type Category = {
  icon: JSX.Element;
  title: string;
  blurb: string;
  accent: string;
  skills: Skill[];
};

const skillCategories: Category[] = [
  {
    icon: <Code2 size={20} />,
    title: 'Frontend & Languages',
    blurb: 'Interfaces, type safety and the languages under them',
    accent: '187 100% 45%',
    skills: [
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 94 },
      { name: 'React.js', level: 93 },
      { name: 'Next.js', level: 86 },
      { name: 'React Native', level: 78 },
      { name: 'Redux / Zustand', level: 84 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 82 },
      { name: 'Three.js', level: 70 },
      { name: 'C / C++', level: 80 },
      { name: 'Java', level: 76 },
      { name: 'Python', level: 84 },
      { name: 'Go', level: 68 },
    ],
  },
  {
    icon: <Server size={20} />,
    title: 'Backend & APIs',
    blurb: 'Services, auth and the contracts between them',
    accent: '265 90% 65%',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'NestJS', level: 74 },
      { name: 'FastAPI', level: 72 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 74 },
      { name: 'gRPC', level: 70 },
      { name: 'WebSocket', level: 85 },
      { name: 'JWT / OAuth 2.0', level: 88 },
      { name: 'Nginx', level: 72 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    icon: <Database size={20} />,
    title: 'Databases & Caching',
    blurb: 'Where the state lives, and how fast it comes back',
    accent: '160 84% 45%',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 87 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 86 },
      { name: 'Redis Streams', level: 74 },
      { name: 'Redis Pub/Sub', level: 78 },
      { name: 'Elasticsearch', level: 68 },
      { name: 'Prisma / Drizzle', level: 80 },
      { name: 'Supabase', level: 84 },
      { name: 'Query Optimization', level: 76 },
      { name: 'Sharding & Replication', level: 70 },
    ],
  },
  {
    icon: <Radio size={20} />,
    title: 'Streaming & Messaging',
    blurb: 'Event-driven pipelines that stay up under load',
    accent: '25 95% 58%',
    skills: [
      { name: 'Apache Kafka', level: 84 },
      { name: 'Kafka Connect', level: 70 },
      { name: 'Kafka Streams', level: 68 },
      { name: 'Zookeeper', level: 74 },
      { name: 'RabbitMQ', level: 80 },
      { name: 'BullMQ', level: 78 },
      { name: 'Event Sourcing', level: 72 },
      { name: 'CQRS', level: 68 },
      { name: 'Pub/Sub Patterns', level: 82 },
      { name: 'Dead Letter Queues', level: 74 },
    ],
  },
  {
    icon: <Container size={20} />,
    title: 'DevOps & Orchestration',
    blurb: 'Shipping it, scaling it, and keeping it reproducible',
    accent: '210 95% 60%',
    skills: [
      { name: 'Docker', level: 88 },
      { name: 'Docker Compose', level: 86 },
      { name: 'Kubernetes', level: 78 },
      { name: 'Helm', level: 66 },
      { name: 'kubectl / K9s', level: 74 },
      { name: 'HPA & Autoscaling', level: 68 },
      { name: 'Ingress / Service Mesh', level: 64 },
      { name: 'GitHub Actions', level: 84 },
      { name: 'CI/CD Pipelines', level: 82 },
      { name: 'Terraform', level: 64 },
      { name: 'Linux / Bash', level: 82 },
    ],
  },
  {
    icon: <Cloud size={20} />,
    title: 'Cloud & Observability',
    blurb: 'Infra, metrics and knowing what broke before users do',
    accent: '330 85% 62%',
    skills: [
      { name: 'AWS EC2 / S3', level: 78 },
      { name: 'AWS Lambda', level: 70 },
      { name: 'Vercel', level: 90 },
      { name: 'Netlify', level: 86 },
      { name: 'Cloudflare', level: 72 },
      { name: 'Prometheus', level: 68 },
      { name: 'Grafana', level: 70 },
      { name: 'OpenTelemetry', level: 62 },
      { name: 'Sentry', level: 76 },
      { name: 'Load Testing (k6)', level: 66 },
    ],
  },
  {
    icon: <GitBranch size={20} />,
    title: 'Tooling & Workflow',
    blurb: 'The day-to-day that keeps a codebase honest',
    accent: '187 100% 45%',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Vite', level: 88 },
      { name: 'Webpack', level: 72 },
      { name: 'Vitest / Jest', level: 80 },
      { name: 'Playwright', level: 76 },
      { name: 'ESLint / Prettier', level: 88 },
      { name: 'Postman / Insomnia', level: 86 },
      { name: 'Figma', level: 74 },
    ],
  },
  {
    icon: <Cpu size={20} />,
    title: 'CS Fundamentals',
    blurb: 'The parts that do not change with the framework',
    accent: '265 90% 65%',
    skills: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 88 },
      { name: 'System Design', level: 84 },
      { name: 'Distributed Systems', level: 78 },
      { name: 'Operating Systems', level: 76 },
      { name: 'Computer Networks', level: 78 },
      { name: 'DBMS', level: 82 },
      { name: 'Design Patterns', level: 80 },
    ],
  },
];

const marqueeItems = [
  'Redis', 'Kafka', 'Docker', 'Kubernetes', 'PostgreSQL', 'Node.js',
  'React', 'TypeScript', 'RabbitMQ', 'gRPC', 'Terraform', 'Prometheus',
  'Grafana', 'MongoDB', 'AWS', 'Nginx', 'GraphQL', 'Elasticsearch',
];

const TiltCard = ({ cat, index }: { cat: Category; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const sx = useSpring(mx, { stiffness: 180, damping: 20 });
  const sy = useSpring(my, { stiffness: 180, damping: 20 });

  const rotateY = useTransform(sx, [0, 1], [-11, 11]);
  const rotateX = useTransform(sy, [0, 1], [9, -9]);
  const glareX = useTransform(sx, [0, 1], [0, 100]);
  const glareY = useTransform(sy, [0, 1], [0, 100]);
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]: number[]) =>
      `radial-gradient(520px circle at ${x}% ${y}%, hsl(${cat.accent} / 0.16), transparent 55%)`
  );

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my]
  );

  const handleLeave = useCallback(() => {
    setHovered(false);
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <motion.div
      className="skill-card-scene"
      initial={{ opacity: 0, y: 60, rotateX: -12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ '--accent': cat.accent } as React.CSSProperties}
    >
      <motion.div
        ref={ref}
        className="skill-card"
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <div className="skill-card-border" />
        <motion.div
          className="skill-card-glare"
          style={{ background: glare, opacity: hovered ? 1 : 0 }}
        />

        <div className="skill-card-inner">
          <div className="skill-card-head">
            <div className="skill-card-icon">
              {cat.icon}
              <span className="icon-ring" />
            </div>
            <span className="skill-card-count">
              {String(cat.skills.length).padStart(2, '0')}
            </span>
          </div>

          <h3 className="skill-card-title">{cat.title}</h3>
          <p className="skill-card-blurb">{cat.blurb}</p>

          <div className="skill-tags">
            {cat.skills.map((s, i) => (
              <motion.span
                className="skill-tag"
                key={s.name}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.03 }}
                whileHover={{ y: -3, scale: 1.06 }}
              >
                <span className="skill-tag-label">{s.name}</span>
                <span className="skill-tag-meter">
                  <motion.span
                    className="skill-tag-meter-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.03, ease: 'easeOut' }}
                  />
                </span>
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-ambient" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="grid-plane" />
      </div>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">{'// skills'}</span>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-sub">
          Full-stack product work backed by distributed systems — streaming, caching,
          containers and orchestration.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <TiltCard cat={cat} index={i} key={cat.title} />
        ))}
      </div>

      <div className="skills-marquee" aria-hidden="true">
        <div className="skills-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-chip" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

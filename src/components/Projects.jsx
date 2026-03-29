import { motion } from 'framer-motion';
import { FaFolderOpen, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Tenant SaaS Billing Platform",
      description: "Built multi-tenant SaaS billing platform with tenant isolation, JWT authentication, usage-based rate limiting, and automated invoice generation. Deployed full-stack solution with React.js (Vite-based) dashboard on Vercel featuring real-time usage tracking and role-based access control.",
      tech: ["Node.js", "React.js", "Express", "MongoDB", "JWT"],
      link: "https://billing-dashboard-n4j6.vercel.app/",
      icon: <FaExternalLinkAlt />
    },
    {
      title: "RankForge Engine",
      description: "Built high-performance leaderboard API using Redis sorted sets achieving O(log N) complexity and sub-10ms response time for 1M+ players (vs 500ms with MongoDB alone).",
      tech: ["Node.js", "Redis", "MongoDB", "Docker", "TypeScript"],
      link: "https://github.com/munawwar-ali/realtime-leaderboard-api",
      icon: <FaGithub />
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span>04.</span> Featured Projects
        </motion.h2>
        
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="project-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="project-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <div className="folder-icon" style={{ fontSize: '2.5rem', color: 'var(--accent-primary)' }}>
                    <FaFolderOpen />
                  </div>
                  <div className="project-links">
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ color: 'var(--accent-primary)', scale: 1.1 }}
                      style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginLeft: '1rem', display: 'inline-block' }}
                    >
                      {project.icon}
                    </motion.a>
                  </div>
                </div>
                <motion.h3 
                  className="project-title"
                  whileHover={{ color: 'var(--accent-primary)' }}
                  style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', cursor: 'pointer' }}
                >
                  <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
                </motion.h3>
                <div className="project-description" style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem' }}>
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

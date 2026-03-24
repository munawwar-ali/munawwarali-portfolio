import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "FRX Labs Private Limited",
      duration: "Dec 2024 - Present",
      highlights: [
        "Built and maintained full-stack production applications using Node.js, Express, MongoDB, and React.",
        "Performance: Reduced API response times from 500ms to sub-10ms (98% improvement) through Redis caching.",
        "Independently handled end-to-end feature cycles—API design, business logic, Jest unit testing, Zod validation, and production bug resolution across multiple client projects.",
        "Architected multi-tenant SaaS backend with JWT authentication, role-based access control, usage-based rate limiting, and complete tenant data isolation."
      ]
    },
    {
      role: "Backend Developer (Contract)",
      company: "PathWise API | Private Project",
      duration: "Dec 2025 - Present",
      highlights: [
        "Personally invited by a senior backend engineer to contribute to a private Node.js REST API project as an independent contract developer.",
        "Implemented Zod-based schema validation for Assessment, Submission and Learning Path APIs.",
        "Wrote comprehensive Jest unit tests for authentication and utility helpers."
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span>03.</span> Professional Experience
        </motion.h2>
        
        <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '20px', width: '2px', background: 'var(--glass-border)' }}></div>
          
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              style={{ position: 'relative', paddingLeft: '60px', marginBottom: idx !== experiences.length - 1 ? '3rem' : '0' }}
            >
              <div className="timeline-dot" style={{
                position: 'absolute', left: '11px', top: '5px', width: '20px', height: '20px',
                borderRadius: '50%', background: 'var(--bg-main)', border: '2px solid var(--accent-primary)',
                zIndex: 2, transition: 'background 0.3s, box-shadow 0.3s'
              }}></div>
              <div 
                className="timeline-content glass-card"
                onMouseEnter={(e) => {
                  const dot = e.currentTarget.previousSibling;
                  dot.style.background = 'var(--accent-primary)';
                  dot.style.boxShadow = '0 0 10px var(--accent-glow)';
                }}
                onMouseLeave={(e) => {
                  const dot = e.currentTarget.previousSibling;
                  dot.style.background = 'var(--bg-main)';
                  dot.style.boxShadow = 'none';
                }}
              >
                <div className="timeline-header" style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.3rem' }}>{exp.role}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="company" style={{ color: 'var(--accent-primary)', fontWeight: 500, fontSize: '1.1rem' }}>{exp.company}</span>
                    <span className="duration" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontFamily: 'var(--font-code)' }}>{exp.duration}</span>
                  </div>
                </div>
                <ul className="job-highlights" style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span>
                      {highlight.includes('Performance:') ? (
                        <p><strong>Performance:</strong> {highlight.replace('Performance:', '')}</p>
                      ) : (
                        <p>{highlight}</p>
                      )}
                    </li>
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

export default Experience;

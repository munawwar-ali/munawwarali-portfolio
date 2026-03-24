import { motion } from 'framer-motion';
import { FaCode, FaServer, FaReact, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      icon: <FaCode />,
      tags: ["JavaScript", "TypeScript", "Python"]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      tags: ["Node.js", "Express.js", "REST APIs", "Microservices", "JWT Auth", "Zod", "Jest"]
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      tags: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase />,
      tags: ["MongoDB", "Redis", "Mongoose", "Git & GitHub", "Docker", "AWS", "Postman"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span>02.</span> Technical Skills
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}
        >
          {skillsData.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category glass-card"
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.4)', transition: {duration: 0.2} }}
              style={{ padding: '2.5rem 2rem', textAlign: 'center' }}
            >
              <div className="category-icon" style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                {category.icon}
              </div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{category.title}</h3>
              <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                {category.tags.map(tag => (
                  <span key={tag} className="tag" style={{
                    background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)',
                    border: '1px solid rgba(99, 102, 241, 0.2)', padding: '0.5rem 1rem',
                    borderRadius: '30px', fontSize: '0.85rem', fontWeight: 500
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

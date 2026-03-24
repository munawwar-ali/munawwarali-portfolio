import { motion } from 'framer-motion';
import { FaCode, FaServer, FaReact, FaDatabase, FaCss3Alt, FaHtml5, FaNodeJs, FaNetworkWired, FaLink, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiExpress, SiJsonwebtokens, SiZod, SiJest, SiNextdotjs, SiTailwindcss, SiMongodb, SiRedis, SiMongoose, SiPostman } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      icon: <FaCode />,
      items: [
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      items: [
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
        { name: "REST APIs", icon: <FaLink color="#009688" /> },
        { name: "Microservices", icon: <FaNetworkWired color="#FF9900" /> },
        { name: "JWT Auth", icon: <SiJsonwebtokens color="#D63AFF" /> },
        { name: "Zod", icon: <SiZod color="#3E67B1" /> },
        { name: "Jest", icon: <SiJest color="#C21325" /> }
      ]
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      items: [
        { name: "React.js", icon: <FaReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase />,
      items: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Redis", icon: <SiRedis color="#DC382D" /> },
        { name: "Mongoose", icon: <SiMongoose color="#880000" /> },
        { name: "Git & GitHub", icon: <FaGithub color="#FFFFFF" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> }
      ]
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
                {category.items.map(item => (
                  <span key={item.name} className="tag" style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)',
                    border: '1px solid rgba(99, 102, 241, 0.2)', padding: '0.5rem 1rem',
                    borderRadius: '30px', fontSize: '0.85rem', fontWeight: 500
                  }}>
                    <span style={{ fontSize: '1.1rem', display: 'flex' }}>{item.icon}</span>
                    {item.name}
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

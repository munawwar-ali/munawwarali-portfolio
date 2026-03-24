import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="hero section" style={{ paddingTop: 'var(--nav-height)' }}>
      <motion.div 
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '900px', margin: 0 }}
      >
        <motion.p variants={itemVariants} style={{ fontFamily: 'var(--font-code)', color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Hi, my name is
        </motion.p>
        <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '0.5rem', color: '#fff', position: 'relative', left: '-3px' }}>
          Munawwar Ali.
        </motion.h1>
        <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          I build things for the web.
        </motion.h2>
        <motion.p variants={itemVariants} style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
          A Full Stack Developer with 2+ years of experience and strong backend expertise. I specialize in building high-performance Node.js REST APIs, reducing response times, and architecting robust web applications.
        </motion.p>
        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">Check out my work</a>
          <a href="#contact" className="btn btn-outline">Get in touch</a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <a href="#about">
          <div style={{ width: '30px', height: '50px', border: '2px solid var(--text-secondary)', borderRadius: '15px', display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <motion.div 
              animate={{ y: [0, 15], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ width: '4px', height: '8px', background: 'var(--text-secondary)', borderRadius: '2px' }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

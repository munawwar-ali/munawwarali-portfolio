import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="about section">
      <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span>01.</span> About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}
        >
          <motion.div className="about-text glass-card" variants={itemVariants}>
            <p style={{marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem'}}>I am a highly motivated Full Stack Developer with 2+ years of overall experience, including production workflows at FRX Labs, where I built and maintained blockchain-based SaaS products using Node.js, Express, MongoDB, and React.</p>
            <p style={{marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem'}}>Currently pursuing my Bachelor of Computer Applications (BCA) at PRSU (2025-2028), I have a passion for creating highly performant backend architectures. My notable achievements include optimizing API response times from 500ms to sub-10ms (a 98% improvement) using Redis caching.</p>
            <p style={{marginBottom: '0', color: 'var(--text-secondary)', fontSize: '1.1rem'}}>I was also personally invited as a contract backend contributor on a private Node.js project under a senior engineer, where I delivered REST APIs with Zod validation and comprehensive Jest unit tests.</p>
          </motion.div>
          
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '550px', margin: '0 auto' }}>
              <div className="code-editor-mock" style={{ 
                padding: 0, 
                overflow: 'hidden', 
                background: '#1d1f21', 
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <div className="editor-header" style={{ 
                  background: '#282a2e', 
                  padding: '12px 18px', 
                  display: 'flex', 
                  gap: '8px' 
                }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
                </div>
                <div className="editor-body" style={{ 
                  padding: '2rem', 
                  fontFamily: "'Fira Code', 'Consolas', monospace", 
                  fontSize: '1.05rem', 
                  lineHeight: '1.8',
                  color: '#abb2bf' 
                }}>
                  <div><span style={{color:'#c678dd'}}>const</span> <span style={{color:'#e5c07b'}}>developer</span> = {'{'}</div>
                  <div style={{ paddingLeft: '2rem' }}><span style={{color:'#e06c75'}}>name</span>: <span style={{color:'#98c379'}}>"Munawwar Ali"</span>,</div>
                  <div style={{ paddingLeft: '2rem' }}><span style={{color:'#e06c75'}}>role</span>: <span style={{color:'#98c379'}}>"Full Stack Developer"</span>,</div>
                  <div style={{ paddingLeft: '2rem' }}><span style={{color:'#e06c75'}}>focus</span>: [<span style={{color:'#98c379'}}>"Backend"</span>, <span style={{color:'#98c379'}}>"Performance"</span>],</div>
                  <div style={{ paddingLeft: '2rem' }}><span style={{color:'#e06c75'}}>location</span>: <span style={{color:'#98c379'}}>"India"</span>,</div>
                  <div style={{ paddingLeft: '2rem' }}><span style={{color:'#e06c75'}}>education</span>: <span style={{color:'#98c379'}}>"BCA"</span></div>
                  <div>{'}'};</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGraduationCap, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      {/* Education Section embedded here for brevity */}
      <section id="education" className="education section">
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span>05.</span> Education
          </motion.h2>
          
          <motion.div 
            className="education-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '2rem', maxWidth: '800px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}
          >
            <div className="ed-icon" style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}>
              <FaGraduationCap />
            </div>
            <div className="ed-details" style={{textAlign: 'left'}}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Bachelor of Computer Applications (BCA)</h3>
              <h4 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '0.5rem' }}>Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj</h4>
              <span className="ed-date" style={{ fontFamily: 'var(--font-code)', fontSize: '0.9rem', color: 'var(--accent-primary)' }}>08/2025 – Present</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <motion.div 
          className="container contact-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '600px', textAlign: 'center', margin: '0 auto' }}
        >
          <h2 className="section-title text-center" style={{justifyContent: 'center', marginBottom: '1.5rem'}}>
            <span>06.</span> What's Next?
          </h2>
          <h3 className="contact-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get In Touch</h3>
          <p className="contact-desc" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
            I'm currently looking for new full-stack or backend developer opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-info" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="mailto:munawwarali@myyahoo.com" className="btn btn-primary btn-large" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <FaEnvelope /> munawwarali@myyahoo.com
            </a>
            <a href="tel:9580372064" className="btn btn-outline btn-large" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <FaPhone /> +91 9580372064
            </a>
          </div>
        </motion.div>
      </section>

      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container footer-content">
          <div className="social-links-footer" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <motion.a href="https://github.com/munawwar-ali" target="_blank" rel="noreferrer" whileHover={{ color: 'var(--accent-primary)', y: -3 }} style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
              <FaGithub />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/munawwar-ali-developer/" target="_blank" rel="noreferrer" whileHover={{ color: 'var(--accent-primary)', y: -3 }} style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
              <FaLinkedin />
            </motion.a>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-code)', fontSize: '0.9rem' }}>
            Designed & Built by Munawwar Ali
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;

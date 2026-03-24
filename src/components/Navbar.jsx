import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar glass-nav`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: scrolled ? '70px' : '80px',
        zIndex: 100,
        transition: 'height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'rgba(10, 10, 15, 0.7)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div className="nav-container" style={{ 
        maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', height: '100%', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
      }}>
        <a href="#" className="logo" style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-1px' }}>
          M<span className="highlight">A.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link" style={navLinkStyle}>{item}</a>
            </li>
          ))}
          <li>
            <a href="https://github.com/munawwar-ali" target="_blank" rel="noreferrer" className="icon-link" style={iconLinkStyle}>
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/munawwar-ali-developer/" target="_blank" rel="noreferrer" className="icon-link" style={iconLinkStyle}>
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="menu-toggle mobile-only" onClick={toggleMenu} style={menuToggleStyle}>
          <motion.span animate={mobileMenuOpen ? { rotate: -45, y: 7 } : { rotate: 0, y: 0 }} style={barStyle} />
          <motion.span animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} style={barStyle} />
          <motion.span animate={mobileMenuOpen ? { rotate: 45, y: -7 } : { rotate: 0, y: 0 }} style={barStyle} />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{
              position: 'fixed',
              top: scrolled ? '70px' : '80px',
              right: 0,
              width: '100%',
              height: `calc(100vh - ${scrolled ? '70px' : '80px'})`,
              background: 'var(--bg-secondary)',
              borderTop: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '2rem',
              alignItems: 'center'
            }}
          >
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={toggleMenu}
                style={{ ...navLinkStyle, fontSize: '1.2rem', margin: '1.5rem 0' }}
              >
                {item}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              <a href="https://github.com/munawwar-ali" target="_blank" rel="noreferrer" style={{color: 'var(--text-secondary)'}}><FaGithub size={28} /></a>
              <a href="https://www.linkedin.com/in/munawwar-ali-developer/" target="_blank" rel="noreferrer" style={{color: 'var(--text-secondary)'}}><FaLinkedin size={28} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media screen and (min-width: 769px) { .mobile-only { display: none !important; } }
        @media screen and (max-width: 768px) { .desktop-only { display: none !important; } }
      `}</style>
    </motion.nav>
  );
};

const navLinkStyle = {
  fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)',
  position: 'relative', padding: '0.5rem 0', transition: 'color 0.3s ease',
  textDecoration: 'none'
};

const iconLinkStyle = {
  fontSize: '1.2rem', transition: 'color 0.3s ease', color: 'var(--text-primary)', display: 'flex'
};

const menuToggleStyle = {
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  width: '30px', height: '21px', cursor: 'pointer', zIndex: 101
};

const barStyle = {
  height: '3px', width: '100%', backgroundColor: 'var(--text-primary)', borderRadius: '3px'
};

export default Navbar;

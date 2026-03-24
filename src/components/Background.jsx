import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="bg-shapes" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      <motion.div 
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          filter: 'blur(100px)',
          borderRadius: '50%',
          opacity: 0.4,
          width: '400px',
          height: '400px',
          background: 'var(--accent-primary)',
          top: '-100px',
          left: '-100px',
        }}
      />
      <motion.div 
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        style={{
          position: 'absolute',
          filter: 'blur(100px)',
          borderRadius: '50%',
          opacity: 0.4,
          width: '500px',
          height: '500px',
          background: 'var(--accent-secondary)',
          bottom: '-200px',
          right: '-100px',
        }}
      />
      <motion.div 
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 50, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
        style={{
          position: 'absolute',
          filter: 'blur(100px)',
          borderRadius: '50%',
          opacity: 0.2,
          width: '300px',
          height: '300px',
          background: '#ec4899',
          top: '40%',
          left: '50%',
        }}
      />
    </div>
  );
};

export default Background;

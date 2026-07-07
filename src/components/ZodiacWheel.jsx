import { motion } from 'framer-motion';
import { Star, Moon, Sun, Compass } from 'lucide-react';

const ZodiacWheel = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto' }}>
      {/* Outer Rotating Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          border: '2px dashed var(--color-gold)', 
          borderRadius: '50%',
          opacity: 0.5
        }}
      >
        {/* Orbital nodes */}
        <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
        <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
        <div style={{ position: 'absolute', left: '-6px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
        <div style={{ position: 'absolute', right: '-6px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
      </motion.div>

      {/* Inner Rotating Ring (Counter) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute', 
          inset: '30px', 
          border: '1px solid var(--color-navy-dark)', 
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.2
        }}
      >
      </motion.div>

      {/* Star/Icons spread circularly */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', inset: '40px', borderRadius: '50%' }}
      >
        <Star size={20} color="var(--color-primary)" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)' }} />
        <Moon size={20} color="var(--color-primary)" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 50%)' }} />
        <Sun size={20} color="var(--color-primary)" style={{ position: 'absolute', top: '50%', left: 0, transform: 'translate(-50%, -50%)' }} />
        <Star size={20} color="var(--color-primary)" style={{ position: 'absolute', top: '50%', right: 0, transform: 'translate(50%, -50%)' }} />
      </motion.div>

      {/* Center Piece */}
      <div style={{ position: 'absolute', inset: '80px', background: 'var(--color-off-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)' }}>
        <Compass size={60} color="var(--color-navy-dark)" strokeWidth={1} />
      </div>
    </div>
  );
};

export default ZodiacWheel;

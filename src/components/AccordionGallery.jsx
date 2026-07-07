import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const locations = [
  { name: 'New York', image: '/images/locations/ny.webp' },
  { name: 'Beverly Hills', image: '/images/locations/beverly_hills.webp' },
  { name: 'Miami', image: '/images/locations/miami.webp' },
  { name: 'Chicago', image: '/images/locations/chicago.webp' },
  { name: 'Houston', image: '/images/locations/houston.webp' },
  { name: 'Las Vegas', image: '/images/locations/vegas.webp' }
];

const AccordionGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0); 
  const navigate = useNavigate();

  return (
    <div className="accordion-gallery-container" style={{ 
      display: 'flex', 
      flexDirection: 'row',
      width: '100%', 
      height: '600px', 
      gap: '2rem', 
      backgroundColor: '#f8f7fa',
      borderRadius: '2rem',
      padding: '2rem',
      boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Left List Section */}
      <div className="accordion-gallery-left" style={{ 
        flex: '0 0 40%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        gap: '0.5rem',
        paddingRight: '2rem',
        zIndex: 2
      }}>
        {locations.map((loc, i) => {
          const isActive = hoveredIndex === i;
          return (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              style={{
                padding: '1.2rem 1.5rem',
                cursor: 'pointer',
                borderRadius: '1rem',
                background: isActive ? 'white' : 'transparent',
                boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                borderLeft: isActive ? '4px solid var(--color-primary)' : '4px solid transparent'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ 
                  margin: 0, 
                  fontSize: isActive ? '1.8rem' : '1.4rem',
                  color: isActive ? 'var(--color-navy-dark)' : 'var(--color-on-surface-variant)',
                  fontFamily: 'var(--font-display)',
                  transition: 'all 0.3s ease'
                }}>
                  {loc.name}
                </h3>
                {isActive && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <MapPin color="var(--color-primary)" size={24} />
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ marginTop: '1rem', color: 'var(--color-on-surface-variant)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                      Exclusive VIP consultations now available for elite clients. Experience world-class astrological guidance in {loc.name}.
                    </p>
                    <button className="btn btn-primary" style={{ 
                      marginTop: '1rem', 
                      display: 'inline-flex',
                      border: 'none',
                      transition: 'transform 0.2s',
                      width: 'fit-content'
                    }}
                    onClick={() => navigate('/contact')}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      Reserve Session <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Right Image Section */}
      <div className="accordion-gallery-right" style={{ 
        flex: '1', 
        position: 'relative', 
        borderRadius: '1.5rem', 
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <AnimatePresence mode="wait">
          <motion.img 
            key={hoveredIndex}
            src={locations[hoveredIndex].image}
            alt={locations[hoveredIndex].name}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </AnimatePresence>
        {/* Subtle gradient overlay to make image pop */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent 30%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Mobile responsiveness handling */}
      <style>{`
        @media (max-width: 900px) {
          .accordion-gallery-container {
            flex-direction: column-reverse !important;
            height: auto !important;
            padding: 1rem !important;
          }
          .accordion-gallery-left {
            flex: 1 !important;
            padding-right: 0 !important;
          }
          .accordion-gallery-right {
            height: 300px !important;
            flex: none !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AccordionGallery;

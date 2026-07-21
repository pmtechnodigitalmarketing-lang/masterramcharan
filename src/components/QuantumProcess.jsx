import React, { useState, useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { Eye, Compass, Crown } from 'lucide-react';

const steps = [
  {
    title: "1. Auric & Quantum Audit",
    desc: "We begin with a deep diagnostic of your auric field. By analyzing your energetic signature, we identify embedded generational trauma, karmic blockages, and any targeted occult interference that is stalling your manifestation.",
    icon: Eye,
    image: "/images/675047431682550965.webp",
    iconBg: "var(--color-navy-dark)",
    iconColor: "var(--color-gold)",
    shadow: "0 10px 20px rgba(255, 255, 255, 0.1)"
  },
  {
    title: "2. Advanced Vedic Decoding",
    desc: "Using ancient, mathematically precise Vedic astrological sciences, we map your absolute destiny path. We align your energetic frequency with optimal cosmic timing to unlock massive wealth and relationship alignment.",
    icon: Compass,
    image: "/images/A Rig Vedic Account Of How The Universe Was Created.webp",
    iconBg: "var(--color-navy-dark)",
    iconColor: "var(--color-gold)",
    shadow: "0 10px 20px rgba(255, 255, 255, 0.1)"
  },
  {
    title: "3. Energetic Sovereignty",
    desc: "The final stage. We deploy proprietary counter-rituals and protective mantras to dismantle dark matrices. You are sealed in an impenetrable, mirror-like auric shield that deflects negativity and attracts pure, high-vibrational abundance.",
    icon: Crown,
    image: "/images/galactic_starseed.webp",
    iconBg: "var(--color-gold)",
    iconColor: "var(--color-navy-dark)",
    shadow: "0 10px 30px rgba(44, 94, 173, 0.4)"
  }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};
  
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const QuantumProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)', padding: '0 0 8rem 0' }}>
      <div className="container">
        <motion.div variants={fadeInUp} className="section-subtitle" style={{ textAlign: 'center', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
          Our Methodology
        </motion.div>
        <motion.h2 variants={fadeInUp} className="section-title" style={{ marginBottom: '5rem', textAlign: 'center', color: 'var(--color-navy-dark)' }}>
          The Quantum Process
        </motion.h2>

        <div className="mobile-grid-1 mobile-gap-sm" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          
          {/* Left Image Column with Crossfade */}
          <motion.div variants={fadeInUp} style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)', height: '600px' }}>
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeStep}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
              />
            </AnimatePresence>
            
          </motion.div>

          {/* Right Timeline Column */}
          <div style={{ position: 'relative' }}>
            {/* Vertical Connecting Line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '40px', width: '2px', background: 'var(--color-light-gray)', zIndex: 0 }}></div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                return (
                  <motion.div 
                    key={index}
                    variants={fadeInUp} 
                    onMouseEnter={() => setActiveStep(index)}
                    style={{ 
                        display: 'flex', 
                        gap: '2rem', 
                        position: 'relative', 
                        zIndex: 1,
                        cursor: 'pointer',
                        opacity: isActive ? 1 : 0.5,
                        transition: 'opacity 0.4s ease',
                        transform: isActive ? 'translateX(-10px)' : 'translateX(0)',
                        padding: '1rem',
                        borderRadius: '1rem',
                        background: isActive ? 'rgba(0,0,0,0.02)' : 'transparent'
                    }}
                  >
                    <div style={{ flex: '0 0 auto', width: '80px', display: 'flex', justifyContent: 'center' }}>
                      <div style={{ 
                          width: '64px', height: '64px', borderRadius: '50%', 
                          background: step.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', 
                          border: '3px solid var(--color-white)', 
                          boxShadow: isActive ? step.shadow : 'none',
                          transition: 'all 0.4s ease'
                      }}>
                        <Icon color={step.iconColor} size={24} />
                      </div>
                    </div>
                    <div style={{ paddingTop: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy-dark)', marginBottom: '0.8rem', transition: 'color 0.4s ease' }}>{step.title}</h3>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumProcess;

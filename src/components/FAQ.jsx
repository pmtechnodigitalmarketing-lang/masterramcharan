import React, { useState } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Is complete confidentiality guaranteed?",
    a: "Absolutely. We operate under strict NDA-level confidentiality. Your identity, your situation, and the rituals we perform are kept entirely secure. Our high-profile clientele rely on us for absolute discretion."
  },
  {
    q: "How quickly will I see results from a Quantum Audit?",
    a: "Many clients feel an immediate energetic 'lifting' within 24 hours of the initial clearing. Tangible material results (such as business breakthroughs or relationship shifts) typically manifest within a 30 to 45-day window as your new energetic sovereign state takes root."
  },
  {
    q: "Do you use any dark arts or low-frequency energy?",
    a: "Never. We operate exclusively with high-frequency, divine Vedic rituals. We do not use dark energy to fight dark energy. Our methods dissolve malicious matrices using pure light, rendering them powerless permanently."
  },
  {
    q: "What if I am unsure which service I need?",
    a: "You don't need to know beforehand. Every new client relationship begins with a comprehensive Auric & Quantum Audit. We will diagnose exactly what is blocking you and prescribe the precise rituals required for your specific situation."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            style={{ 
              marginBottom: '1rem', 
              border: '1px solid var(--color-light-gray)', 
              borderRadius: '0.5rem',
              overflow: 'hidden',
              background: 'rgba(0, 0, 0, 0.03)',
              boxShadow: isOpen ? '0 10px 30px rgba(0, 0, 0, 0.05)' : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <button 
              onClick={() => toggle(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 2rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: 'var(--color-navy-dark)',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              {faq.q}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown color="var(--color-gold)" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ padding: '0 2rem 1.5rem 2rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;

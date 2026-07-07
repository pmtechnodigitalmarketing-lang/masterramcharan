import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How does spiritual consulting differ from traditional therapy?",
    a: "While traditional therapy focuses strictly on the psychological mind, our consulting addresses the energetic and karmic root causes of your blockages. We use Vedic sciences and quantum healing to clear unseen ties, making your physical and mental efforts significantly more effective."
  },
  {
    q: "Is distance healing as effective as in-person?",
    a: "Absolutely. Quantum physics and ancient Vedic texts both confirm that energy is not bound by physical distance. We connect directly to your auric signature, making remote clearings and interventions just as powerful as sitting in the same room."
  },
  {
    q: "Are your practices safe?",
    a: "Yes. We strictly adhere to high-frequency, divine white-light practices. We never use dark magic or fear-based coercion. Our interventions are designed to protect, heal, and align you with your highest potential."
  },
  {
    q: "How quickly will I see results after a curse removal?",
    a: "Most clients report an immediate sensation of 'lightness' and relief from anxiety within hours. Tangible shifts in your career, relationships, and luck typically manifest within 3 to 14 days as the new energetic flow stabilizes."
  },
  {
    q: "Do you offer confidentiality agreements?",
    a: "Yes. We cater to high-net-worth individuals, executives, and public figures. Every consultation is strictly confidential, and we operate under formal Non-Disclosure Agreements upon request."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      {/* Header */}
      <section className="section" style={{ background: 'rgba(0, 0, 0, 0.03)', paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Frequently Asked <span className="text-gradient">Questions</span></h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            Clarity on our process, practices, and the profound impact of spiritual sovereignty.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="glass-panel" style={{ overflow: 'hidden' }}>
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    style={{ width: '100%', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-navy-dark)' }}
                  >
                    {faq.q}
                    <div style={{ background: isOpen ? 'var(--color-indigo)' : 'var(--color-lavender)', color: isOpen ? 'white' : 'var(--color-indigo)', borderRadius: '50%', padding: '0.5rem', display: 'flex', transition: 'var(--transition-smooth)' }}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ padding: '0 2rem 2rem 2rem', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default FAQ;

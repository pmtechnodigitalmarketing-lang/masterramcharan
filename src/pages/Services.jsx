import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { categories, services } from '../data/services';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';
import FAQ from '../components/FAQ';

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [matchmakerSelection, setMatchmakerSelection] = useState(null);
  const [showSolutionDetails, setShowSolutionDetails] = useState(false);

  const matchmakerData = {
    'Corporate Success': {
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Our Executive Alignment protocol is designed for high-level operators who face unseen friction in their ventures. We dissolve energetic saboteurs, realign your corporate aura, and establish a dominant quantum frequency that effortlessly attracts wealth, loyalty, and market supremacy.',
      benefits: ['Rapid Corporate Energetic Clearing', 'Leadership Aura Amplification', 'Dissolution of Market Resistance', 'Guaranteed Strategic Alignment']
    },
    'Relationship Healing': {
      img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'The Twin Flame Synastry intervention clears the psychic debris, karmic entanglements, and emotional blockages that disrupt pure connection. We restore the original, untainted frequency between you and your partner, enabling a bond of absolute harmony and impenetrable trust.',
      benefits: ['Deep Karmic Cord Cutting', 'Restoration of Original Bond', 'Shielding from External Interferences', 'Absolute Harmonization']
    },
    'Aura Protection': {
      img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Immediate and total eviction of malicious spiritual entities and psychic attacks. We construct a multi-layered, impenetrable auric ward around your energy field, ensuring that jealousy, curses, and draining attachments bounce off you entirely.',
      benefits: ['Instant Jinn & Entity Eviction', 'Impenetrable Auric Shielding', 'Return to Sender Deflection', '24/7 Energetic Monitoring']
    },
    'Karmic Clearing': {
      img: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: "A profound descent into your soul's timeline. The Quantum Audit identifies ancestral trauma, past-life debts, and deep-seated energetic blockages. By neutralizing these hidden forces, we instantly accelerate your spiritual and material evolution.",
      benefits: ['Ancestral Trauma Dissolution', 'Past-Life Debt Neutralization', 'DNA-Level Energetic Reset', 'Accelerated Material Evolution']
    }
  };

  const stateOnlyServiceIds = [
    'vedic-astrology', 'astrocartography', 'karma-clearing', 'twin-flame-reading', 
    'blockage-removal', 'abundance-alignment', 'spiritual-awakening', 'corporate-astrology', 
    'medical-astrology', 'chakra-balancing', 'tarot-divination', 'real-estate-astrology', 
    'gemstone-prescription', 'vastu-shastra', 'evil-eye-protection', 'aura-cleansing', 
    'marriage-matching'
  ];

  const filteredServices = activeCategory === 'all' 
    ? services.filter(s => !stateOnlyServiceIds.includes(s.id))
    : services.filter(s => s.categoryId === activeCategory && !stateOnlyServiceIds.includes(s.id));

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundColor: 'var(--color-off-white)' }}>
      
      {/* Cinematic Header */}
      <section style={{ position: 'relative', padding: '5rem 0 4rem 0', backgroundColor: 'var(--color-off-white)', overflow: 'hidden' }}>
        {/* Dark overlay to ensure text readability against particles */}
        
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <Sparkles color="var(--color-gold)" size={32} />
            </div>
            <h1 className="mobile-h1" style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: 'var(--color-navy-dark)', fontFamily: 'var(--font-heading)', letterSpacing: '2px' }}>
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem', color: 'var(--color-light-gray)', lineHeight: '1.7' }}>
              Comprehensive, elite-level spiritual interventions designed to heal the past, protect the present, and command the absolute sovereignty of your future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Luxury Filter Tabs */}
      <section style={{ padding: '3rem 0', backgroundColor: 'rgba(0, 0, 0, 0.03)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => setSearchParams({})}
              style={{ 
                padding: '0.8rem 2rem', 
                fontSize: '1rem', 
                borderRadius: '2rem',
                border: activeCategory === 'all' ? '1px solid var(--color-gold)' : '1px solid transparent',
                backgroundColor: activeCategory === 'all' ? 'var(--color-navy-dark)' : 'rgba(0,0,0,0.03)',
                color: activeCategory === 'all' ? 'var(--color-gold)' : 'var(--color-text)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              All Interventions
            </button>
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setSearchParams({ category: cat.id })}
                style={{ 
                    padding: '0.8rem 2rem', 
                    fontSize: '1rem', 
                    borderRadius: '2rem',
                    border: activeCategory === cat.id ? '1px solid var(--color-gold)' : '1px solid transparent',
                    backgroundColor: activeCategory === cat.id ? 'var(--color-navy-dark)' : 'rgba(0,0,0,0.03)',
                    color: activeCategory === cat.id ? 'var(--color-gold)' : 'var(--color-text)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section className="section mobile-p-sm" style={{ padding: '6rem 0' }}>
        <div className="container">
          <motion.div layout className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            <AnimatePresence mode='popLayout'>
              {filteredServices.map((service) => (
                <motion.div 
                  key={service.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="service-card-luxury"
                  style={{ 
                    minHeight: '400px',
                    borderRadius: '1rem',
                    overflow: 'hidden', 
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    background: 'var(--color-white)'
                  }}
                >
                  <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} 
                        className="service-img-hover"
                    />
                  </div>
                  
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '2px', marginBottom: '0.8rem' }}>
                        {categories.find(c => c.id === service.categoryId)?.name}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--color-navy-dark)', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>{service.title}</h3>
                    <p style={{ color: 'var(--color-light-gray)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {service.shortDescription}
                    </p>
                    <Link 
                        to={`/services/${service.id}`} 
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.5rem', 
                            color: 'var(--color-primary)', 
                            fontWeight: 'bold', 
                            textTransform: 'uppercase', 
                            letterSpacing: '1px', 
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            marginTop: 'auto'
                        }}
                        className="hover-arrow"
                    >
                      Explore Protocol <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 2rem 0' }}>
        <div className="container">
          <motion.div variants={fadeInUp} className="section-subtitle" style={{ textAlign: 'center', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
            Clarity & Truth
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title" style={{ marginBottom: '4rem', textAlign: 'center', color: 'var(--color-navy-dark)' }}>
            Frequently Asked Questions
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <FAQ />
          </motion.div>
        </div>
      </section>

      {/* Service Matchmaker */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <motion.div variants={fadeInUp}>
            <div style={{ display: 'inline-block', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
              Service Matchmaker
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Find Your Path</h2>
            <p style={{ color: 'var(--color-light-gray)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
              Select your primary focus area below to discover the exact spiritual intervention required for your situation.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
              {['Corporate Success', 'Relationship Healing', 'Aura Protection', 'Karmic Clearing'].map(item => (
                <button 
                  key={item}
                  onClick={() => {
                    setMatchmakerSelection(item);
                    setShowSolutionDetails(false);
                  }}
                  style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '2rem',
                    border: matchmakerSelection === item ? '2px solid var(--color-gold)' : '2px solid rgba(44, 94, 173, 0.2)',
                    background: matchmakerSelection === item ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                    color: matchmakerSelection === item ? 'var(--color-gold)' : 'var(--color-navy-dark)',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {matchmakerSelection && (
                <motion.div
                  key={matchmakerSelection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                >
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy-dark)', marginBottom: '1rem' }}>
                    {matchmakerSelection === 'Corporate Success' && 'Recommended: The Executive Alignment'}
                    {matchmakerSelection === 'Relationship Healing' && 'Recommended: Twin Flame Synastry'}
                    {matchmakerSelection === 'Aura Protection' && 'Recommended: Jinn Eviction Protocol'}
                    {matchmakerSelection === 'Karmic Clearing' && 'Recommended: The Quantum Audit'}
                  </h3>
                  <p style={{ color: 'var(--color-light-gray)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {matchmakerSelection === 'Corporate Success' && 'Designed specifically for high-net-worth individuals and corporate leaders, this alignment removes invisible roadblocks to wealth.'}
                    {matchmakerSelection === 'Relationship Healing' && 'A powerful karmic intervention to dissolve energetic barriers between you and your partner, restoring absolute harmony.'}
                    {matchmakerSelection === 'Aura Protection' && 'Immediate, elite-level safeguarding against malicious spiritual entities, psychic attacks, and draining attachments.'}
                    {matchmakerSelection === 'Karmic Clearing' && 'A deep diagnostic scan of your auric field to identify and neutralize ancestral or past-life energetic blockages.'}
                  </p>
                  {!showSolutionDetails ? (
                    <button onClick={() => setShowSolutionDetails(true)} className="btn btn-primary" style={{ display: 'inline-block', padding: '0.8rem 2rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}>
                      Explore Solution
                    </button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem', textAlign: 'left', overflow: 'hidden' }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                        
                        {/* Information and Image Column */}
                        <div>
                          <img 
                            src={matchmakerData[matchmakerSelection]?.img} 
                            alt={matchmakerSelection} 
                            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} 
                          />
                          <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>The {matchmakerSelection} Protocol</h4>
                          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                            {matchmakerData[matchmakerSelection]?.desc}
                          </p>
                          
                          <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.1rem', marginBottom: '1rem' }}>Core Interventions</h4>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-muted)' }}>
                            {matchmakerData[matchmakerSelection]?.benefits.map((benefit, i) => (
                              <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span> {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Functional Form Column */}
                        <div style={{ background: 'rgba(255, 255, 255, 0.7)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 15px 40px rgba(0,0,0,0.04)' }}>
                          <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Secure Confidential Inquiry</h4>
                          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.5' }}>
                            Skip the standard waitlist. Submit your details directly to our senior interventionists for an immediate, discreet consultation.
                          </p>
                          
                          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }} onSubmit={(e) => { e.preventDefault(); alert('Your confidential request has been submitted securely.'); }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-navy-dark)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name or Alias</label>
                              <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(0,0,0,0.1)', fontFamily: 'inherit', background: 'white' }} onInput={(e) => e.target.value = e.target.value.replace(/[0-9]/g, '')} />
                            </div>
                            
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-navy-dark)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Secure Email Address</label>
                              <input type="email" placeholder="contact@example.com" required style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(0,0,0,0.1)', fontFamily: 'inherit', background: 'white' }} />
                            </div>
                            
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-navy-dark)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Situation Brief</label>
                              <textarea placeholder="Describe the blockages or anomalies you are experiencing..." required rows="4" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(0,0,0,0.1)', resize: 'vertical', fontFamily: 'inherit', background: 'white' }}></textarea>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexDirection: 'column' }}>
                              <button type="submit" className="btn btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', padding: '1rem', fontSize: '1.05rem', fontWeight: 'bold' }}>Initiate Protocol</button>
                              <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>or</div>
                              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', padding: '1rem', fontSize: '1.05rem', fontWeight: 'bold' }}>Contact General Support</Link>
                            </div>
                          </form>
                        </div>
                        
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </section>

      {/* Internal CSS for hover effects on cards */}
      <style dangerouslySetInnerHTML={{__html: `
        .service-card-luxury {
            transition: all 0.4s ease;
        }
        .service-card-luxury:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
            border-color: rgba(44, 94, 173, 0.3); /* Subtle gold border on hover */
        }
        .service-card-luxury:hover .service-img-hover {
            transform: scale(1.05);
        }
        .hover-arrow svg {
            transition: transform 0.3s ease;
        }
        .hover-arrow:hover svg {
            transform: translateX(5px);
        }
      `}} />

    </motion.div>
  );
};

export default Services;

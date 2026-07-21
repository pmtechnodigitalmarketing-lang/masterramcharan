import React from 'react';
import { m as motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Plane, Globe, ArrowRight } from 'lucide-react';
import { states, slugify } from '../data/locations';
import SEO from '../components/SEO';
import { buildBreadcrumbSchema } from '../schema';

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

const FindUs = () => {
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden" style={{ minHeight: '100vh', backgroundColor: 'var(--color-off-white)' }}>
      <SEO
        title="Find Us | Global Sanctuaries | Psychic Charan"
        description="Our physical sanctuaries are designed using exact Vedic architectural principles. Discover locations nationwide, plus elite remote and distant clearing sessions."
        canonical="/find-us"
        schema={[
          buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Find Us', url: '/find-us' },
          ]),
        ]}
      />

      {/* Cinematic Header */}
      <section style={{ position: 'relative', padding: '5rem 0 4rem 0', overflow: 'hidden' }}>
        
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div variants={fadeInUp}>
            <h1 className="mobile-h1" style={{ fontSize: '4.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy-dark)' }}>
              Global <span className="text-gradient-gold">Sanctuaries</span>
            </h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--color-light-gray)', lineHeight: '1.7' }}>
              Our physical locations are meticulously designed using exact Vedic architectural principles. Positioned on powerful energetic lay lines, each sanctuary ensures that the moment you cross our threshold, your auric field immediately begins to recalibrate in absolute, impenetrable privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <motion.div variants={staggerContainer} style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
            gap: '1.2rem',
            textAlign: 'center'
          }}>
            {states.map((state, i) => (
              <Link
                key={i}
                to={`/location/${slugify(state.name)}`}
                style={{ textDecoration: 'none' }}
              >
                <motion.div variants={fadeInUp} style={{
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.05)',
                  padding: '1.5rem 1rem',
                  borderRadius: '0.8rem',
                  color: 'var(--color-navy-dark)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.8rem',
                  height: '100%'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)'; e.currentTarget.style.color = 'var(--color-navy-dark)'; }}
                >
                  <img 
                    src={`https://flagcdn.com/w80/us-${state.code}.png`} 
                    alt={`${state.name} Flag`}
                    style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                    loading="lazy"
                  />
                  <span>{state.name}</span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Sanctuary Standards Protocol */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 8rem 0' }}>
        <div className="container">
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ color: 'var(--color-navy-dark)' }}>Sanctuary Standards Protocol</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Why do world leaders insist on visiting our physical locations? Because our spaces are constructed on pure energetic lay lines, adhering to exact Vedic architectural principles.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            
            <motion.div variants={fadeInUp} style={{ background: 'rgba(0, 0, 0, 0.03)', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                    <Shield color="var(--color-gold)" size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Quantum Shielding</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Every location is encased in a proprietary 24/7 energetic shield, preventing any malicious psychic interference or remote viewing by competitors.</p>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ background: 'rgba(0, 0, 0, 0.03)', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                    <Lock color="var(--color-gold)" size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Absolute Privacy</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We do not accept public walk-ins. Our sanctuaries are discreet, unmarked, and accessible strictly by pre-approved private appointment only.</p>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ background: 'rgba(0, 0, 0, 0.03)', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                    <Eye color="var(--color-gold)" size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Vedic Geometry</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>The interior architecture of every room utilizes Vastu Shastra principles to naturally amplify positive flow and immediately ground your nervous system.</p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Virtual Sanctuary CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(44, 94, 173, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <motion.div variants={fadeInUp} className="mobile-p-sm" style={{ background: 'rgba(0, 0, 0, 0.02)', padding: '4rem', borderRadius: '2rem', border: '1px solid rgba(44, 94, 173, 0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Globe color="var(--color-gold)" size={32} />
            </div>
            <h2 className="mobile-h2" style={{ fontSize: '3rem', color: 'var(--color-navy-dark)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>The Virtual Sanctuary</h2>
            <p style={{ color: 'var(--color-light-gray)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.7' }}>
              Cannot travel? Energetic fields are not bound by physical distance. We offer elite remote and distant clearing sessions for global clients via highly secure digital channels.
            </p>
            
            <Link to="/contact" className="btn btn-primary mobile-w-full" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'center' }}>
              Book Remote Session <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default FindUs;

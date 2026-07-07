import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Eye, Star, ChevronRight, Lock, Quote, Globe, Target } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import FAQ from '../components/FAQ';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
};

const About = () => {
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} style={{ backgroundColor: 'var(--color-off-white)' }}>
      
      {/* Cinematic Header */}
      <section style={{ position: 'relative', padding: '5rem 0 4rem 0', backgroundColor: 'var(--color-off-white)', overflow: 'hidden' }}>
        
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div variants={fadeInUp}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(44, 94, 173, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(44, 94, 173, 0.2)' }}>
                <Star color="var(--color-gold)" size={28} />
              </div>
            </div>
            <h1 className="mobile-h1" style={{ fontSize: '5rem', marginBottom: '1.5rem', color: 'var(--color-navy-dark)', fontFamily: 'var(--font-heading)', letterSpacing: '2px', lineHeight: '1.1' }}>
              The <span className="text-gradient-gold">Master Ramcharan</span> Collective
            </h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem', color: 'var(--color-light-gray)', lineHeight: '1.7' }}>
              We are the world's most exclusive spiritual agency, dedicated to safeguarding the elite from unseen forces and aligning their karmic paths for unprecedented, absolute success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Philosophy - Dark Theme */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '6rem 0' }}>
        <div className="container">
          <div className="mobile-grid-1 mobile-gap-sm" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            
            <motion.div variants={fadeInUp} style={{ order: 2 }}>
              <div style={{ display: 'inline-block', color: 'var(--color-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Our Philosophy
              </div>
              <h2 style={{ fontSize: '3rem', color: 'var(--color-navy-dark)', marginBottom: '2rem', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                Mastery Over the Unseen
              </h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-light-gray)', fontSize: '1.15rem', lineHeight: '1.8' }}>
                At Master Ramcharan, we believe that true wealth and success are impossible without absolute spiritual sovereignty. The physical world is merely a reflection of the energetic plane. When your subtle body is compromised by hidden blockages, ancestral karma, or directed negativity, even the most sound business strategies will falter.
              </p>
              <p style={{ marginBottom: '2.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                We combine ancient, time-tested Vedic sciences with modern quantum healing methodologies to restore your natural state of abundance. Unlike traditional practitioners, we operate with the extreme efficiency, confidentiality, and exact precision of a high-end corporate consultancy, ensuring your ascension is swift and thoroughly protected.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: 0, padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                    <div style={{ marginTop: '4px', background: 'rgba(44, 94, 173, 0.1)', padding: '8px', borderRadius: '50%' }}>
                        <Shield color="var(--color-gold)" size={20} />
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Absolute Discretion & NDAs</h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Bank-level encryption and strict legal confidentiality.</p>
                    </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                    <div style={{ marginTop: '4px', background: 'rgba(44, 94, 173, 0.1)', padding: '8px', borderRadius: '50%' }}>
                        <Sparkles color="var(--color-gold)" size={20} />
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Ethical, White-Light Practices</h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>We only employ high-vibrational, karmically clean methods.</p>
                    </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                    <div style={{ marginTop: '4px', background: 'rgba(44, 94, 173, 0.1)', padding: '8px', borderRadius: '50%' }}>
                        <Eye color="var(--color-gold)" size={20} />
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Quantum-Level Diagnostics</h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Identifying energetic blocks with mathematical precision.</p>
                    </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                    <div style={{ marginTop: '4px', background: 'rgba(44, 94, 173, 0.1)', padding: '8px', borderRadius: '50%' }}>
                        <Target color="var(--color-gold)" size={20} />
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Custom Tailored Solutions</h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>No one-size-fits-all. Every protocol is uniquely coded to your energetic signature.</p>
                    </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                    <div style={{ marginTop: '4px', background: 'rgba(44, 94, 173, 0.1)', padding: '8px', borderRadius: '50%' }}>
                        <Globe color="var(--color-gold)" size={20} />
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>24/7 Global Protection</h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Continuous monitoring and rapid response intervention, wherever you are.</p>
                    </div>
                </li>
              </ul>
              
              <div className="mobile-col" style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  Explore Methodology
                </Link>
                <Link to="/contact" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  Speak With An Expert
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} style={{ order: 1, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(circle, rgba(44, 94, 173, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
                <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(0, 0, 0, 0.05)', zIndex: 1 }}>
                    <img src="/images/SHIVA.webp" alt="Consultation" style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }} className="hover-zoom" />
                    
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Process */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 8rem 0', position: 'relative', overflow: 'hidden' }}>
        
        {/* Decorative background element */}
        <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(44, 94, 173, 0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'inline-block', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
                The Methodology
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-navy-dark)' }}>The Transformation Process</h2>
          </motion.div>
          
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {[
              { step: '01', title: 'Quantum Audit', desc: 'A deep energetic scan of your aura or business to identify specific karmic blocks or malicious attachments.' },
              { step: '02', title: 'Strategic Blueprint', desc: 'We design a personalized, multi-phased spiritual intervention plan utilizing specific Vedic rituals and remedies.' },
              { step: '03', title: 'Intervention', desc: 'Our experts perform the necessary clearings, cord-cuttings, and entity banishments remotely or on-site.' },
              { step: '04', title: 'Permanent Sealing', desc: 'We install high-frequency wards and provide you with personalized talismans to ensure the negativity never returns.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.08)' }}
                style={{ 
                    position: 'relative',
                    padding: '3rem 2rem', 
                    background: 'rgba(0, 0, 0, 0.03)', 
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column'
                }}
              >
                {/* Giant glowing background number */}
                <div style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '8rem', fontWeight: '900', color: 'rgba(44, 94, 173, 0.08)', fontFamily: 'var(--font-heading)', lineHeight: '1', userSelect: 'none', pointerEvents: 'none' }}>
                    {item.step}
                </div>
                
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', fontWeight: 'bold' }}>
                        {i + 1}
                    </div>
                </div>
                
                <h3 style={{ marginBottom: '1rem', color: 'var(--color-navy-dark)', fontSize: '1.5rem', position: 'relative', zIndex: 1 }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', position: 'relative', zIndex: 1, flex: 1 }}>{item.desc}</p>
                
                <div style={{ marginTop: '2rem', position: 'relative', zIndex: 1 }}>
                    <ChevronRight color="var(--color-gold)" size={24} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Client Responses (Testimonials) */}
      <section className="section mobile-p-sm" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 8rem 0', position: 'relative' }}>
        <div className="container">
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'inline-block', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
                Client Responses
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-navy-dark)' }}>The Elite Verdict</h2>
          </motion.div>

          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {[
              { text: "Master Ramcharan single-handedly dismantled a corporate espionage hex placed on my firm. Within 48 hours, our stock rebounded and the leak was exposed.", author: "James T.", role: "CEO, Tech Conglomerate" },
              { text: "I was suffering from unexplained chronic fatigue that no doctor could diagnose. The Quantum Audit revealed a generational attachment. I am now completely free.", author: "Elena R.", role: "Private Investor" },
              { text: "Their 24/7 Vedic Protection shield is the best investment I have ever made. My family feels an overwhelming sense of peace, and my business has tripled.", author: "Marcus V.", role: "Real Estate Developer" }
            ].map((review, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.08)' }}
                style={{ 
                    background: 'rgba(0, 0, 0, 0.03)', 
                    padding: '3rem', 
                    borderRadius: '1.5rem', 
                    position: 'relative',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: '0.1' }}>
                    <Quote size={60} color="var(--color-navy-dark)" />
                </div>
                <p style={{ color: 'var(--color-navy-dark)', fontSize: '1.15rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                    "{review.text}"
                </p>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
                    <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 'bold' }}>{review.author}</h4>
                    <p style={{ color: 'var(--color-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>{review.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)', padding: '0 0 2rem 0' }}>
        <div className="container">
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
                Clarity & Truth
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-navy-dark)' }}>Frequently Asked Questions</h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FAQ />
          </motion.div>
        </div>
      </section>

      {/* The Sovereign Mandate (Final CTA) */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '6rem 0 10rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(44, 94, 173, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <motion.div variants={fadeInUp} className="mobile-p-sm" style={{ background: 'rgba(0, 0, 0, 0.02)', padding: '4rem', borderRadius: '2rem', border: '1px solid rgba(44, 94, 173, 0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Lock color="var(--color-gold)" size={32} />
            </div>
            <h2 className="mobile-h2" style={{ fontSize: '3rem', color: 'var(--color-navy-dark)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>The Sovereign Mandate</h2>
            <p style={{ color: 'var(--color-light-gray)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.7' }}>
              Ready to claim absolute sovereignty over your future? Our books are currently open to a highly select number of high-net-worth individuals.
            </p>
            
            <Link to="/contact" className="btn btn-primary mobile-w-full" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Request Confidential Consultation
            </Link>
            <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem', marginTop: '2rem' }}>
              Due to the intensive nature of our work, we operate strictly via application and NDA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hover-zoom:hover {
            transform: scale(1.05);
        }
        .team-card {
            transition: all 0.4s ease;
        }
        .team-card:hover {
            transform: translateY(-10px);
            border-color: rgba(44, 94, 173, 0.3) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .team-img-hover {
            transition: transform 0.7s ease, filter 0.4s ease;
        }
        .team-card:hover .team-img-hover {
            transform: scale(1.05);
            filter: grayscale(0%) contrast(1.1) !important;
        }
      `}} />
      
    </motion.div>
  );
};

export default About;

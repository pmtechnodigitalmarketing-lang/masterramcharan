import React from 'react'; // Force HMR update
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, Lock, AlertTriangle, ArrowRight, FileCheck, Search, Video } from 'lucide-react';
import FAQ from '../components/FAQ';
import AnimatedMap from '../components/AnimatedMap';

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* Header */}
      <section className="section" style={{ background: 'rgba(0, 0, 0, 0.03)', paddingBottom: '2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Initiate a <span className="text-gradient">Connection</span></h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            Reach out to our private concierge to schedule your diagnostic audit or discuss corporate protection services.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'flex-start' }}>
              
              <div style={{ marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--color-navy-dark)', fontFamily: 'var(--font-heading)' }}>Strictly Confidential</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                  Our clientele includes industry leaders, public figures, and global executives. We employ military-grade encryption and strict non-disclosure agreements from the very first point of contact. Your identity and situation remain absolutely protected.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderLeft: '4px solid var(--color-gold)' }}>
                <div style={{ background: 'var(--color-lavender)', padding: '1rem', borderRadius: '50%' }}>
                  <Phone color="var(--color-indigo)" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Secure VIP Line</h3>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>+1 (470) 452-0154</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>Available 24/7 for urgent energetic interventions</div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: 'var(--color-lavender)', padding: '1rem', borderRadius: '50%' }}>
                  <Mail color="var(--color-indigo)" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Encrypted Email</h3>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>shivakumaramuddappa19@gmail.com</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>Average response time: &lt; 2 hours</div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: 'var(--color-lavender)', padding: '1rem', borderRadius: '50%' }}>
                  <Shield color="var(--color-indigo)" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Global Availability</h3>
                  <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-navy-dark)', lineHeight: '1.4' }}>
                    702 Twin Oaks Dr apt 2,<br/>
                    Decatur, GA 30030
                  </div>
                </div>
              </div>
              
            </div>

            {/* Form */}
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Private Inquiry</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>First Name</label>
                    <input type="text" className="input-field" required onInput={(e) => e.target.value = e.target.value.replace(/[0-9]/g, '')} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Last Name</label>
                    <input type="text" className="input-field" required onInput={(e) => e.target.value = e.target.value.replace(/[0-9]/g, '')} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Email Address</label>
                  <input type="email" className="input-field" required />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Subject of Inquiry</label>
                  <select className="input-field">
                    <option>Diagnostic Audit</option>
                    <option>Corporate Shielding</option>
                    <option>Hex / Entity Removal</option>
                    <option>General Support</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Message (Secure)</label>
                  <textarea className="input-field" rows="5" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', marginTop: '1rem' }}>
                  Send Confidential Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* The Consultation Roadmap */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 8rem 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ color: 'var(--color-navy-dark)' }}>The Consultation Process</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              We respect the time of our high-net-worth clients. Our intake process is streamlined, secure, and entirely discreet.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', position: 'relative' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'rgba(0, 0, 0, 0.03)', padding: '3rem 2rem', borderRadius: '1.5rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', position: 'relative', zIndex: 2 }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(44, 94, 173, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
                <FileCheck color="var(--color-gold)" size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>1. Encrypted Review</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Your inquiry is securely reviewed by our Senior Concierge under absolute NDA.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'rgba(0, 0, 0, 0.03)', padding: '3rem 2rem', borderRadius: '1.5rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', position: 'relative', zIndex: 2 }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(44, 94, 173, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
                <Search color="var(--color-gold)" size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>2. Energetic Diagnostics</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>We conduct a preliminary remote scan to assess your current auric state and blockages.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ background: 'rgba(0, 0, 0, 0.03)', padding: '3rem 2rem', borderRadius: '1.5rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', position: 'relative', zIndex: 2 }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', boxShadow: '0 10px 20px rgba(44, 94, 173, 0.4)' }}>
                <Video color="var(--color-navy-dark)" size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>3. Private Session</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>A secure 1-on-1 consultation to deliver your bespoke strategy and energetic clearing.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Map Section - Interactive */}
      <section className="section" style={{ padding: '2rem 1rem 4rem 1rem', backgroundColor: 'var(--color-off-white)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '95%', maxWidth: '1400px', height: '600px', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 12px 35px rgba(0,0,0,0.1)' }}>
          <AnimatedMap address="702 Twin Oaks Dr apt 2, Decatur, GA 30030" style={{ width: '100%', height: '100%' }} />
        </div>
      </section>

      {/* Booking & Support FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '4rem 0 8rem 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', color: 'var(--color-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Booking & Support
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-navy-dark)' }}>Common Inquiries</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FAQ />
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default Contact;

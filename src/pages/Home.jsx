import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Star, Moon, Crown, ArrowRight, CheckCircle2, MapPin, Eye, Compass, Award, Globe, TrendingUp, ShieldCheck, X } from 'lucide-react';
import { categories, services } from '../data/services';
const ZodiacWheel = React.lazy(() => import('../components/ZodiacWheel'));
const AccordionGallery = React.lazy(() => import('../components/AccordionGallery'));
const FAQ = React.lazy(() => import('../components/FAQ'));
const QuantumProcess = React.lazy(() => import('../components/QuantumProcess'));
import SEO from "../components/SEO";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildPersonSchema,
  buildWebsiteSchema,
} from "../schema";

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

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);
  const heroTexts = [
    {
      text: "Love Solutions in 24 Hours",
      color: "var(--gradient-primary)",
      subtext: "Experience immediate, guaranteed relationship restoration. We utilize powerful spiritual alignments to bring back lost love and heal broken bonds within a single day.",
      image: "/images/Psychic Charan Bn - 2.webp"
    },
    {
      text: "Powerful Jinn Removal",
      color: "var(--gradient-accent)",
      subtext: "Safeguard your life, home, and energy from unseen, malicious entities. Our expert spiritual evictions provide instant relief from dark forces and paranormal disturbances.",
      image: "/images/Psychic Charan Bn - 3.webp"
    },
    {
      text: "Deep Love Compatibility",
      color: "var(--gradient-gold)",
      subtext: "Discover the profound karmic purpose you share with your partner. We decode astrological synastry to reveal soulmate connections and permanently clear relationship blockages.",
      image: "/images/Psychic Charan Bn- 1.webp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-in-page">
      <SEO
        title="Psychic Charan | Trusted Psychic Reader in Duluth, GA"
        description="Professional psychic readings, tarot, astrology, spiritual healing, love guidance, chakra balancing, aura cleansing, and relationship advice from Psychic Charan."
        keywords="psychic, psychic reader, tarot reading, astrologer, spiritual healer, chakra balancing, aura cleansing, duluth ga psychic"
        canonical="/"
        schema={[
          buildLocalBusinessSchema(),
          buildOrganizationSchema(),
          buildPersonSchema(),
          buildWebsiteSchema(),
        ]}
      />

      {/* Hero Section */}
      <section className="section mobile-p-sm mobile-pt-sm" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '0' }}>
        <div className="container mobile-col mobile-text-center mobile-gap-sm" style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
          <motion.div variants={fadeInUp} style={{ flex: 1, width: '100%' }}>
            <h1 className="mobile-h1" style={{ fontSize: '4.5rem', marginTop: '2.5rem', marginBottom: '2rem', minHeight: '140px', lineHeight: '1.2' }}>
              Expert <br />
              <div style={{ display: 'flex', minHeight: '180px', alignItems: 'flex-start', position: 'relative' }}>
                {heroTexts.map((item, index) => (
                  <span
                    key={index}
                    style={{
                      position: index === 0 ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      background: item.color,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      display: 'inline-block',
                      opacity: currentText === index ? 1 : 0,
                      transform: currentText === index ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                      pointerEvents: currentText === index ? 'auto' : 'none'
                    }}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </h1>
            <div style={{ display: 'flex', minHeight: '150px', marginBottom: '2rem', alignItems: 'flex-start', position: 'relative' }}>
              {heroTexts.map((item, index) => (
                <p
                  key={index}
                  style={{ 
                    position: index === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    fontSize: '1.25rem', 
                    maxWidth: '600px', 
                    margin: 0, 
                    lineHeight: '1.6',
                    opacity: currentText === index ? 1 : 0,
                    transform: currentText === index ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                    pointerEvents: currentText === index ? 'auto' : 'none'
                  }}
                >
                  {item.subtext}
                </p>
              ))}
            </div>
            <div className="mobile-col" style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/services" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                Our Philosophy
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mobile-col mobile-gap-sm" style={{ display: 'flex', gap: '2rem', marginTop: '4rem', color: 'var(--color-text-muted)', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 color="var(--color-emerald)" /> <span>15+ Years Elite Experience</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 color="var(--color-emerald)" /> <span>Strict Client Confidentiality</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mobile-w-full" style={{ flex: 1, position: 'relative' }}>
            {/* Beautiful Abstract Visual */}
            <div className="mobile-hero-visual" style={{ position: 'relative', height: '600px', minHeight: '450px', width: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              
              {/* Floating Image corresponding to text */}
              <div style={{ position: 'absolute', inset: 0 }}>
                {heroTexts.map((item, index) => (
                  <div
                    key={index}
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      width: '100%', 
                      height: '100%',
                      opacity: currentText === index ? 1 : 0,
                      transition: 'opacity 0.6s ease-out'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.text}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={index === 0 ? "hero-img-animate" : ""}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Floating Glass Card */}
              <motion.div
                className="glass-panel hero-glass-card"
                style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield color="white" />
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '0.2rem' }}>Aura Shield Active</h4>
                  <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '0.9rem' }}>Protecting 10,000+ global clients.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* As Featured In */}
      <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)', padding: '3rem 0', borderBottom: '1px solid var(--color-light-gray)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className="mobile-text-center" style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', letterSpacing: '1px', color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontWeight: '600' }}>
            Trusted by the Elite. As Featured In:
          </p>
          <div className="mobile-gap-sm" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.6, filter: 'grayscale(100%)' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif' }}>FORBES</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif' }}>VOGUE</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center' }}>THE WALL STREET JOURNAL</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif' }}>GQ</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif' }}>BLOOMBERG</span>
          </div>
        </div>
      </section>

      {/* Our Services - Zodiac Layout */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', paddingTop: '2rem' }}>
        <div className="container">
          <motion.div variants={fadeInUp} className="section-title" style={{ marginBottom: '4rem', textAlign: 'center', fontSize: '3rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px' }}>
            Our Services
          </motion.div>

          <div className="mobile-col mobile-gap-sm" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>

            {/* Left Column */}
            <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1, minWidth: '300px' }}>
              {services.slice(0, 3).map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  style={{
                    padding: '2rem',
                    background: 'rgba(0, 0, 0, 0.03)',
                    borderRadius: '0.5rem',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.08)',
                    textAlign: 'center',
                    border: '1px solid var(--color-light-gray)',
                    cursor: 'pointer'
                  }}
                  whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(21, 145, 220, 0.15)' }}
                  onClick={() => setSelectedService(service)}
                >
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-navy-dark)' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>{service.shortDescription}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Center Zodiac Wheel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{ flex: '0 0 auto', padding: '1rem', display: 'flex', justifyContent: 'center' }}
            >
              <React.Suspense fallback={<div style={{height: '300px'}}></div>}>
                <ZodiacWheel />
              </React.Suspense>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1, minWidth: '300px' }}>
              {services.slice(3, 6).map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  style={{
                    padding: '2rem',
                    background: 'rgba(0, 0, 0, 0.03)',
                    borderRadius: '0.5rem',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.08)',
                    textAlign: 'center',
                    border: '1px solid var(--color-light-gray)',
                    cursor: 'pointer'
                  }}
                  whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(21, 145, 220, 0.15)' }}
                  onClick={() => setSelectedService(service)}
                >
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-navy-dark)' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>{service.shortDescription}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Highlighted USA Locations */}
      <section className="section mobile-p-sm" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 6rem 0' }}>
        <div className="container">
          <motion.div variants={fadeInUp} className="section-title" style={{ marginBottom: '4rem', textAlign: 'center', fontSize: '3rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px' }}>
            Exclusive Consultations In
          </motion.div>
          <motion.div variants={fadeInUp}>
            <React.Suspense fallback={<div style={{height: '400px'}}></div>}>
              <AccordionGallery />
            </React.Suspense>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ 
          backgroundColor: 'var(--color-off-white)', 
          color: 'var(--color-navy-dark)', 
          padding: '2rem 0 8rem 0', 
          position: 'relative', 
          overflow: 'hidden',
          backgroundImage: 'url("https://images.unsplash.com/photo-1603504343118-09f1828f7d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
      }}>
        {/* Dark overlay to ensure text readability */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.85)', pointerEvents: 'none' }}></div>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(44, 94, 173, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            
            <motion.div 
                variants={fadeInUp} 
                whileHover={{ y: -10, borderColor: 'rgba(44, 94, 173, 0.4)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                style={{ 
                    background: 'rgba(0, 0, 0, 0.02)', 
                    border: '1px solid rgba(0, 0, 0, 0.05)', 
                    borderRadius: '1.5rem', 
                    padding: '3rem 2rem',
                    transition: 'all 0.4s ease'
                }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Award color="var(--color-gold)" size={36} opacity={0.8} />
              </div>
              <div className="text-gradient-gold" style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '0.5rem', lineHeight: '1' }}>15+</div>
              <p style={{ color: 'var(--color-navy-dark)', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Years of Excellence</p>
              <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem', lineHeight: '1.5' }}>Mastery in esoteric strategy and alignment.</p>
            </motion.div>

            <motion.div 
                variants={fadeInUp} 
                whileHover={{ y: -10, borderColor: 'rgba(44, 94, 173, 0.4)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                style={{ 
                    background: 'rgba(0, 0, 0, 0.02)', 
                    border: '1px solid rgba(0, 0, 0, 0.05)', 
                    borderRadius: '1.5rem', 
                    padding: '3rem 2rem',
                    transition: 'all 0.4s ease'
                }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Globe color="var(--color-gold)" size={36} opacity={0.8} />
              </div>
              <div className="text-gradient-gold" style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '0.5rem', lineHeight: '1' }}>10k</div>
              <p style={{ color: 'var(--color-navy-dark)', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Global Clients</p>
              <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem', lineHeight: '1.5' }}>Trusted by leaders across 40+ countries.</p>
            </motion.div>

            <motion.div 
                variants={fadeInUp} 
                whileHover={{ y: -10, borderColor: 'rgba(44, 94, 173, 0.4)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                style={{ 
                    background: 'rgba(0, 0, 0, 0.02)', 
                    border: '1px solid rgba(0, 0, 0, 0.05)', 
                    borderRadius: '1.5rem', 
                    padding: '3rem 2rem',
                    transition: 'all 0.4s ease'
                }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <TrendingUp color="var(--color-gold)" size={36} opacity={0.8} />
              </div>
              <div className="text-gradient-gold" style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '0.5rem', lineHeight: '1' }}>99%</div>
              <p style={{ color: 'var(--color-navy-dark)', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Success Rate</p>
              <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem', lineHeight: '1.5' }}>Unprecedented results in karmic clearing.</p>
            </motion.div>

            <motion.div 
                variants={fadeInUp} 
                whileHover={{ y: -10, borderColor: 'rgba(44, 94, 173, 0.4)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                style={{ 
                    background: 'rgba(0, 0, 0, 0.02)', 
                    border: '1px solid rgba(0, 0, 0, 0.05)', 
                    borderRadius: '1.5rem', 
                    padding: '3rem 2rem',
                    transition: 'all 0.4s ease'
                }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShieldCheck color="var(--color-gold)" size={36} opacity={0.8} />
              </div>
              <div className="text-gradient-gold" style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '0.5rem', lineHeight: '1' }}>24/7</div>
              <p style={{ color: 'var(--color-navy-dark)', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Vedic Protection</p>
              <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem', lineHeight: '1.5' }}>Continuous auric shielding for VIPs.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Quantum Process Section */}
      <React.Suspense fallback={<div style={{height: '600px'}}></div>}>
        <QuantumProcess />
      </React.Suspense>
      {/* VIP Testimonials */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 8rem 0', backgroundImage: 'radial-gradient(circle at top, rgba(21, 145, 220,0.15) 0%, transparent 60%)' }}>
        <div className="container">
          <motion.div variants={fadeInUp} className="section-subtitle" style={{ textAlign: 'center', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
            Client Success
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title" style={{ marginBottom: '5rem', textAlign: 'center', color: 'var(--color-navy-dark)' }}>
            Words from the Elite
          </motion.h2>

          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {[
              { 
                quote: "After months of unexplainable setbacks in my real estate firm, their quantum audit identified a generational block. Within 30 days of the clearing, we closed our biggest deal to date. Absolute mastery.",
                author: "Alexander Rothschild",
                title: "CEO, Beverly Hills",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              },
              { 
                quote: "The energetic sovereignty shield they installed is palpable. The chaotic energy that was draining my health vanished overnight. I feel completely untouchable.",
                author: "Marcus Kane",
                title: "Tech Founder, Silicon Valley",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              },
              { 
                quote: "Their Vedic decoding of my destiny path was terrifyingly accurate. They aligned my cosmic timing perfectly. Highly recommended for anyone operating at a high level.",
                author: "Sophia Vance",
                title: "Hedge Fund Manager, NY",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="glass-panel"
                style={{ 
                  padding: '3rem 2rem', 
                  borderRadius: '1rem',
                  border: '1px solid rgba(44, 94, 173, 0.2)',
                  background: 'rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
                whileHover={{ y: -10, borderColor: 'var(--color-gold)', boxShadow: '0 20px 40px rgba(44, 94, 173, 0.1)' }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem' }}>
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="var(--color-gold)" color="var(--color-gold)" />)}
                  </div>
                  <p style={{ color: 'var(--color-light-gray)', fontSize: '1.1rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '2rem' }}>
                    "{testimonial.quote}"
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    loading="lazy"
                    width="50"
                    height="50"
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-gold)' }}
                  />
                  <div>
                    <div style={{ color: 'var(--color-navy-dark)', fontWeight: '600' }}>{testimonial.author}</div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}

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
            <React.Suspense fallback={<div style={{height: '300px'}}></div>}>
              <FAQ />
            </React.Suspense>
          </motion.div>
        </div>
      </section>

      {/* Inner Circle Opt-In */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(44, 94, 173, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <motion.div variants={fadeInUp}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(44, 94, 173, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Crown color="var(--color-gold)" size={28} />
              </div>
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Join The Inner Circle</h2>
            <p style={{ color: 'var(--color-light-gray)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
              Receive proprietary Vedic insights, energetic forecasts, and elite protection protocols delivered exclusively to your private inbox.
            </p>
            
            <form style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your private email address..." 
                style={{
                  padding: '1rem 1.5rem',
                  fontSize: '1.1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(0,0,0,0.2)',
                  background: 'rgba(0, 0, 0, 0.05)',
                  color: 'var(--color-navy-dark)',
                  width: '100%',
                  maxWidth: '400px',
                  outline: 'none'
                }}
              />
              <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Request Access</button>
            </form>
            <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.85rem', marginTop: '1.5rem' }}>
              Your privacy is absolute. We never share your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(8px)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  maxWidth: '900px',
                  width: '100%',
                  maxHeight: '90vh',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 2,
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <X color="var(--color-white)" />
                </button>

                <div style={{ position: 'relative', height: '300px', flexShrink: 0, backgroundColor: 'var(--color-navy-dark)' }}>
                  <img src={selectedService.image} alt={selectedService.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <div style={{ padding: '2rem 2rem 0 2rem' }}>
                  <h3 style={{ color: 'var(--color-navy-dark)', fontSize: '2.5rem', margin: 0 }}>
                    {selectedService.title}
                  </h3>
                </div>

                <div style={{ padding: '2rem', overflowY: 'auto' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                    {selectedService.longDescription}
                  </p>

                  <h4 style={{ fontSize: '1.2rem', color: 'var(--color-navy-dark)', marginBottom: '1rem' }}>Key Benefits</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2rem' }}>
                    {selectedService.benefits.map((benefit, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <CheckCircle2 color="var(--color-gold)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: 'var(--color-text-muted)' }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to={`/services#${selectedService.id}`} onClick={() => setSelectedService(null)} className="btn btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                      Learn More
                    </Link>
                    <Link to="/contact" onClick={() => setSelectedService(null)} className="btn btn-secondary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Home;

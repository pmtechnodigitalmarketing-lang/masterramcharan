import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Shield, Heart, Briefcase, Zap, Moon, Compass, Sparkles, Gem, Home, Activity, Lock, Eye, Sun, User, Users, Feather, Crosshair, ArrowRight, ArrowLeft } from 'lucide-react';

const services = [
  { id: 'vedic-astrology', name: 'Vedic Astrology', image: '/images/Unlocking the Power of Mantras in Vedic Astrology_ Elevate Your Consciousness and Heal Your Mind.webp', objectPosition: 'center top', desc: 'Deep dive into your natal chart using ancient Indian astrological systems.' },
  { id: 'astrocartography', name: 'Astrocartography', image: '/images/Birth Chart Analysis Online - Unlock Your Career and Life Path.webp', desc: 'Find your power lines and optimal geographic locations for success.' },
  { id: 'karma-clearing', name: 'Karma Clearing', image: '/images/This item is unavailable - Etsy (1).webp', desc: 'Release ancestral cycles and remove deep-rooted karmic blocks.' },
  { id: 'twin-flame-reading', name: 'Twin Flame Reading', image: '/images/Twin Flame & Soulmate 2026 Forecast - Love Energy Reading - Divine Connection Insight - Personali___.webp', desc: 'Understand your soul contracts and romantic compatibility dynamics.' },
  { id: 'blockage-removal', name: 'Blockage Removal', image: '/images/Bad Karma Removal Spell – Reclaim Balance and Clear Blockages.webp', desc: 'Eradicate energetic stagnation preventing your personal growth.' },
  { id: 'abundance-alignment', name: 'Abundance Alignment', image: '/images/1147855023800006330.webp', desc: 'Align your auric frequency with wealth, success, and prosperity.' },
  { id: 'hex-removal', name: 'Hex Removal', image: '/images/✨ Gideni Geri Getirme Ritüeliyle Aşkı Yeniden Kazan ✨.webp', desc: 'Comprehensive protection and removal of dark spiritual interference.' },
  { id: 'spiritual-awakening', name: 'Spiritual Awakening', image: '/images/Embracing Oneness.webp', desc: 'Guidance through your dark night of the soul into enlightenment.' },
  { id: 'corporate-astrology', name: 'Corporate Astrology', image: '/images/Renowned Astrologer in Kolkata – Anjan Shastri\'s Trusted Guidance.webp', desc: 'Strategic cosmic timing for product launches and business scaling.' },
  { id: 'medical-astrology', name: 'Medical Astrology', image: '/images/Medicina Antroposófica.webp', desc: 'Identify energetic health dispositions and holistic remedies.' },
  { id: 'chakra-balancing', name: 'Chakra Balancing', image: '/images/37084396930851691.webp', desc: 'Total realignment and clearing of your 7 primary energy centers.' },
  { id: 'past-life-regression', name: 'Past Life Regression', image: '/images/Past life regressionist.webp', desc: 'Access the Akashic records to uncover your past incarnations.' },
  { id: 'tarot-divination', name: 'Tarot Divination', image: '/images/Using Tarot Spreads for Specific Questions and Situations _ Embark on a Spiritual Journey_ Transf___.webp', desc: 'Direct, channeled guidance using premium esoteric tarot decks.' },
  { id: 'real-estate-astrology', name: 'Real Estate Astrology', image: '/images/Aries Building Your Wealth Foundation – April 1….webp', desc: 'Find energetically optimal properties for purchase or development.' },
  { id: 'gemstone-prescription', name: 'Gemstone Prescription', image: '/images/gemstone-recommendation.webp', desc: 'Specific, high-frequency crystal recommendations to enhance your chart.' },
  { id: 'numerology-analysis', name: 'Numerology Analysis', image: '/images/Unlocking the Hidden Codes of Life_ A Deep Dive___.webp', desc: 'Decode the esoteric vibrations of your birth date and given name.' },
  { id: 'vastu-shastra', name: 'Vastu Shastra', image: '/images/53761789299275795.webp', desc: 'Optimize the spatial geometry and energy flow of your residence.' },
  { id: 'evil-eye-protection', name: 'Evil Eye Protection', image: '/images/Evil Eye Protection by fineartspro.webp', desc: 'Install impenetrable psychic wards against jealousy and ill-will.' },
  { id: 'aura-cleansing', name: 'Aura Cleansing', image: '/images/discover-personal-energy.webp', desc: 'Remove spiritual parasites and patch tears in your auric field.' },
  { id: 'marriage-matching', name: 'Marriage Matching', image: '/images/989243874406593923.webp', desc: 'Comprehensive synastry readings for lifelong partnership alignment.' }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const StateServices = () => {
  const { stateId } = useParams();
  
  // Format the state name (e.g., "new-york" -> "New York")
  const formattedStateName = stateId 
    ? stateId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Your Location';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" exit="hidden" style={{ minHeight: '100vh', backgroundColor: 'var(--color-off-white)' }}>
      
      {/* Header */}
      <section style={{ backgroundColor: 'var(--color-navy-dark)', padding: '8rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container">
          <Link to="/find-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', textDecoration: 'none', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <ArrowLeft size={16} /> Back to Locations
          </Link>
          <motion.div variants={fadeInUp}>
            <h1 style={{ fontSize: '3.5rem', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
              Services in <span className="text-gradient-gold">{formattedStateName}</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Experience elite esoteric guidance and proprietary energetic clearings from the comfort of {formattedStateName}. Select a service below to begin your transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4x5 Grid Section */}
      <section className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <motion.div variants={staggerContainer} className="services-grid-4x5">
            {services.map((service, i) => {
              return (
                <motion.div key={i} variants={fadeInUp} style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '0 0 2rem 0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => { 
                  e.currentTarget.style.transform = 'translateY(-5px)'; 
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(44, 94, 173, 0.1)'; 
                  e.currentTarget.querySelector('.service-image').style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => { 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)'; 
                  e.currentTarget.querySelector('.service-image').style.transform = 'scale(1)';
                }}
                >
                  <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '1.5rem', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="service-image mobile-img-animate"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: service.objectPosition || 'center', transition: 'transform 0.5s ease' }} 
                      loading="lazy" 
                    />
                  </div>
                  <div style={{ padding: '0 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, width: '100%' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-dark)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
                      {service.name}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                      {service.desc}
                    </p>
                    
                    <Link to={`/services/${service.id}`} style={{ 
                      marginTop: 'auto',
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      color: 'var(--color-primary)', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Full Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Fallback CSS for Grid Responsiveness since inline media queries don't work directly on style prop */}
          <style>{`
            .services-grid-4x5 {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 2rem;
            }
            @media (max-width: 1100px) {
              .services-grid-4x5 { grid-template-columns: repeat(3, 1fr); }
            }
            @media (max-width: 800px) {
              .services-grid-4x5 { grid-template-columns: repeat(2, 1fr); }
              .mobile-img-animate {
                animation: mobileImgZoom 15s infinite alternate ease-in-out;
              }
            }
            @media (max-width: 500px) {
              .services-grid-4x5 { grid-template-columns: repeat(1, 1fr); }
            }

            @keyframes mobileImgZoom {
              0% { transform: scale(1); }
              100% { transform: scale(1.1); }
            }
          `}</style>
        </div>
      </section>

    </motion.div>
  );
};

export default StateServices;

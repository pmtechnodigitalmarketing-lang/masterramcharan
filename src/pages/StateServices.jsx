import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m as motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { services } from '../data/services';
import SEO from '../components/SEO';
import { buildBreadcrumbSchema } from '../schema';

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
      <SEO
        title={`Psychic Services in ${formattedStateName} | Psychic Charan`}
        description={`Elite esoteric guidance and proprietary energetic clearings for clients in ${formattedStateName}. Explore our full range of spiritual consulting services.`}
        canonical={`/location/${stateId}`}
        schema={[
          buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Find Us', url: '/find-us' },
            { name: formattedStateName, url: `/location/${stateId}` },
          ]),
        ]}
      />

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
            {services.map((service) => {
              return (
                <motion.div key={service.id} variants={fadeInUp} style={{
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
                      alt={service.title}
                      className="service-image mobile-img-animate"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ padding: '0 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, width: '100%' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-dark)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                      {service.shortDescription}
                    </p>

                    <Link to={`/services/${service.id}`} aria-label={`Full details about ${service.title}`} style={{
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

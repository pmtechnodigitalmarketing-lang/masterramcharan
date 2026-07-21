import React, { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { m as motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';
import { CheckCircle2, ArrowLeft, ShieldCheck, Star, ArrowRight, ChevronDown, HelpCircle, Users, Quote, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '../schema';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.02)', border: '1px solid rgba(0, 0, 0, 0.05)', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'transparent', border: 'none', color: 'var(--color-navy-dark)', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left' }}
      >
        {question}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown color="var(--color-gold)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--color-light-gray)', lineHeight: '1.6' }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/404" />;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundColor: 'var(--color-off-white)', color: 'var(--color-navy-dark)' }}>
      <SEO
        title={`${service.title} | Psychic Charan`}
        description={service.shortDescription}
        canonical={`/services/${service.id}`}
        image={service.image}
        imageAlt={service.title}
        schema={[
          buildServiceSchema(service),
          buildFaqSchema(service.faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: service.title, url: `/services/${service.id}` },
          ]),
        ]}
      />

      {/* Split Layout Hero */}
      <section className="section mobile-p-sm" style={{ padding: '6rem 0 2rem 0', background: 'linear-gradient(135deg, #f8f7fa 0%, #ffffff 100%)' }}>
        <div className="container mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
          
          <div style={{ zIndex: 2 }}>
            <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', padding: 0 }}>
              <ArrowLeft size={16} /> Return to Operations
            </button>
            
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(44, 94, 173, 0.1)', color: 'var(--color-gold)', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(44, 94, 173, 0.2)' }}>
                ELITE PROTOCOL
              </span>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(0, 0, 0, 0.03)', color: 'var(--color-navy-dark)', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                VERIFIED EXPERTS
              </span>
            </motion.div>

            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', lineHeight: '1.1', color: 'var(--color-navy-dark)' }}>
              {service.title}
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} style={{ fontSize: '1.25rem', color: 'var(--color-on-surface-variant)', lineHeight: '1.6', marginBottom: '2rem' }}>
              {service.longDescription.split('\n')[0]}
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <a href="#booking" className="btn" style={{ backgroundColor: 'var(--color-gold)', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '2rem', textDecoration: 'none', boxShadow: '0 4px 15px rgba(44, 94, 173, 0.4)' }}>
                Request Immediate Intervention <ArrowRight size={18} />
              </a>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+14704611807" className="btn" style={{ backgroundColor: 'transparent', color: 'var(--color-navy-dark)', border: '2px solid var(--color-navy-dark)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '2rem', textDecoration: 'none' }}>
                  <Phone size={18} /> Call Now
                </a>
                <a href="https://wa.me/14704611807" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '2rem', textDecoration: 'none', border: '2px solid #25D366' }}>
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ marginTop: '3rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
                
                {/* Stats / Social Proof Row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', marginRight: '1rem' }}>
                            {['SJ', 'MK', 'DR', 'AL'].map((initials, i) => (
                                <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid white', marginLeft: i === 0 ? '0' : '-15px', position: 'relative', zIndex: 5 - i, backgroundColor: i % 2 === 0 ? 'var(--color-gold)' : 'var(--color-navy-dark)', color: i % 2 === 0 ? 'var(--color-navy-dark)' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                    {initials}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div style={{ display: 'flex', gap: '2px', color: 'var(--color-gold)', marginBottom: '4px' }}>
                                <Star size={14} fill="var(--color-gold)" /><Star size={14} fill="var(--color-gold)" /><Star size={14} fill="var(--color-gold)" /><Star size={14} fill="var(--color-gold)" /><Star size={14} fill="var(--color-gold)" />
                            </div>
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-light-gray)', fontWeight: 'bold' }}>Trusted by 10,000+ Clients</span>
                        </div>
                    </div>

                    <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(0,0,0,0.1)' }} className="hide-on-mobile"></div>

                    <div>
                        <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-navy-dark)', fontFamily: 'var(--font-heading)', lineHeight: '1', marginBottom: '4px' }}>99.8%</p>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-light-gray)', fontWeight: 'bold' }}>Success Resolution Rate</span>
                    </div>
                </div>

                {/* Trust Signals */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.02)', padding: '0.6rem 1.2rem', borderRadius: '2rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <ShieldCheck color="var(--color-gold)" size={18} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>100% Confidential</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.02)', padding: '0.6rem 1.2rem', borderRadius: '2rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <Star color="var(--color-gold)" size={18} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>Elite Practitioners</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.02)', padding: '0.6rem 1.2rem', borderRadius: '2rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <CheckCircle2 color="var(--color-gold)" size={18} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>Priority Booking</span>
                    </div>
                </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ position: 'relative', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', aspectRatio: '4/5' }}
          >
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {/* Subtle inner shadow overlay */}
            <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)' }}></div>
          </motion.div>

        </div>
      </section>

      {/* Protocol Deep Dive & Benefits */}
      <section className="section" style={{ padding: '3rem 0', position: 'relative' }}>
        <div className="container">
            <div className="mobile-grid-1 mobile-gap-sm" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
                
                {/* Left Column: Long Description */}
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Understanding the Protocol</h2>
                    <div style={{ fontSize: '1.1rem', color: 'var(--color-light-gray)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {service.longDescription.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} style={{ margin: 0 }}>{paragraph}</p>
                        ))}
                    </div>
                    
                    {/* Who is this for section */}
                    {service.whoIsThisFor && (
                      <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(44, 94, 173, 0.05)', borderRadius: '1rem', borderLeft: '4px solid var(--color-gold)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                          <Users color="var(--color-gold)" size={24} />
                          <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', margin: 0, color: 'var(--color-navy-dark)' }}>Who is this for?</h3>
                        </div>
                        <p style={{ margin: 0, color: 'var(--color-light-gray)', lineHeight: '1.6' }}>{service.whoIsThisFor}</p>
                      </div>
                    )}

                    <div style={{ marginTop: '3rem' }}>
                       <a href="#booking" className="btn" style={{ backgroundColor: 'var(--color-navy-dark)', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
                         Start Your Consultation <ArrowRight size={18} />
                       </a>
                    </div>
                </div>

                {/* Right Column: Benefits & Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ background: 'white', border: '1px solid rgba(0,0,0,0.05)', padding: '3rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--color-gold), transparent)' }}></div>
                        <ShieldCheck color="var(--color-gold)" size={40} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>Key Transformations</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {service.benefits.map((benefit, i) => (
                                <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--color-light-gray)', alignItems: 'flex-start' }}>
                                    <CheckCircle2 color="var(--color-gold)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} /> 
                                    <span style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Consultation Details Box to fill space */}
                    <div style={{ background: 'rgba(0, 0, 0, 0.02)', border: '1px solid rgba(0,0,0,0.05)', padding: '2.5rem', borderRadius: '1.5rem' }}>
                       <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', color: 'var(--color-navy-dark)' }}>Consultation Details</h3>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-light-gray)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.8rem' }}>
                             <span>Format</span>
                             <span style={{ fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>Secure Video/Audio Call</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.8rem' }}>
                             <span>Duration</span>
                             <span style={{ fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>60 - 90 Minutes</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.8rem' }}>
                             <span>Confidentiality</span>
                             <span style={{ fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>100% Non-Disclosure</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                             <span>Post-Session</span>
                             <span style={{ fontWeight: 'bold', color: 'var(--color-navy-dark)' }}>Custom Action Plan</span>
                          </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Case Study / Social Proof */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="section" style={{ backgroundColor: 'var(--color-navy-dark)', color: 'white', padding: '4rem 0' }}>
          <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>Client Transformations</h2>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Real results from our {service.title} protocol.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {service.testimonials.map((testimonial, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Quote color="var(--color-gold)" size={32} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem' }}>
                          {[1,2,3,4,5].map(i => <Star key={i} color="var(--color-gold)" fill="var(--color-gold)" size={16} />)}
                      </div>
                      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
                          "{testimonial.quote}"
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy-dark)', fontWeight: 'bold' }}>
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                              <p style={{ fontWeight: 'bold', margin: 0 }}>{testimonial.name}</p>
                              <p style={{ color: 'var(--color-gold)', margin: 0, fontSize: '0.85rem' }}>{testimonial.title}</p>
                          </div>
                      </div>
                  </div>
                ))}
              </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section" style={{ padding: '4rem 0 2rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <HelpCircle color="var(--color-gold)" size={40} style={{ marginBottom: '1rem', margin: '0 auto' }} />
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy-dark)' }}>Frequently Asked Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {service.faqs.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.q} answer={faq.a} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Form */}
      <section id="booking" className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '6rem 0' }}>
        <div className="container">
            <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                
                {/* Left Side: Info */}
                <div>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy-dark)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Ready to <span style={{ color: 'var(--color-gold)' }}>Initiate</span> the Protocol?
                    </h2>
                    <p style={{ color: 'var(--color-light-gray)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                        Submit your details via our encrypted portal. Due to the high demand for {service.title.toLowerCase()}, our experts take a limited number of clients per month to ensure the highest quality of spiritual intervention. An agent will contact you within 2 hours to confirm your slot.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'rgba(44, 94, 173, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                                <ShieldCheck color="var(--color-gold)" size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', margin: '0 0 0.5rem 0', color: 'var(--color-navy-dark)' }}>Bank-Grade Encryption</h4>
                                <p style={{ margin: 0, color: 'var(--color-light-gray)', fontSize: '0.95rem', lineHeight: '1.5' }}>Your personal details and situation are protected by AES-256 military-grade encryption.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'rgba(44, 94, 173, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                                <Users color="var(--color-gold)" size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', margin: '0 0 0.5rem 0', color: 'var(--color-navy-dark)' }}>Dedicated Agent</h4>
                                <p style={{ margin: 0, color: 'var(--color-light-gray)', fontSize: '0.95rem', lineHeight: '1.5' }}>You will be assigned a personal liaison to guide you through the entire process from start to finish.</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* Right Side: Form */}
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'white', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <input type="text" placeholder="Full Name (Confidential)" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '0.5rem', color: 'var(--color-navy-dark)', outline: 'none' }} required onInput={(e) => e.target.value = e.target.value.replace(/[0-9]/g, '')} />
                        <input type="text" placeholder="Date of Birth (Optional)" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '0.5rem', color: 'var(--color-navy-dark)', outline: 'none' }} />
                    </div>
                    <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <input type="email" placeholder="Secure Email Address" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '0.5rem', color: 'var(--color-navy-dark)', outline: 'none' }} required />
                        <input type="text" placeholder="Country of Residence" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '0.5rem', color: 'var(--color-navy-dark)', outline: 'none' }} />
                    </div>
                    <textarea placeholder={`Briefly describe your situation regarding ${service.title.toLowerCase()}. (Encrypted transmission)`} rows="4" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '0.5rem', color: 'var(--color-navy-dark)', outline: 'none', resize: 'vertical' }} required></textarea>
                    
                    <button type="submit" style={{ padding: '1.2rem', background: 'var(--color-gold)', color: 'var(--color-navy-dark)', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '1rem', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseOut={e => e.currentTarget.style.filter = 'brightness(1)'}>
                        Transmit Securely
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-light-gray)', margin: 0, marginTop: '1rem' }}>Protected by MIL-SPEC encryption standards.</p>
                </form>
            </div>
        </div>
      </section>

      {/* Mobile responsiveness handling */}
      <style>{`
        @media (max-width: 900px) {
          .section > .container {
            grid-template-columns: 1fr !important;
          }
          .mobile-grid-1 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </motion.div>
  );
};

export default ServiceDetails;

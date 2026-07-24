import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Sparkles, MessageCircle, MapPin, Mail, Phone, ArrowRight, Menu, X } from 'lucide-react';
import AnimatedMap from './AnimatedMap';
import { business, mapsHref, telHref, whatsappHref, mailtoHref } from '../data/business';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Nav Styling on Scroll
  const navBackground = isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.4)';
  const navShadow = isScrolled ? '0 20px 25px -5px rgba(21, 145, 220, 0.15)' : '0 4px 6px -1px rgba(0, 0, 0, 0.0)';
  const navPadding = isScrolled ? '0.5rem 1.5rem' : '0.8rem 2rem';

  return (
    <>
      {/* Floating Contact Menu */}
      <div className="fab-stack" style={{ position: 'fixed', bottom: '2rem', right: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 999, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Link to="/find-us" className="fab-action" style={{ background: '#E53935' }} title="Location" aria-label="View our location">
            <MapPin size={22} color="white" />
          </Link>
          <a href={mailtoHref} className="fab-action" style={{ background: '#1E88E5' }} title="Email Us" aria-label="Email us">
            <Mail size={22} color="white" />
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <a href={telHref} className="fab-action" style={{ background: '#43A047' }} title="Call Us" aria-label="Call us">
            <Phone size={22} color="white" />
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="fab-action" style={{ background: '#25D366' }} title="WhatsApp" aria-label="Message us on WhatsApp">
            <MessageCircle size={28} color="white" />
          </a>
        </div>
      </div>

      {/* Announcement Bar */}
      <div style={{ background: 'var(--color-off-white)', color: 'var(--color-navy-dark)', textAlign: 'center', padding: '0.6rem', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase' }}>
        <span style={{ color: 'var(--color-gold)' }}>★</span> Elite Spiritual Consulting &mdash; Serving Clients Nationwide from Duluth, GA <span style={{ color: 'var(--color-gold)' }}>★</span>
      </div>

      {/* Navbar */}
      <div style={{ display: 'flex', justifyContent: 'center', position: 'sticky', top: '1.5rem', zIndex: 100, padding: '0 1rem' }}>
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1300px',
            borderRadius: 'var(--radius-pill)',
            background: navBackground,
            boxShadow: navShadow,
            padding: navPadding,
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(21, 145, 220, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/images/Psychic%20Charan%20Logo.webp" alt="Psychic Charan Logo" style={{ height: '60px', width: 'auto' }} />
          </Link>
          <ul className="mobile-hide" style={{ display: 'flex', gap: '3rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            <li><NavLink to="/" end className="nav-item text-link">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-item text-link">Who We Are</NavLink></li>
            <li><NavLink to="/services" className="nav-item text-link">Services</NavLink></li>
            <li><NavLink to="/find-us" className="nav-item text-link">Find Us</NavLink></li>
            <li><NavLink to="/insights" className="nav-item text-link">Insights</NavLink></li>
          </ul>
          <div className="mobile-hide" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href={telHref} className="btn btn-secondary" style={{ padding: '0.7rem 1.5rem', borderRadius: 'var(--radius-pill)', display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--color-navy-dark)', border: '1px solid var(--color-orange)' }}>
              <Phone size={18} color="var(--color-orange)" /> Call Now
            </a>
            <Link to="/contact" className="btn btn-primary btn-pulse" style={{ padding: '0.8rem 1.8rem', borderRadius: 'var(--radius-pill)' }}>
              Book Consultation
            </Link>
          </div>
          <div className="mobile-show-flex" style={{ display: 'none', alignItems: 'center' }}>
            <button onClick={() => setIsMobileMenuOpen(true)} style={{ background: 'transparent', border: 'none', color: 'var(--color-navy-dark)' }}>
              <Menu size={32} />
            </button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay hero-fade-in-up"
          style={{ animationDuration: '0.3s' }}
        >
          <button onClick={() => setIsMobileMenuOpen(false)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: 'var(--color-navy-dark)' }}>
            <X size={40} />
          </button>
          <NavLink to="/" end className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</NavLink>
          <NavLink to="/services" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
          <NavLink to="/find-us" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Find Us</NavLink>
          <NavLink to="/insights" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Insights</NavLink>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', width: '100%', maxWidth: '300px' }}>
            <Link to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '1rem', flex: 1, justifyContent: 'center' }}>Book Consultation</Link>
            <a href={telHref} className="btn btn-secondary" aria-label="Call us" style={{ padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '52px', height: '52px', flexShrink: 0 }}>
              <Phone size={22} />
            </a>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', color: 'var(--color-navy-dark)', alignItems: 'center' }}>
            <a href="#" style={{ color: 'inherit' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#" style={{ color: 'inherit' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#" style={{ color: 'inherit' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
            <a href="#" style={{ color: 'inherit' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg></a>
            <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.2)' }}></div>
            <Link to="/find-us" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'inherit' }}><MapPin size={24} /></Link>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      {/* Stunning Luxury Footer */}
      <footer style={{ marginTop: '0', backgroundColor: 'var(--color-off-white)', color: 'var(--color-navy-dark)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Background Glow */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(21, 145, 220, 0.5), transparent)' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(21, 145, 220, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

        <div className="container mobile-col mobile-p-sm mobile-gap-sm" style={{ padding: '6rem 0 4rem 0', display: 'flex', flexWrap: 'wrap', gap: '4rem', position: 'relative', zIndex: 1 }}>

          {/* Brand Column */}
          <div style={{ flex: '1 1 300px' }}>
            <Link to="/" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center' }}>
              <img src="/images/Psychic%20Charan%20Logo.webp" alt="Psychic Charan Logo" style={{ height: '80px', width: 'auto' }} />
            </Link>
            <p style={{ fontSize: '1rem', color: 'var(--color-light-gray)', lineHeight: '1.8', marginBottom: '2rem' }}>
              The premier destination for high-end spiritual consulting, karmic healing, and absolute occult protection for global leaders and visionaries.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--color-light-gray)' }}>
                <Phone size={16} color="var(--color-gold)" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <a href={telHref} style={{ fontSize: '0.9rem', color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>{business.telephoneDisplay}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--color-light-gray)' }}>
                <Mail size={16} color="var(--color-gold)" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <a href={mailtoHref} style={{ fontSize: '0.9rem', color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>{business.email}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--color-light-gray)' }}>
                <MapPin size={16} color="var(--color-gold)" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>{business.addressDisplay}</a>
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>IG</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#000000', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>X</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0077b5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>IN</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>YT</a>
            </div>
          </div>

          {/* Middle Section (Links + Wide Map) */}
          <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
              <div style={{ flex: '1 1 180px' }}>
                <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>The Agency</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                  <li><Link to="/about" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Our Philosophy</Link></li>
                  <li><Link to="/services" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Consulting Services</Link></li>
                  <li><Link to="/insights" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Cosmic Journal</Link></li>
                  <li><Link to="/find-us" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Global Sanctuaries</Link></li>
                  <li><Link to="/faq" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>FAQ</Link></li>
                  <li><Link to="/contact" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Contact / Book</Link></li>
                </ul>
              </div>

              <div style={{ flex: '1 1 180px' }}>
                <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>Our Services</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                  <li><Link to="/services/hex-removal" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Hex Removal</Link></li>
                  <li><Link to="/services/bring-your-ex-love-back" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Bring Ex Love Back</Link></li>
                  <li><Link to="/services/evil-spirits-removal" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Evil Spirits Removal</Link></li>
                  <li><Link to="/services/black-magic-removal" onClick={() => window.scrollTo(0,0)} style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-light-gray)'}>Black Magic Removal</Link></li>
                </ul>
              </div>
            </div>

            {/* Wide Footer Map */}
            <div style={{ width: '100%', height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative', border: '1px solid rgba(0, 0, 0, 0.05)', marginTop: 'auto' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.9 }}>
                <AnimatedMap address={business.addressDisplay} style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>


          {/* Newsletter Column */}
          <div style={{ flex: '1 1 300px' }}>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>Stay Connected</h4>
            <p style={{ color: 'var(--color-light-gray)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              Join our exclusive network of global leaders and visionaries. Subscribe to our highly classified newsletter to receive priority updates on global energetic shifts, rare cosmic alignments, and early access to our sovereign consulting tiers.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="email" placeholder="Your Encrypted Address" style={{ padding: '1rem', background: 'rgba(0, 0, 0, 0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', color: 'var(--color-navy-dark)', outline: 'none' }} />
              <button type="submit" style={{ padding: '1rem', background: 'var(--color-gold)', color: 'var(--color-navy-dark)', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Join The Circle <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.05)', background: 'rgba(0,0,0,0.02)' }}>
          <div className="container mobile-col mobile-text-center mobile-gap-sm" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)' }}>
            <p style={{ margin: 0 }}>&copy; 2017 {business.legalName}. Absolute Discretion Assured.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <span style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>NDA Policy</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>Terms of Engagement</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FAB CSS appended here for simplicity, typically would be in index.css */}
      <style>{`
        .fab-action {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }
        .fab-action:last-child {
          width: 60px;
          height: 60px;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
          margin-top: 0.5rem;
        }
        .fab-action:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 12px 30px rgba(0,0,0,0.5);
        }
        .nav-links a.active {
          color: var(--color-indigo);
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default Layout;

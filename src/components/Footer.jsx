import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#050A14', color: 'var(--color-light-gray)', borderTop: '1px solid rgba(0, 0, 0, 0.05)', paddingTop: '6rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>

                    {/* Brand Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <Sparkles color="var(--color-gold)" size={28} />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-navy-dark)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                Psychic Charan
                            </span>
                        </div>
                        <p style={{ lineHeight: '1.8', marginBottom: '2rem', fontSize: '0.95rem' }}>
                            The world’s premier agency for esoteric strategy, karmic alignment, and quantum energetic sovereignty. Trusted by global leaders.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', transition: 'all 0.3s ease' }}><Instagram size={18} /></a>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', transition: 'all 0.3s ease' }}><Twitter size={18} /></a>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', transition: 'all 0.3s ease' }}><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 style={{ color: 'var(--color-navy-dark)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>Exclusive Services</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><Link to="/services" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Quantum Auric Audit</Link></li>
                            <li><Link to="/services" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Black Magic Reversal</Link></li>
                            <li><Link to="/services" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Vedic Destiny Decoding</Link></li>
                            <li><Link to="/services" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Generational Hex Breaking</Link></li>
                            <li><Link to="/services" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>VIP Corporate Alignment</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 style={{ color: 'var(--color-navy-dark)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>Who We Are</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><Link to="/about" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>The Master Architect</Link></li>
                            <li><Link to="/insights" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Cosmic Insights Blog</Link></li>
                            <li><Link to="/contact" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Private Booking</Link></li>
                            <li><Link to="#" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Confidentiality Agreement</Link></li>
                            <li><Link to="#" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 style={{ color: 'var(--color-navy-dark)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>Global Headquarters</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <MapPin color="var(--color-gold)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
                                <a href="https://maps.google.com/?q=3740+Club+Dr+%232209,+Duluth,+GA+30096" target="_blank" rel="noopener noreferrer" style={{ lineHeight: '1.5', color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>3740 Club Dr #2209,<br />Duluth, GA 30096</a>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Phone color="var(--color-gold)" size={20} style={{ flexShrink: 0 }} />
                                <a href="tel:+14704611807" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>+1(470) 461-1807</a>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Mail color="var(--color-gold)" size={20} style={{ flexShrink: 0 }} />
                                <a href="mailto:Psychiccharan@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>Psychiccharan@gmail.com</a>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem', padding: '1rem', background: 'rgba(0, 0, 0, 0.03)', borderRadius: '0.5rem', border: '1px solid rgba(44, 94, 173, 0.1)' }}>
                                <Shield color="var(--color-gold)" size={20} style={{ flexShrink: 0 }} />
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-navy-dark)' }}>Encrypted & Highly Confidential</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(0, 0, 0, 0.05)', fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)' }}>
                    <p>&copy; {new Date().getFullYear()} Psychic Charan Elite Consulting. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

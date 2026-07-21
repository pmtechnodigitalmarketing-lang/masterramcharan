import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section 
            id="contact" 
            className={`contact-section fade-in ${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="contact-container glass-panel">
                <div className="contact-info">
                    <h2>Connect with the Cosmos</h2>
                    <p>Based in Berlin, serving all of Europe. Reach out to schedule your personalized astrological session.</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <Mail className="icon" size={24} style={{ color: 'var(--primary-accent)' }} /> 
                            hello@stellarvisions.eu
                        </div>
                        <div className="contact-item">
                            <Phone className="icon" size={24} style={{ color: 'var(--primary-accent)' }} /> 
                            +49 151 4567 8901
                        </div>
                        <div className="contact-item">
                            <Clock className="icon" size={24} style={{ color: 'var(--primary-accent)' }} /> 
                            Mon - Fri, 09:00 - 18:00 CET
                        </div>
                    </div>
                </div>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required placeholder="Your celestial name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required placeholder="Your astral contact" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Current City in Europe</label>
                        <input type="text" id="location" placeholder="e.g., London, UK" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="4" required placeholder="What guidance are you seeking?"></textarea>
                    </div>
                    <button type="submit" className="cta-btn primary-btn submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

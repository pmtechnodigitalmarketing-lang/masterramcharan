import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section 
            id="hero" 
            className={`hero-section fade-in ${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="hero-content">
                <div className="subtitle">Premium European Astrology</div>
                <h1 className="glow-text">Navigate Your <br/> Cosmic Destiny</h1>
                <p>Exclusive astrological consulting for European clients. Unlock the secrets written in the stars, mapped directly to your location in Europe.</p>
                <div className="hero-buttons">
                    <a href="#locations" className="cta-btn primary-btn">Astrocartography</a>
                    <a href="#contact" className="cta-btn secondary-btn">Contact Us</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="astrolabe-ring ring-1"></div>
                <div className="astrolabe-ring ring-2"></div>
                <div className="astrolabe-ring ring-3"></div>
                <div className="astrolabe-core"></div>
            </div>
        </section>
    );
};

export default Hero;

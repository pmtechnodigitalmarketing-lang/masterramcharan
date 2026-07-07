import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin } from 'lucide-react';

const locationData = [
    { city: 'London', icon: '🇬🇧', desc: 'Unlock career potential along your Midheaven lines in the UK.' },
    { city: 'Paris', icon: '🇫🇷', desc: 'Discover Venusian energy for love and creativity in France.' },
    { city: 'Berlin', icon: '🇩🇪', desc: 'Tap into Mars lines for motivation and ambitious pursuits in Germany.' },
    { city: 'Rome', icon: '🇮🇹', desc: 'Experience Jupiter lines for expansion, luck, and spiritual growth.' }
];

const Locations = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section 
            id="locations" 
            className={`zodiac-section fade-in ${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <h2 className="section-title">European Astrocartography</h2>
            <p className="section-subtitle">Discover how your cosmic lines intersect with Europe's greatest cities.</p>
            
            <div className="zodiac-grid">
                {locationData.map((item) => (
                    <div key={item.city} className="zodiac-card glass-panel">
                        <div className="zodiac-icon" style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                        <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={20} color="var(--primary-accent)"/>
                            {item.city}
                        </h3>
                        <p className="desc" style={{ marginTop: '1rem' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="center-btn">
                <a href="#contact" className="text-link">Map Your European Journey ➔</a>
            </div>
        </section>
    );
};

export default Locations;

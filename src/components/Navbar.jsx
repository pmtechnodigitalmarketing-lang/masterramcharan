import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar glass-panel">
            <div className="logo">
                <img src="/images/Psychic%20Charan%20Logo.webp" alt="Psychic Charan Logo" style={{ height: '55px', width: 'auto' }} />
            </div>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#locations">Locations</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#contact" className="cta-btn small primary-btn">Book Consultation</a>
        </nav>
    );
};

export default Navbar;

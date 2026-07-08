import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar glass-panel">
            <div className="logo">
                <Sparkles className="logo-icon" size={24} />
                <span className="logo-text">Psychic Charan</span>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10rem 1.5rem' }}
    >
      <SEO
        title="404 - Page Not Found | Psychic Charan"
        description="The page you are looking for does not exist in this timeline. It may have been moved, renamed, or never existed at all."
        noindex
      />
      <div>
        <h1 style={{ fontSize: '6rem', color: 'var(--color-indigo)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-navy-dark)', marginBottom: '1rem' }}>Cosmic Misalignment</h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
          The page you are looking for does not exist in this timeline. It may have been moved, renamed, or never existed at all.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/services" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Explore Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;

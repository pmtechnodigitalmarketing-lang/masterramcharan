import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Star, Quote } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { buildArticleSchema, buildBreadcrumbSchema } from '../schema';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
};

const featuredArticle = {
    id: 1,
    title: "The Vedic Alignment of Fortune 500 CEOs",
    excerpt: "Why the world's most powerful executives are quietly turning to ancient cosmic charting for strategic dominance, and how planetary alignments are dictating multi-billion dollar mergers.",
    category: "Corporate Mysticism",
    readTime: "8 min read",
    image: "/images/new year 2024.webp",
};

const articles = [
    {
        id: 2,
        title: "Dismantling Generational Curses in High-Net-Worth Lineages",
        excerpt: "An in-depth look at how inherited negative energy blocks wealth retention and family harmony across generations.",
        category: "Karmic Clearing",
        readTime: "12 min read",
        image: "/images/373587731612344382.webp"
    },
    {
        id: 3,
        title: "The Quantum Architecture of True Sovereignty",
        excerpt: "Understanding the energetic boundaries required to protect your empire from malicious psychic interference.",
        category: "Energetic Protection",
        readTime: "6 min read",
        image: "/images/53832158044593173.webp"
    },
    {
        id: 4,
        title: "Navigating the 2026 Saturn Transit",
        excerpt: "Prepare your physical and material assets for the upcoming astrological shift that will redefine global markets.",
        category: "Astrological Forecast",
        readTime: "10 min read",
        image: "/images/All Of The Planets That Will Retrograde In 2025 —___.webp"
    },
    {
        id: 5,
        title: "The Energetics of High-Value Relationships",
        excerpt: "How to align your auric frequency to attract and sustain elite-level romantic partnerships.",
        category: "Love & Relationships",
        readTime: "7 min read",
        image: "/images/Love Alchemy_ Discovering Compatibility in Relationships.webp"
    },
    {
        id: 6,
        title: "Karmic Reconnection: Reuniting Twin Flames",
        excerpt: "Advanced spiritual solutions and Vedic rituals used by our clients to permanently clear blockages and get their ex back.",
        category: "Love Solutions",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title: "Cleansing Cord Attachments from Past Lovers",
        excerpt: "Why lingering etheric cords from past relationships are quietly draining your energy, and the exact protocols to sever them.",
        category: "Love Solutions",
        readTime: "5 min read",
        image: "/images/How to Cut Energy Cords.webp"
    }
];

const Insights = () => {
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden" variants={staggerContainer} style={{ backgroundColor: 'var(--color-off-white)', minHeight: '100vh', color: 'var(--color-navy-dark)' }}>
      <SEO
        title="The Cosmic Journal | Insights from Psychic Charan"
        description="Proprietary insights, astrological forecasts, and case studies on energetic sovereignty from the Psychic Charan collective."
        canonical="/insights"
        schema={[
          buildArticleSchema(featuredArticle),
          buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Insights', url: '/insights' },
          ]),
        ]}
      />

      {/* Cinematic Header */}
      <section style={{ position: 'relative', padding: '5rem 0 4rem 0', overflow: 'hidden' }}>
        
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div variants={fadeInUp}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(44, 94, 173, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(44, 94, 173, 0.2)' }}>
                <Star color="var(--color-gold)" size={28} />
              </div>
            </div>
            <h1 className="mobile-h1" style={{ fontSize: '4.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy-dark)' }}>
              The Cosmic <span className="text-gradient-gold">Journal</span>
            </h1>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-light-gray)', lineHeight: '1.6' }}>
              Proprietary insights, astrological forecasts, and case studies on energetic sovereignty from the Psychic Charan collective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <motion.div variants={fadeInUp} className="featured-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', background: 'rgba(0, 0, 0, 0.02)', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(0, 0, 0, 0.05)', minHeight: '500px', cursor: 'pointer' }}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={featuredArticle.image} alt={featuredArticle.title} className="article-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
            </div>
            <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--color-off-white)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ color: 'var(--color-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>{featuredArticle.category}</span>
                    <span style={{ width: '5px', height: '5px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}></span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                        <Clock size={14} /> {featuredArticle.readTime}
                    </span>
                </div>
                <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy-dark)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                    {featuredArticle.title}
                </h2>
                <p style={{ color: 'var(--color-light-gray)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '3rem' }}>
                    {featuredArticle.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                    Read Full Case Study <ChevronRight size={18} />
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="section" style={{ padding: '4rem 0 4rem 0' }}>
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                
                {articles.map((article, i) => (
                    <motion.div variants={fadeInUp} key={article.id} className="article-card" style={{ background: 'rgba(0, 0, 0, 0.02)', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(0, 0, 0, 0.05)', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                            <img src={article.image} alt={article.title} className="article-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>{article.category}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                                    <Clock size={14} /> {article.readTime}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy-dark)', marginBottom: '1rem', lineHeight: '1.3' }}>
                                {article.title}
                            </h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                                {article.excerpt}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
                                Read Article <ChevronRight size={16} />
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
      </section>

      {/* Client Responses (Testimonials) */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)', padding: '0 0 8rem 0', position: 'relative' }}>
        <div className="container">
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'inline-block', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
                Reader Feedback
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-navy-dark)' }}>Impact of Our Insights</h2>
          </motion.div>

          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {[
              { text: "Reading the insights on Karmic clearing completely shifted my perspective on my business blockages. I booked a consultation immediately.", author: "Sarah L.", role: "Tech Founder" },
              { text: "The astrological forecast for 2026 was the most accurate breakdown I've ever read. It saved our firm millions in misaligned investments.", author: "David M.", role: "Hedge Fund Manager" },
              { text: "The relationship energetics article opened my eyes to why I kept attracting the wrong partners. Truly transformative knowledge.", author: "Jessica W.", role: "Private Client" }
            ].map((review, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.08)' }}
                style={{ 
                    background: 'rgba(0, 0, 0, 0.03)', 
                    padding: '3rem', 
                    borderRadius: '1.5rem', 
                    position: 'relative',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: '0.1' }}>
                    <Quote size={60} color="var(--color-navy-dark)" />
                </div>
                <p style={{ color: 'var(--color-navy-dark)', fontSize: '1.15rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                    "{review.text}"
                </p>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
                    <h4 style={{ color: 'var(--color-navy-dark)', fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 'bold' }}>{review.author}</h4>
                    <p style={{ color: 'var(--color-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>{review.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)', padding: '0 0 2rem 0' }}>
        <div className="container">
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', fontSize: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '1rem' }}>
                Clarity & Truth
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-navy-dark)' }}>Frequently Asked Questions</h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FAQ />
          </motion.div>
        </div>
      </section>

      {/* Internal CSS for Hover FX */}
      <style dangerouslySetInnerHTML={{__html: `
        .article-img {
            transition: transform 0.8s ease;
        }
        .featured-card:hover .article-img,
        .article-card:hover .article-img {
            transform: scale(1.05);
        }
        .featured-card {
            transition: all 0.4s ease;
        }
        .featured-card:hover {
            border-color: rgba(44, 94, 173, 0.3) !important;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .article-card {
            transition: all 0.4s ease;
        }
        .article-card:hover {
            transform: translateY(-10px);
            border-color: rgba(44, 94, 173, 0.2) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        /* Mobile fallback for featured card grid */
        @media (max-width: 992px) {
            .featured-card {
                grid-template-columns: 1fr !important;
            }
            .featured-card > div:first-child {
                height: 300px;
            }
        }
      `}} />
      
    </motion.div>
  );
};

export default Insights;

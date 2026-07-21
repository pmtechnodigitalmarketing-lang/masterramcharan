import React, { useState, useEffect, useRef } from 'react';

const LazyComponent = ({ children, fallbackHeight = '300px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { rootMargin: '400px' }); // Load chunks 400px before scrolling into view

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div ref={domRef} style={{ minHeight: isVisible ? 'auto' : fallbackHeight }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyComponent;

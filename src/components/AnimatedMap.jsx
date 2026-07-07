import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedMap = ({ address, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  // USA view (z=4)
  const urlZoomOut = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=4&ie=UTF8&iwloc=&output=embed`;
  
  // Local view (z=15 for very close zoom)
  const urlZoomIn = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div 
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
       {/* Zoomed Out Map (Always present but fades out) */}
       <motion.iframe
          src={urlZoomOut}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          title="Map Zoomed Out"
       />

       {/* Zoomed In Map */}
       <motion.iframe
          src={urlZoomIn}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, pointerEvents: isHovered ? 'auto' : 'none' }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.85 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          title="Map Zoomed In"
       />

    </div>
  );
};

export default AnimatedMap;

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAnimation = ({
  animation = 'rotate', // 'rotate' o 'slide'
  duration = 2,
  style = {},
  backgroundImage = '',
  overlayOpacity = 0.6,
}) => {
  const variants = {
    rotate: {
      initial: { rotate: 0, opacity: 0 },
      animate: { rotate: 360, opacity: 1 },
    },
    slide: {
      initial: { x: '-100vw', opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  };

  return (
    <motion.div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage, ...style }}
      initial={variants[animation].initial}
      animate={variants[animation].animate}
      transition={{ duration, ease: 'easeInOut' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
    </motion.div>
  );
};

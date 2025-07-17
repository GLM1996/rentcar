import React from 'react';
import { motion } from 'framer-motion';

export const ContentFadeIn = ({
  children,
  delay = 1.8,
  duration = 0.6,
  style = {},
  viewport = false
}) => (
  <motion.div
    className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6 gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration }}
    style={style}
    viewport={viewport}
  >
    {children}
  </motion.div>
);

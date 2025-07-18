import React from 'react';
import { motion } from 'framer-motion';

export const TextShow = ({
    children,
    delay = 0.1,
    duration = 0.6,
    viewport = true
}) => (
    <motion.div
        className="bg-neutral-100 p-2 rounded-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: duration, delay: delay }}
        viewport={{ once: viewport }}
    >
        {children}
    </motion.div>
);

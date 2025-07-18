import React from 'react';
import { motion } from 'framer-motion';

export const Imagen = ({
    children,
    delay = 0.3,
    duration = 0.6,
    viewport = true
}) => (
    <motion.div
        className="w-full rounded-full overflow-hidden mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: duration, delay: delay }}
        viewport={{ once: viewport }}
    >
        {children}
    </motion.div>
);

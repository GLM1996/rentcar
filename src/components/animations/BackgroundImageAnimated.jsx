import React from "react";
import { motion } from "framer-motion";

export default function BackgroundImageAnimated() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('/img/servicesBg.png')",
      }}
    />
  );
}

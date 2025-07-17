import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="py-16 px-6 md:px-20 overflow-hidden" id="about">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.h2
                        className="text-4xl font-bold text-red-700 mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Sobre Nosotros
                    </motion.h2>
                    <motion.p
                        className="text-white text-lg leading-relaxed mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Nuestro <span className="font-semibold text-red-900">almendrón rojo</span> no es solo un auto clásico: es una pieza viva de la historia cubana. Restaurado con amor y detalle, ofrece una experiencia auténtica por las calles de <span className="italic">Cienfuegos</span>.
                    </motion.p>

                    <motion.p
                        className="text-white text-lg leading-relaxed"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Ofrecemos <span className="font-medium">rentas con chofer</span> para paseos turísticos, bodas, eventos especiales y más. Súbete a una experiencia inolvidable, con estilo, puntualidad y el calor humano que solo Cuba puede ofrecer.
                    </motion.p>
                </div>

                {/* Imagen */}
                <motion.div
                    className="md:w-1/2 w-full rounded-full overflow-hidden shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/img/hero4.webp" // ← cambia esto por tu imagen real
                        alt="Almendrón rojo en Cienfuegos"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>
            </div>
        </section>


    )
}

import React from 'react'
import { motion } from 'framer-motion'
import CardAbout from './CardAbout'
import { Headset, Clock, MapPin } from "lucide-react";
import { TextShow } from './animations/Textos';

export default function About() {
    return (
        <section className="py-16 px-6 md:px-20 overflow-hidden" id="about">           
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
                {/* Encabezado */}
                <TextShow>
                    <h2 className='text-4xl text-center font-bold mb-4'>
                        Sobre Nosotros
                    </h2>
                    <p className='text-gray-800 text-2xl leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam non neque consequatur fugit eveniet enim ducimus quia? Explicabo natus tenetur fuga repudiandae placeat obcaecati, odio dolorum distinctio nobis consequatur repellat?</p>
                </TextShow>
                {/* Card */}
                <div className='bg-neutral-100 p-4 rounded-xl flex flex-col justify-center md:justify-around md:flex-row gap-2'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <CardAbout icono={Clock} title="Viajes Puntuales" subtitle="Servicio de transporte confiable y a tiempo para tus recorridos por la ciudad" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <CardAbout icono={MapPin} title="Recorridos Personalizados" subtitle="Te llevamos a los lugares más emblemáticos según tu ruta preferida" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <CardAbout icono={Headset} title="Atención Personalizada" subtitle="Estamos disponibles para ayudarte antes, durante y después de tu viaje" />
                    </motion.div>
                </div>

                {/* Imagen 
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
                </motion.div>*/}
            </div>
        </section>


    )
}

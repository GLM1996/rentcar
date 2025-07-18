import React from 'react'
import { motion } from 'framer-motion'
import { TextShow } from './animations/Textos'
import { Clock, MapPin, Headset } from 'lucide-react'
import { Imagen } from './animations/Imagen'
import BackgroundImageAnimated from './animations/BackgroundImageAnimated'

export default function Services() {
  return (
    <section className="relative py-2 md:py-16 px-6 md:px-20 overflow-hidden" id="services">
      <BackgroundImageAnimated />
      {/* Capa oscura opcional para contraste */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Contenedor de las tarjetas */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl shadow-xl backdrop-blur-md">

        {/* Tarjeta 1 */}
        <div className="flex flex-col items-center justify-center text-center p-6">
          <Clock className="w-10 h-10 text-yellow-400 mb-2" />
          <h3 className="text-xl font-semibold text-white mb-1">Viajes Puntuales</h3>
          <p className="text-white/90 text-sm">
            Servicio de transporte confiable y a tiempo para tus recorridos por la ciudad.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex flex-col items-center justify-center text-center p-6">
          <MapPin className="w-9 h-9 text-yellow-400 mb-2" />
          <h4 className="font-semibold text-xl  text-white mb-1">Recorridos Personalizados</h4>
          <p className="text-sm text-white/90">
            Te llevamos a los lugares más emblemáticos según tu ruta preferida.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="flex flex-col items-center justify-center text-center p-6">
          <Headset className="w-9 h-9 text-yellow-400 mb-2" />
          <h4 className="font-semibold text-xl  text-white mb-1">Atención Personalizada</h4>
          <p className="text-sm text-white/90">
            Estamos disponibles para ayudarte antes, durante y después de tu viaje.
          </p>
        </div>

      </div>
    </section>

  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { TextShow } from './animations/Textos'
import { Clock, MapPin, Headset } from 'lucide-react'
import { Imagen } from './animations/Imagen'

export default function Services() {
  return (
    <section className="py-2 md:py-16 px-6 md:px-20 overflow-hidden" id="services">
      <div className="max-w-6xl mx-auto shadow-lg bg-neutral-100  rounded-xl flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Imagen>
            <div className="flex flex-1 items-center justify-center h-full">
              <img
                src="/img/servicesBg.png"
                alt="Almendrón rojo cubano"
                className="w-full max-w-sm object-contain"
              />
            </div>
          </Imagen>

          <TextShow>
            <div className="flex flex-1 flex-col items-center justify-center  p-6 h-full">
              <Clock className="w-10 h-10 text-red-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Viajes Puntuales</h3>
              <p className="text-gray-600 text-sm">
                Servicio de transporte confiable y a tiempo para tus recorridos por la ciudad.
              </p>
            </div>
          </TextShow>

          {/* Tarjeta 2 - debajo del carro y tarjeta 1 */}
          <TextShow>
            <div className="rounded-xl p-5 flex flex-col items-center justify-center text-center">
              <MapPin className="w-9 h-9 text-red-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Recorridos Personalizados</h4>
              <p className="text-sm text-gray-600">
                Te llevamos a los lugares más emblemáticos según tu ruta preferida.
              </p>
            </div>
          </TextShow>

          {/* Tarjeta 3 - al lado de tarjeta 2 */}
          <TextShow>
            <div className="rounded-xl p-5 flex flex-col items-center justify-center text-center">
              <Headset className="w-9 h-9 text-red-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Atención Personalizada</h4>
              <p className="text-sm text-gray-600">
                Estamos disponibles para ayudarte antes, durante y después de tu viaje.
              </p>
            </div>
          </TextShow>
        </div>
      </div>

    </section>
  )
}

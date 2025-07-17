import React from 'react';
import { BackgroundAnimation } from './animations/BackgroundAnimation';
import { ContentFadeIn } from './animations/ContentFadeIn';

const Hero = ({
  title = "Viaja con estilo en un clásico cubano",
  subtitle = "Disfruta de paseos únicos por Cienfuegos a bordo de un almendrón rojo icónico.",
  ctaText = "Reserva tu viaje",
  onCtaClick = () => {},
  animation = 'slide',
  duration = 1.5,
  contentDelay = 1.8,
}) => (
  <section className="relative h-screen overflow-hidden">
    <BackgroundAnimation
      animation={animation}
      duration={duration}
      backgroundImage="url('/img/hero1.webp')"
    />

    <ContentFadeIn delay={contentDelay} duration={0.6}>
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">{title}</h1>
      <p className="mt-4 text-lg md:text-xl max-w-xl drop-shadow">{subtitle}</p>
      <button
        onClick={onCtaClick}
        className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-2xl text-white text-lg font-semibold shadow-lg transition"
      >
        {ctaText}
      </button>
    </ContentFadeIn>
  </section>
);

export default Hero;

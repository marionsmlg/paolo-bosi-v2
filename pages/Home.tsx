import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import FadeIn from '../components/FadeIn';

const Home: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex h-screen w-full flex-col items-center justify-center py-20 px-4">
          <div className="flex flex-col gap-6 text-center">
            <h1 className="organic-distortion text-5xl font-extralight uppercase leading-tight tracking-[0.2em] md:text-7xl lg:text-8xl text-anthracite dark:text-white drop-shadow-sm cursor-default opacity-0 animate-hero-title">
              PAOLO BOSI
            </h1>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-xl font-light tracking-[0.1em] text-anthracite dark:text-text-secondary-dark md:text-2xl drop-shadow-sm opacity-0 animate-hero-subtitle [animation-delay:400ms]">
                La Fracture Silencieuse
              </h2>
              <span className="h-px bg-primary opacity-0 animate-hero-line [animation-delay:800ms]"></span>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in [animation-delay:1500ms] fill-mode-forwards">
             <svg className="w-6 h-6 text-anthracite dark:text-white opacity-70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor">
               <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
             </svg>
          </div>
        </section>

        {/* Gallery Section */}
        <FadeIn className="w-full">
          <Gallery />
        </FadeIn>

        {/* Statement Section */}
        <section className="w-full py-24 px-4 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-sm">
          <FadeIn className="mx-auto flex max-w-4xl flex-col items-center text-center p-8 md:p-12">
            <h2 className="text-sm font-bold uppercase leading-tight tracking-[0.2em] mb-8 text-primary">
              L'intimité des choses
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-anthracite dark:text-text-secondary-dark font-light drop-shadow-sm mb-6">
              "L'artiste a un regard particulier sur la réalité. De sa perplexité face au monde, il en extrait une image, une émotion, une œuvre. Paolo Bosi a cette faculté de ne pas seulement voir le beau dans les choses belles, il a une attention particulière pour les formes simples, les objets pauvres, anodins."
            </p>
            <p className="text-base leading-relaxed text-anthracite/80 dark:text-text-secondary-dark/80 font-light italic">
              — Alain Amiel
            </p>
            <div className="mt-10 h-px w-24 bg-wood opacity-50"></div>
          </FadeIn>
        </section>

        {/* Atelier Teaser */}
        <section className="w-full py-16 md:py-24 relative">
          <FadeIn className="mx-auto flex max-w-5xl flex-col items-center px-4">
            <h2 className="mb-8 text-2xl font-bold uppercase leading-tight tracking-[0.2em] text-text-primary dark:text-white">L'Atelier</h2>
            
            {/* Video Container */}
            <div className="aspect-video w-full max-w-4xl shadow-2xl border border-wood/20 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden bg-black rounded-sm relative group">
                <iframe 
                  src="https://drive.google.com/file/d/1eupcNCPtCUGD_9b5Fc9BsCLkmtXvUoh6/preview" 
                  className="w-full h-full absolute inset-0 border-0"
                  allow="autoplay; fullscreen"
                  title="Vidéo de l'atelier"
                ></iframe>
            </div>

            <div className="mt-8 max-w-xl text-center">
                <p className="text-sm leading-relaxed text-anthracite dark:text-text-secondary-dark drop-shadow-sm font-medium tracking-wide">
                  SOMMA-LOMBARDO — MILAN — VALLAURIS
                </p>
                <p className="mt-4 text-sm leading-relaxed text-anthracite dark:text-text-secondary-dark drop-shadow-sm">
                  Le dessin est dans la tête et ne s'arrête pas. La sculpture, elle, est définitive.
                </p>
            </div>
            <Link to="/atelier" className="mt-8 rounded-sm border border-wood px-10 py-3 text-xs uppercase tracking-[0.2em] text-wood hover:bg-wood hover:text-white transition-all bg-white/30 backdrop-blur-sm shadow-sm hover:scale-105 duration-300">
              Découvrir le processus
            </Link>
          </FadeIn>
        </section>
      </div>
    </div>
  );
};

export default Home;
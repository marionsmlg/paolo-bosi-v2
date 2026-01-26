import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const exhibitions = [
  { year: '2024', title: 'Nomad art contemporain', location: 'Chapelle des Pénitents Blancs, Vence', type: 'Exposition de groupe', img: 'https://picsum.photos/seed/expo2024/800/600' },
  { year: '2023', title: 'Fayoum', location: 'Agence Tosca, Nice', type: 'Exposition personnelle', img: 'https://picsum.photos/seed/expo2023/800/600' },
  { year: '2023', title: 'Lisières des Territoires', location: 'Beaux Arts de Cannes', type: 'Avec Enzo Maio', img: 'https://picsum.photos/seed/expo2023b/800/600' },
  { year: '2013', title: 'La fracture silencieuse', location: 'Chapelle de la Miséricorde, Vallauris', type: 'Rétrospective majeure', img: 'https://picsum.photos/seed/fracture/800/600' },
];

const pastExhibitions = [
  "2011 - Laure Matarasso, Nice",
  "2011 - Michel Blachère, Paris",
  "2011 - La Passerelle, Vallauris",
  "2011 - Umam, Nice",
  "2009 - Galerie Sintitulo, Mougins",
  "2005 - Galerie Sintitulo, Mougins",
  "2003 - Atelier 49, Vallauris (Première exposition personnelle)",
  "Villa Reale, Monza (Portraits en plâtre)",
  "DARS, Milan",
  "Galerie XXI, Paris",
  "Centre d'Art Châteauvert"
];

const Expositions: React.FC = () => {
  return (
    <div className="w-full pb-20">
      {/* Header - transparent bg */}
      <div className="w-full py-16 text-center px-4 relative z-10 animate-fade-in">
        <h1 className="text-4xl font-bold uppercase tracking-[0.2em] mb-4 text-text-primary dark:text-white drop-shadow-sm">Expositions</h1>
        <p className="text-anthracite dark:text-white italic max-w-xl mx-auto drop-shadow-sm font-medium">
          "Une nouvelle mise en scène, un nouveau dialogue avec l'espace."
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-8 relative z-10">
        {exhibitions.map((expo, index) => (
          <FadeIn key={index} delay={index * 150} className="h-full">
            <div className="group flex flex-col gap-4 bg-white/40 dark:bg-black/40 backdrop-blur-md p-6 rounded-lg border border-wood/10 shadow-sm transition-all hover:bg-white/60 dark:hover:bg-black/60 hover:shadow-md h-full">
              <div className="relative aspect-video w-full rounded-sm bg-sand/20 dark:bg-gray-800 border border-wood/10 overflow-hidden">
                 <img 
                   src={expo.img} 
                   alt={expo.title} 
                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                 />
                 <div className="absolute top-4 left-4 bg-background-light/95 dark:bg-black/80 backdrop-blur px-3 py-1 text-sm font-bold tracking-widest text-wood dark:text-white shadow-sm z-20">
                   {expo.year}
                 </div>
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 drop-shadow-sm">{expo.type}</span>
                <h3 className="text-xl font-medium text-text-primary dark:text-white drop-shadow-sm">{expo.title}</h3>
                <p className="text-anthracite dark:text-gray-200 text-sm mt-1">{expo.location}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-24 px-6 relative z-10">
        <FadeIn>
          <div className="bg-white/50 dark:bg-black/50 backdrop-blur-md p-10 rounded-lg border border-wood/10 shadow-lg">
              <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-center mb-8 border-b border-wood/20 dark:border-gray-600 pb-6 text-anthracite dark:text-white">
                  Archives
              </h2>
              <ul className="space-y-4 text-center">
                  {pastExhibitions.map((item, idx) => (
                      <li key={idx} className="text-anthracite dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-default font-light tracking-wide">
                          {item}
                      </li>
                  ))}
              </ul>
          </div>
        </FadeIn>
      </div>

      {/* Next Page CTA */}
      <section className="w-full pt-20 flex justify-center relative z-10">
        <Link to="/presse" className="rounded-sm border border-wood/50 px-10 py-3 text-xs uppercase tracking-[0.2em] text-wood dark:text-white hover:bg-wood hover:text-white dark:hover:bg-white dark:hover:text-black transition-all bg-white/30 dark:bg-black/30 backdrop-blur-sm shadow-sm">
          Lire la revue de presse
        </Link>
      </section>
    </div>
  );
};

export default Expositions;
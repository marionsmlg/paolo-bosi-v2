import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const Atelier: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Header - Transparent bg */}
      <div className="w-full py-16 text-center relative z-10 animate-fade-in">
        <h1 className="text-4xl font-bold uppercase tracking-[0.2em] mb-4 text-text-primary dark:text-white drop-shadow-sm">L'Atelier</h1>
        <FadeIn delay={300}>
            <p className="text-anthracite dark:text-white italic drop-shadow-sm font-light">Matière, Mémoire et Geste</p>
        </FadeIn>
      </div>

      {/* Main Big Image (Content) */}
      <div className="w-full h-[60vh] md:h-[80vh] relative shadow-2xl overflow-hidden">
         <img 
            src="https://raw.githubusercontent.com/pearlstudio-git/paolobosifullsitemaquette/refs/heads/main/Atelier.webp" 
            alt="Vue panoramique de l'atelier" 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
         />
         <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background-light/90 dark:from-background-dark/90 to-transparent opacity-90 h-32 pointer-events-none"></div>
      </div>

      {/* Biography Section */}
      <section className="w-full py-20 px-6 relative z-10">
        <FadeIn className="mx-auto max-w-4xl bg-white/60 dark:bg-black/60 backdrop-blur-md p-8 md:p-16 rounded-sm border-l-2 border-primary shadow-sm">
          <h2 className="text-xl font-bold uppercase tracking-[0.2em] mb-6 text-wood dark:text-white">Biographie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-sm md:text-base leading-loose text-text-primary dark:text-gray-100 font-light text-justify">
              <p>
                Né à Somma-Lombardo, sur les rives du Lac Majeur, le dessin est venu naturellement, très jeune, en copiant les profils des Madones. 
                Formé au lycée artistique de Varèse puis aux <strong>Beaux-Arts de Milan</strong> (section sculpture), il "digère" l'Impressionnisme, l'Arte Povera et le Minimalisme américain.
              </p>
            </div>
            <div className="text-sm md:text-base leading-loose text-text-primary dark:text-gray-100 font-light text-justify">
              <p>
                C'est à <strong>Vallauris</strong> qu'il ancre son travail. Il y découvre un atelier, apprend à manier la tronçonneuse, et réalise ses premières sculptures abstraites. 
                Son travail s'appuie sur des éléments simples : l'intérieur, le caché, le creux, la cicatrice.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Process Steps (From Catalog) */}
      <section className="w-full py-12 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-16">
            
            {/* Step 1: Le Dessin */}
            <FadeIn>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-sm border border-wood/10 overflow-hidden">
                        <img src="https://picsum.photos/seed/sketches/800/600" className="w-full h-full object-cover grayscale contrast-125" alt="Croquis" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4 bg-white/40 dark:bg-black/40 backdrop-blur-sm p-8 rounded-lg">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-wood dark:text-white border-b border-wood/20 pb-2 inline-block">Le Dessin</h3>
                        <p className="text-anthracite dark:text-gray-200 leading-relaxed italic">
                            "Pour Paolo, le dessin est premier. Le crayon court sur les pages jaunes de son carnet comme un discours ininterrompu."
                        </p>
                        <p className="text-sm text-anthracite dark:text-gray-300 text-justify">
                            Le dessin est libre, il est dans la tête. Ses dessins au trait particulièrement fin, presque en filigrane, rendent compte de recherches minutieuses pour saisir une quintessence. 
                            La fluidité du dessin le prépare mentalement à sa rencontre avec la matière dure.
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Step 2: Le Bois */}
            <FadeIn>
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-sm border border-wood/10 overflow-hidden">
                         <img src="https://picsum.photos/seed/woodwork/800/600" className="w-full h-full object-cover grayscale contrast-125" alt="Travail du bois" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4 bg-white/40 dark:bg-black/40 backdrop-blur-sm p-8 rounded-lg text-right md:text-left">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-wood dark:text-white border-b border-wood/20 pb-2 inline-block">Le Bois</h3>
                        <p className="text-anthracite dark:text-gray-200 leading-relaxed italic">
                            "Le geste apaise. Tu embrasses la pièce, tu danses autour."
                        </p>
                        <p className="text-sm text-anthracite dark:text-gray-300 text-justify">
                            Il en aime la simplicité, la proximité. Le bois n'est pas une matière homogène ; il présente des nœuds, des taches, des contraintes. 
                            Paolo le travaille avec un regard attendri, se souvenant des immenses tas de bois de son enfance. Il veut que les traces des outils restent visibles : marques de tronçonneuse, de gouges, cicatrices.
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Step 3: La Terre */}
            <FadeIn>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-sm border border-wood/10 overflow-hidden">
                        <img src="https://picsum.photos/seed/claywork/800/600" className="w-full h-full object-cover grayscale contrast-125" alt="Argile et Terre" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4 bg-white/40 dark:bg-black/40 backdrop-blur-sm p-8 rounded-lg">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-wood dark:text-white border-b border-wood/20 pb-2 inline-block">La Terre</h3>
                        <p className="text-anthracite dark:text-gray-200 leading-relaxed italic">
                            "Quand la terre vient dans le geste, le dessin disparaît."
                        </p>
                        <p className="text-sm text-anthracite dark:text-gray-300 text-justify">
                            À Vallauris, on n'y échappe pas. Mais chez lui, c'est la terre qui rentre dans le bois. Elle s'introduit dans les interstices, comble les fissures. 
                            La terre s'encastre, agissant comme élément de protection ou système de blocage. Elle s'impose au bois, parfois plus forte que lui.
                        </p>
                    </div>
                </div>
            </FadeIn>

        </div>
      </section>

      {/* Quote */}
      <section className="w-full py-16 mt-12 border-t border-wood/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <FadeIn className="mx-auto max-w-4xl px-6 text-center">
            <blockquote className="text-xl md:text-2xl italic font-light text-anthracite dark:text-white leading-relaxed">
                "Je ne cherche pas à amplifier. Je désire juste poursuivre ma vision et attendre que le sens se dévoile."
            </blockquote>
        </FadeIn>
      </section>

      {/* Next Page CTA */}
      <section className="w-full pb-20 pt-8 flex justify-center relative z-10">
        <Link to="/expositions" className="rounded-sm border border-wood/50 px-10 py-3 text-xs uppercase tracking-[0.2em] text-wood dark:text-white hover:bg-wood hover:text-white dark:hover:bg-white dark:hover:text-black transition-all bg-white/30 dark:bg-black/30 backdrop-blur-sm shadow-sm">
          Voir les expositions
        </Link>
      </section>
    </div>
  );
};

export default Atelier;
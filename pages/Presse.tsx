import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import FadeIn from '../components/FadeIn';

const articles: Article[] = [
  {
    id: '1',
    title: "Paolo Bosi : La pierre comme langage",
    publication: "Art & Décoration",
    date: "Novembre 2023",
    excerpt: "Dans son atelier de l'arrière-pays, le sculpteur italien réinvente le classicisme avec une touche contemporaine saisissante. Une rencontre silencieuse avec la matière.",
    imageUrl: "https://picsum.photos/seed/news1/400/300"
  },
  {
    id: '2',
    title: "Les formes silencieuses de Vallauris",
    publication: "Nice Matin",
    date: "Juin 2022",
    excerpt: "L'exposition estivale met à l'honneur les bustes énigmatiques de Bosi. Une promenade entre ombre et lumière qui ne laisse personne indifférent.",
    imageUrl: "https://picsum.photos/seed/news2/400/300"
  },
  {
    id: '3',
    title: "Sculpture : Le renouveau de la taille directe",
    publication: "Beaux Arts Magazine",
    date: "Septembre 2021",
    excerpt: "Focus sur ces artistes qui reviennent aux fondamentaux. Paolo Bosi nous explique pourquoi il a choisi la résistance du marbre à la fluidité du bronze.",
    imageUrl: "https://picsum.photos/seed/news3/400/300"
  },
  {
    id: '4',
    title: "L'âme de la pierre",
    publication: "La Strada",
    date: "Mai 2019",
    excerpt: "Retour sur l'exposition au Centre d'Art Châteauvert. Les totems de Bosi dialoguent avec la nature environnante dans une harmonie parfaite.",
    imageUrl: "https://picsum.photos/seed/news4/400/300"
  }
];

const Presse: React.FC = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
            <h1 className="text-4xl font-bold uppercase tracking-[0.2em] text-center mb-16 text-text-primary dark:text-white">Presse & Publications</h1>
        </div>
        
        <div className="space-y-12">
          {articles.map((article, index) => (
            <FadeIn key={article.id} delay={index * 150} translateY="translate-y-4">
                <article className="flex flex-col md:flex-row gap-8 items-start border-b border-wood/20 dark:border-gray-800 pb-12 last:border-0">
                <div className="w-full md:w-1/3 aspect-[4/3] bg-sand/20 dark:bg-gray-800 rounded-sm overflow-hidden">
                    <img 
                        src={article.imageUrl} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <div className="w-full md:w-2/3 flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="text-primary text-sm font-bold tracking-widest uppercase">{article.publication}</span>
                        <span className="text-anthracite dark:text-text-secondary-dark text-xs">{article.date}</span>
                    </div>
                    <FadeIn delay={300} translateY="translate-y-2">
                        <h2 className="text-2xl font-medium font-display leading-tight text-text-primary dark:text-white">{article.title}</h2>
                    </FadeIn>
                    <p className="text-anthracite dark:text-text-secondary-dark leading-relaxed mt-2">
                        "{article.excerpt}"
                    </p>
                    <button className="mt-4 text-sm uppercase tracking-wider font-bold border-b-2 border-transparent hover:border-wood text-wood hover:text-primary w-max transition-all pb-1">
                        Lire l'article
                    </button>
                </div>
                </article>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Next Page CTA */}
      <section className="w-full pt-16 flex justify-center">
        <Link to="/contact" className="rounded-sm border border-wood px-10 py-3 text-xs uppercase tracking-[0.2em] text-wood dark:text-white hover:bg-wood hover:text-white dark:hover:bg-white dark:hover:text-black transition-all bg-white/30 dark:bg-black/30 backdrop-blur-sm shadow-sm">
          Contacter l'artiste
        </Link>
      </section>
    </div>
  );
};

export default Presse;
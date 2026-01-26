import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

// Specific artworks from the Paolo Bosi catalog
const sculptures = [
  {
    id: 1,
    title: "Gogna - 2004",
    category: "bustes",
    image: "https://picsum.photos/seed/gogna/600/800",
    alt: "Chêne, 51x43x104 cm"
  },
  {
    id: 2,
    title: "Parto - 2004",
    category: "graines",
    image: "https://picsum.photos/seed/parto/600/800",
    alt: "Hêtre, 50x24x25 cm"
  },
  {
    id: 3,
    title: "Mine - 2003",
    category: "graines",
    image: "https://picsum.photos/seed/mine/600/800",
    alt: "Chêne, 40x40x25 cm"
  },
  {
    id: 4,
    title: "Aile - 2003",
    category: "totems",
    image: "https://picsum.photos/seed/aile/600/800",
    alt: "Chêne, 55x30x135 cm"
  },
  {
    id: 5,
    title: "Guanto - 2004",
    category: "sculptures",
    image: "https://picsum.photos/seed/guanto/600/800",
    alt: "Chêne, 22x20x40 cm"
  },
  {
    id: 6,
    title: "Maschio - 2005",
    category: "totems",
    image: "https://picsum.photos/seed/maschio/600/1000",
    alt: "Chêne, 36x30x174 cm"
  },
  {
    id: 7,
    title: "Femmina - 2005",
    category: "totems",
    image: "https://picsum.photos/seed/femmina/600/1000",
    alt: "Chêne, 30x30x157 cm"
  },
  {
    id: 8,
    title: "Tre Martelli - 2004",
    category: "plaques",
    image: "https://picsum.photos/seed/tremartelli/800/400",
    alt: "Cyprès, 34x94x20 cm"
  },
  {
    id: 9,
    title: "Ouvrevis - 2008",
    category: "totems",
    image: "https://picsum.photos/seed/ouvrevis/1000/400",
    alt: "Chêne, 15x275x30 cm"
  },
  {
    id: 10,
    title: "Sans Titre - 2007",
    category: "paysages",
    image: "https://picsum.photos/seed/sanstitre2007/600/800",
    alt: "Chêne, terre cuite et oxyde"
  },
  {
    id: 11,
    title: "Diable - 2005",
    category: "bustes",
    image: "https://picsum.photos/seed/diable/600/800",
    alt: "Chêne, terre cuite et oxyde"
  },
  {
    id: 12,
    title: "Panier - 2007",
    category: "graines",
    image: "https://picsum.photos/seed/panier/600/800",
    alt: "Tilleul, terre cuite et oxyde"
  },
  {
    id: 13,
    title: "Ruche - 2008",
    category: "graines",
    image: "https://picsum.photos/seed/ruche/600/800",
    alt: "Chêne et terre cuite"
  },
  {
    id: 14,
    title: "Maillet - 2010",
    category: "sculptures",
    image: "https://picsum.photos/seed/maillet/600/400",
    alt: "Chêne, terre cuite et oxyde"
  },
  {
    id: 15,
    title: "Geste 2 - 2010",
    category: "paysages",
    image: "https://picsum.photos/seed/geste2/600/400",
    alt: "Chêne, terre cuite et oxyde"
  },
  {
    id: 16,
    title: "Dessin - 2011",
    category: "sculptures",
    image: "https://picsum.photos/seed/dessin2011/600/800",
    alt: "Stylo sur papier"
  },
  {
    id: 17,
    title: "Croquis Femmina",
    category: "sculptures",
    image: "https://picsum.photos/seed/croquisfemmina/600/800",
    alt: "Stylo sur papier"
  }
];

const categories = [
  { id: "tous", label: "Tous" },
  { id: "bustes", label: "Bustes" },
  { id: "graines", label: "Graines" },
  { id: "plaques", label: "Plaques" },
  { id: "totems", label: "Totems" },
  { id: "paysages", label: "Paysages" },
  { id: "sculptures", label: "Sculptures" }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const [selectedSculpture, setSelectedSculpture] = useState<typeof sculptures[0] | null>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const filteredSculptures = selectedCategory === "tous"
    ? sculptures
    : sculptures.filter(sculpture => sculpture.category === selectedCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSculpture(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 220;
    const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;

    if (row1Ref.current) {
      row1Ref.current.scrollBy({
        left: scrollValue,
        behavior: 'smooth'
      });
    }
    if (row2Ref.current) {
      row2Ref.current.scrollBy({
        left: scrollValue,
        behavior: 'smooth'
      });
    }
  };

  // Split logic
  const shouldSplitRows = selectedCategory === "tous" || filteredSculptures.length > 3;
  // Auto scroll logic
  const shouldAutoScroll = selectedCategory === "tous" || filteredSculptures.length > 8;
  const displaySculptures = shouldAutoScroll ? [...filteredSculptures, ...filteredSculptures] : filteredSculptures;

  // Helper to parse title and year
  const getSculptureDetails = (title: string) => {
    const parts = title.split(' - ');
    if (parts.length > 1) {
      return { name: parts[0], year: parts[1] };
    }
    return { name: title, year: '' };
  };

  return (
    <section className="w-full py-8">
      <div className="mx-auto flex max-w-[90%] flex-col items-center px-4">
        <h2 className="text-2xl font-bold uppercase leading-tight tracking-[0.2em] text-anthracite dark:text-white drop-shadow-sm">
          GALERIE
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-sm font-normal leading-normal transition-all px-4 py-1 rounded-sm uppercase tracking-wider ${
                selectedCategory === category.id
                  ? 'bg-primary text-white font-medium shadow-md'
                  : 'text-text-secondary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary bg-background-light/40 dark:bg-background-dark/40 backdrop-blur-sm border border-transparent hover:border-wood/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-12 w-full relative">
          {/* Blur Overlays */}
          <div 
            className="absolute inset-y-0 left-0 w-8 z-10 pointer-events-none backdrop-blur-[1px]" 
            style={{ 
              maskImage: 'linear-gradient(to right, black, transparent)', 
              WebkitMaskImage: 'linear-gradient(to right, black, transparent)' 
            }}
          />
          <div 
            className="absolute inset-y-0 right-0 w-8 z-10 pointer-events-none backdrop-blur-[1px]" 
            style={{ 
              maskImage: 'linear-gradient(to left, black, transparent)', 
              WebkitMaskImage: 'linear-gradient(to left, black, transparent)' 
            }}
          />

          <div 
            className="flex flex-col gap-8"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)' 
            }}
          >
            {shouldSplitRows ? (
              <>
                {/* Row 1 */}
                <div
                  ref={row1Ref}
                  className="overflow-x-auto scrollbar-hide px-8"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div
                    className={`flex gap-8 ${shouldAutoScroll ? '' : 'justify-center md:justify-center'} ${shouldAutoScroll ? 'animate-scroll' : ''}`}
                    style={shouldAutoScroll ? {} : { minWidth: 'max-content' }}
                  >
                    {displaySculptures
                      .filter((_, index) => index % 2 === 0)
                      .map((sculpture, index) => (
                      <div 
                        key={`${sculpture.id}-${index}-row1`} 
                        className="flex-shrink-0 group cursor-pointer"
                        onClick={() => setSelectedSculpture(sculpture)}
                      >
                        <div className="flex flex-col gap-3 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
                          <div
                            className="aspect-[3/4] w-full bg-cover bg-center bg-no-repeat rounded-sm border border-wood/10 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-[1.02]"
                            style={{ backgroundImage: `url("${sculpture.image}")` }}
                            role="img"
                            aria-label={sculpture.alt}
                          />
                          <div className="flex flex-col">
                            <p className="text-sm font-bold tracking-[0.15em] uppercase text-anthracite dark:text-white group-hover:text-primary transition-colors">
                              {sculpture.title}
                            </p>
                            <p className="text-xs text-anthracite/60 dark:text-gray-400 italic">
                                {sculpture.alt}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Row 2 */}
                <div
                  ref={row2Ref}
                  className="overflow-x-auto scrollbar-hide px-8"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div
                    className={`flex gap-8 ${shouldAutoScroll ? '' : 'justify-center md:justify-center'} ${shouldAutoScroll ? 'animate-scroll' : ''}`}
                    style={shouldAutoScroll ? {} : { minWidth: 'max-content' }}
                  >
                    {displaySculptures
                      .filter((_, index) => index % 2 === 1)
                      .map((sculpture, index) => (
                      <div 
                        key={`${sculpture.id}-${index}-row2`} 
                        className="flex-shrink-0 group cursor-pointer"
                        onClick={() => setSelectedSculpture(sculpture)}
                      >
                        <div className="flex flex-col gap-3 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
                          <div
                            className="aspect-[3/4] w-full bg-cover bg-center bg-no-repeat rounded-sm border border-wood/10 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-[1.02]"
                            style={{ backgroundImage: `url("${sculpture.image}")` }}
                            role="img"
                            aria-label={sculpture.alt}
                          />
                          <div className="flex flex-col">
                            <p className="text-sm font-bold tracking-[0.15em] uppercase text-anthracite dark:text-white group-hover:text-primary transition-colors">
                              {sculpture.title}
                            </p>
                            <p className="text-xs text-anthracite/60 dark:text-gray-400 italic">
                                {sculpture.alt}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Single row */
              <div
                ref={row1Ref}
                className="overflow-x-auto scrollbar-hide px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-8 justify-center md:justify-center" style={{ minWidth: 'max-content' }}>
                  {displaySculptures.map((sculpture, index) => (
                    <div 
                        key={`${sculpture.id}-${index}-single`} 
                        className="flex-shrink-0 group cursor-pointer"
                        onClick={() => setSelectedSculpture(sculpture)}
                    >
                      <div className="flex flex-col gap-3 w-[200px] sm:w-[250px] md:w-[300px]">
                        <div
                          className="aspect-[3/4] w-full bg-cover bg-center bg-no-repeat rounded-sm border border-wood/10 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-[1.02]"
                          style={{ backgroundImage: `url("${sculpture.image}")` }}
                          role="img"
                          aria-label={sculpture.alt}
                        />
                         <div className="flex flex-col">
                            <p className="text-sm font-bold tracking-[0.15em] uppercase text-anthracite dark:text-white group-hover:text-primary transition-colors">
                              {sculpture.title}
                            </p>
                            <p className="text-xs text-anthracite/60 dark:text-gray-400 italic">
                                {sculpture.alt}
                            </p>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {shouldAutoScroll && (
            <>
              <button
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-md bg-background-light/50 dark:bg-background-dark/50 rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-black transition-all z-20 border border-wood/10"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 text-primary dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-md bg-background-light/50 dark:bg-background-dark/50 rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-black transition-all z-20 border border-wood/10"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 text-primary dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedSculpture && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
          style={{ backgroundColor: 'rgba(28, 25, 23, 0.95)' }}
          onClick={() => setSelectedSculpture(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedSculpture(null)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[110]"
          >
            <X size={32} />
          </button>

          <div 
            className="relative flex flex-col md:flex-row max-w-7xl w-full h-full md:h-auto items-center justify-center gap-8 md:gap-16"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            {/* Image Container with Photographer Credit */}
            <div className="w-full md:w-auto h-[60vh] md:h-[85vh] flex-shrink-0 flex flex-col items-center justify-center">
               <img 
                 src={selectedSculpture.image} 
                 alt={selectedSculpture.title}
                 className="max-w-full flex-1 min-h-0 object-contain shadow-2xl rounded-sm"
               />
               <p className="mt-4 text-xs font-light tracking-[0.2em] text-gray-400 uppercase">
                  Photo : Studio Bosi
               </p>
            </div>

            {/* Info Container */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-white max-w-sm">
               <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.15em] leading-tight mb-2">
                 {getSculptureDetails(selectedSculpture.title).name}
               </h2>
               <span className="text-primary text-xl font-light tracking-widest mb-6 block">
                  {getSculptureDetails(selectedSculpture.title).year}
               </span>
               
               <div className="w-12 h-px bg-wood/50 mb-6"></div>
               
               <p className="text-lg font-light text-gray-300 italic tracking-wide">
                 {selectedSculpture.alt}
               </p>
               
               <p className="mt-8 text-sm uppercase tracking-widest text-gray-500">
                 {selectedSculpture.category}
               </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
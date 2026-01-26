import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  speed?: number; // 0 to 1
  containerClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ speed = 0.1, containerClassName = "", className = "", ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress relative to viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const center = windowHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = elementCenter - center;
        
        setOffset(distanceFromCenter * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${containerClassName}`}>
      <img 
        className={`transition-transform duration-100 ease-linear will-change-transform ${className}`}
        style={{ transform: `translateY(${offset}px) scale(1.15)` }} // Scale up to avoid gaps
        {...props}
      />
    </div>
  );
};

export default ParallaxImage;
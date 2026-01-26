import React, { useEffect, useRef, useState } from 'react';

interface RevealImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const RevealImage: React.FC<RevealImageProps> = ({ containerClassName = "", className = "", src, alt, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      });
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
      <img 
        src={src} 
        alt={alt}
        className={`transition-all duration-[1.5s] ease-out transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } ${className}`} 
        {...props}
      />
    </div>
  );
};

export default RevealImage;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show overlay immediately on route change
    setIsVisible(true);
    
    // Fade out after a short delay to allow content to render
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 100); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background-light dark:bg-background-dark pointer-events-none transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};

export default PageTransition;
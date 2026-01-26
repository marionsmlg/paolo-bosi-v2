import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Hide cursor on touch devices to prevent artifacts
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      // Main dot follows instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      // Follower ring follows with delay (CSS transition handled)
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* The small central dot */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-wood dark:bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ marginTop: '-4px', marginLeft: '-4px' }}
      />
      
      {/* The slow magnetic ring */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 border border-wood dark:border-white rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-difference ${
          hovered ? 'w-12 h-12 bg-wood/20' : 'w-8 h-8 bg-transparent'
        }`}
        style={{ 
          marginTop: hovered ? '-24px' : '-16px', 
          marginLeft: hovered ? '-24px' : '-16px' 
        }}
      />
    </>
  );
};

export default CustomCursor;
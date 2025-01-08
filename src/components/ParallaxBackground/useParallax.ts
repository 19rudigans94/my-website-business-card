import { useState, useEffect } from 'react';

export const useParallax = () => {
  const [scroll, setScroll] = useState({
    y: 0,
    lastY: 0,
    ticking: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!scroll.ticking) {
        window.requestAnimationFrame(() => {
          setScroll(prev => ({
            y: window.pageYOffset,
            lastY: prev.y,
            ticking: false
          }));
        });

        setScroll(prev => ({ ...prev, ticking: true }));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll.ticking]);

  return scroll.y;
};
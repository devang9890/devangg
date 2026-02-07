import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (scrollY < 10) {
        setIsAtTop(true);
        setScrollDirection('up');
      } else {
        setIsAtTop(false);
        if (Math.abs(scrollY - lastScrollY) < 10) {
          ticking = false;
          return;
        }
        setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
      
      setScrollY(scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollDirection, scrollY, isAtTop };
};

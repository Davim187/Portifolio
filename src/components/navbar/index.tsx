import { useState, useEffect } from 'react';
import { Div, NavDots, Dot } from './style';

export const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4; // Número total de páginas

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const screenHeight = window.innerHeight;
    const newPage = Math.round(scrollPosition / screenHeight);
    setCurrentPage(newPage);
  };
  
  const scrollToPage = (page: number) => {
    window.scrollTo({
      top: page * window.innerHeight,
      behavior: 'smooth'
    });
    setCurrentPage(page);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Div>
      <NavDots>
      {[...Array(totalPages)].map((_, index) => (
          <Dot 
            key={index} 
            active={index === currentPage} 
            onClick={() => scrollToPage(index)} 
          />
        ))}
      </NavDots>
    </Div>
  );
};

